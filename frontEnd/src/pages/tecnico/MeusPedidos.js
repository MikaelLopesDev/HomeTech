import React, { useState, useEffect, useCallback  } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal, ScrollView,RefreshControl,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const getStatusStyle = (status) => {
    return {
        color: status === 'Aceito' ? 'green' : 'white', // Verde se Aceito, senão amarelo
        fontWeight: 'bold',
        fontSize: 14,
    };
};

export default function ServiceStatusScreen({ navigation }) {
    const [servicos, setServicos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [servicoSelecionado, setServicoSelecionado] = useState({});
    const [refreshing, setRefreshing] = useState(false);
    const carregarServicos = async () => {
      try {
          const userId = await AsyncStorage.getItem('userId');
          if (!userId) {
              throw new Error('ID do usuário não encontrado');
          }
  
          // Busca os dados do usuário específico usando o ID
          const response = await fetch(`http://18.188.75.46:8080/users/${userId}`);
          const userData = await response.json();
  
          if (!response.ok) {
              throw new Error('Falha ao buscar informações do usuário');
          }
  
          // Acessa diretamente a chave jobRequestsAsCustomer do objeto do usuário
          const servicosFiltrados = userData.jobRequestsAsTechnician ?? [];
  
          setServicos(servicosFiltrados);
      } catch (error) {
          console.error('Erro ao buscar serviços:', error);
          Alert.alert("Erro", "Não foi possível buscar os serviços.");
      }
  }
  

  useEffect(() => {
      carregarServicos();
  }, []);

  const onRefresh = useCallback(async () => {
      setRefreshing(true);
      await carregarServicos();
      setRefreshing(false);
  }, []);
  
    const toggleModal = (servico) => {
      setServicoSelecionado(servico);
      setModalVisible(!modalVisible);
    };
  
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.header}>
                    <Text style={styles.headline}>Minhas Solicitações</Text>
                </View>

               

                {servicos.map((servico, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleModal(servico)} style={styles.infoContainer}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.dataText}>Data: 19/02/2024</Text>
                            <Text style={styles.horaText}>Hora: 08H:30</Text>
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
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001C30',
      
    },
    headline: {
      color: '#FFFFFF',
      fontSize: 20, // Ajuste no tamanho da fonte
      fontWeight: 'bold',
      marginTop: 20,
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
      backgroundColor: '#001C30',
    },
    dataContainer: {
      borderBottomWidth: 1,
      borderBottomColor: '#FFFFFF',
      paddingBottom: 5, // Padding inferior reduzido
      marginBottom: 5, // Espaço adicional após a data
    },
    dataText: {
      color: '#FFF', // Mantendo a data destacada em amarelo
      fontWeight: 'bold',
      fontSize: 14, // Ajuste no tamanho da fonte
    },
    horaText: {
      color: '#FFF',
      fontSize: 14, // Ajuste no tamanho da fonte
    },
    detailsContainer: {
      marginTop: 5, // Reduzido para tornar mais compacto
    },
    detailsText: {
      color: '#FFF',
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
  