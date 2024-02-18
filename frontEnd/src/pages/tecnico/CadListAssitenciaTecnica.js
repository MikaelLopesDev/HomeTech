import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Alert } from 'react-native';
import axios from 'axios';

export default function CadListAssitenciaTecnica({ navigation, route }) {
  const { formData } = route.params; // Dados do formulário de cadastro
  const [selectedItems, setSelectedItems] = useState([]);

 const assistenciaTecnicaList = [

    {
      id:1,
      name:"Aparelho de som", 

    },
    {
        id:2,
        name:"Ar condicionado", 
  
      },

      {
        id:3,
        name:"Celular", 
  
      },

      {
        id:4,
        name:"Computador Desktop", 
  
      },

      {
        id:5,
        name:"Câmera", 
  
      },

      {
        id:6,
        name:"Fone de ouvido", 
  
      },

      {
        id:7,
        name:"Eletrodoméstico", 
  
      },

      {
        id:8,
        name:"Geladeira e freezer", 
  
      },

      {
        id:9,
        name:"Impressora", 
  
      },

      {
        id:10,
        name:"Mircro-ondas", 
  
      }, 
      {
        id:11,
        name:"Relógio", 
  
      },

      {
        id:12,
        name:"Tablet", 
  
      },
      {
        id:13,
        name:"Telefone Fixo", 
  
      },

      {
        id:14,
        name:"Televisão", 
  
      },

      {
        id:15,
        name:"Vídeo game", 
  
      },

 ];

 const onPressItem = (id) => {
  const alreadySelected = selectedItems.includes(id);
  if (alreadySelected) {
    setSelectedItems(selectedItems.filter(selectedId => selectedId !== id));
  } else {
    setSelectedItems([...selectedItems, id]);
  }
};

const handleFinish = async () => {
  const userData = {
    ...formData,
    avatar: '',
    typeOfPerson: 'TECHNICIAN',

    technicianServices: selectedItems.join(',') // IDs dos serviços selecionados
  };

  try {
    const response = await axios.post('http://18.188.75.46:8080/users', userData);
    if (response.status === 200 || response.status === 201) {
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("LoguinTech");
    } else {
      Alert.alert("Erro", "Não foi possível realizar o cadastro.");
    }
  } catch (error) {
    console.error("Erro ao realizar cadastro:", error);
    Alert.alert("Erro", "Ocorreu um erro ao realizar o cadastro.");
  }
};

const oneService = ({ item }) => (
  <TouchableOpacity onPress={() => onPressItem(item.id)}>
    <View style={[styles.item, selectedItems.includes(item.id) ? styles.itemSelected : null]}>
      {/* Aplica um estilo diferente ao texto se o item estiver selecionado */}
      <Text style={[styles.name, selectedItems.includes(item.id) ? styles.nameSelected : null]}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const headerComponent = () => (
  <Text style={styles.lisHeadline}>Serviços Assistência Técnica</Text>
);

const itemSeparator = () => (
  <View style={styles.separator} />
);

return (
  <SafeAreaView style={styles.container}>
    <FlatList
      ListHeaderComponent={headerComponent}
      data={assistenciaTecnicaList}
      renderItem={oneService}
      ItemSeparatorComponent={itemSeparator}
      keyExtractor={item => item.id.toString()}
    />
    <View style={styles.confirmationContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleFinish}
      >
        <Text style={styles.buttonText}>Finalizar Cadastro</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
}


const styles = StyleSheet.create({
container: {
  flex: 1,
},
lisHeadline: {
  color: '#FFF',
  fontSize: 21,
  fontWeight: 'bold',
  padding: 20,
  textAlign: 'center',
  backgroundColor: '#001C30',
},
item: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 15,
},
nameSelected: {
  color: 'white', // Define a cor do texto para branco quando o item está selecionado
},
itemSelected: {
  backgroundColor: '#001C30', // Altere para a cor desejada para indicar seleção
},
name: {
  fontWeight: 'bold',
  fontSize: 18,
},
separator: {
  height: 1,
  backgroundColor: '#CCC',
  width: '100%',
},
confirmationContainer: {
  padding: 20,
},
button: {
  backgroundColor: "#001C30",
  borderRadius: 15,
  height: 38,
  alignItems: "center",
  justifyContent: "center",
},
buttonText: {
  color: "white",
  fontSize: 20,
  fontWeight: "700",
},
});