import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const getStatusStyle = (status) => {
    return {
        color: status === 'Aceito' ? 'green' : 'yellow', // Verde se Aceito, senão amarelo
        fontWeight: 'bold',
        fontSize: 14,
    };
};

export default function ServiceStatusScreen({ navigation }) {
    const [servicos, setServicos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [servicoSelecionado, setServicoSelecionado] = useState({});

    useEffect(() => {
        async function carregarServicos() {
            const servicesData = await AsyncStorage.getItem('@saveforms:services');
            const services = servicesData ? JSON.parse(servicesData) : [];
            setServicos(services);
        }
        carregarServicos();
    }, []);

    const toggleModal = (servico) => {
        setServicoSelecionado(servico);
        setModalVisible(!modalVisible);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headline}>HomeTech - Status dos Serviços</Text>
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
                            <Text style={getStatusStyle(servico.status)}>Status: {servico.status}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    {/* Modal content */}
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
  