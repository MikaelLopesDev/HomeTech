import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function HomeScreen(navigation) {

  const [servicos, setServicos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [servicoSelecionado, setServicoSelecionado] = useState({});

    useEffect(() => {
        const carregarServicos = async () => {
            const servicesData = await AsyncStorage.getItem('@saveforms:services');
            const services = servicesData ? JSON.parse(servicesData) : [];
            setServicos(services);
        };

        carregarServicos();
    }, []);

    const toggleModal = (servico) => {
        setServicoSelecionado(servico);
        setModalVisible(!modalVisible);
    };

let  onPressItem = () =>{


 
}
const recusarServico = async () => {

console.log("serviço recusado");

};
const aceitarServico = async (index) => {
  // Verifica se o serviço no índice fornecido está definido
  if (servicos[index]) {
    const servicosAtualizados = [...servicos];
    servicosAtualizados[index] = {
      ...servicosAtualizados[index],
      status: 'Aceito', // Atualiza o status do serviço
    };
    setServicos(servicosAtualizados);

    // Atualiza o AsyncStorage com a nova lista de serviços
    await AsyncStorage.setItem('@saveforms:services', JSON.stringify(servicosAtualizados));
  } else {
    console.error('Serviço não definido no índice:', index);
  }
};

return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.header}>
      <Text style={styles.headline}>HomeTech</Text>
    </View>

    <View style={styles.subheader}>
      <Text style={styles.subHeadline}>Serviços Disponíveis</Text>
    </View>
    {servicos.map((servico, index) => (
  <TouchableOpacity key={index} onPress={() => toggleModal(servico)} style={styles.infoContainer}>
    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>Data: {servico.selectedDay}/{servico.selectedMonth}/{servico.selectedYear}</Text>
      <Text style={styles.horaText}>Hora: {servico.selectedHour}h</Text>
    </View>

    <View style={styles.detailsContainer}>
      <Text style={styles.detailsText}>Serviço: {servico.service}</Text>
    </View>

    <View style={styles.actionButtonsContainer}>
    <TouchableOpacity onPress={() => aceitarServico(index)} style={[styles.actionButton, styles.acceptButton]}>

        <Text style={styles.actionButtonText}>Aceitar Serviço</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={recusarServico} style={[styles.actionButton, styles.rejectButton]}>
        <Text style={styles.actionButtonText}>Recusar Serviço</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
))}

      {/* Modal para detalhes adicionais */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
    <Text style={styles.modalText}>Detalhes do Serviço</Text>
    <Text style={styles.modalContent}>
  <Text style={styles.modalContentLabel}>Marca:</Text> {servicoSelecionado.marca}
</Text>
<Text style={styles.modalContent}>
  <Text style={styles.modalContentLabel}>Garantia:</Text> {servicoSelecionado.garantia}
</Text>
<Text style={styles.modalContent}>
  <Text style={styles.modalContentLabel}>Problema:</Text> {servicoSelecionado.problema}
</Text>

          {/* Botão para fechar o modal */}
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeModalButton}>
            <Text style={styles.actionButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      </ScrollView>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B5998',
  },
  headline: {
    color: '#FFFFFF',
    fontSize: 20, // Ajuste no tamanho da fonte
    fontWeight: 'bold',
  },
  subheader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    paddingVertical: 8, // Reduzido para tornar mais compacto
  },
  subHeadline: {
    color: '#FFFFFF',
    fontSize: 14, // Ajuste no tamanho da fonte
    fontWeight: 'bold',
  },
  infoContainer: {
    margin: 8, // Margens reduzidas
    padding: 8, // Padding reduzido
    borderRadius: 10, // Ajuste no raio da borda
    backgroundColor: '#3B5998',
  },
  dataContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    paddingBottom: 5, // Padding inferior reduzido
    marginBottom: 5, // Espaço adicional após a data
  },
  dataText: {
    color: '#FFFF00', // Mantendo a data destacada em amarelo
    fontWeight: 'bold',
    fontSize: 14, // Ajuste no tamanho da fonte
  },
  horaText: {
    color: '#FFFF00',
    fontSize: 14, // Ajuste no tamanho da fonte
  },
  detailsContainer: {
    marginTop: 5, // Reduzido para tornar mais compacto
  },
  detailsText: {
    color: '#FFFF00',
    fontWeight: 'bold',
    fontSize: 14, // Ajuste no tamanho da fonte
    marginBottom: 4, // Reduzido para tornar as linhas mais próximas
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionButton: {
    paddingVertical: 8, // Padding vertical reduzido
    paddingHorizontal: 15, // Padding horizontal ajustado
    borderRadius: 5,
    minWidth: 90, // Largura mínima ajustada para tornar os botões mais compactos
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#4CAF50', // Verde
  },
  rejectButton: {
    backgroundColor: '#F44336', // Vermelho
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14, // Ajuste no tamanho da fonte
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
  },
  modalContent: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 16, // Ajuste conforme necessário
  },
  modalContentLabel: {
    fontWeight: 'bold', // Torna o texto em negrito
    color: '#3B5998', // Exemplo de cor para destaque, ajuste conforme necessário
  },
  closeModalButton: {
    backgroundColor: "#3B5998",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
