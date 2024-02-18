import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListAssitenciaTecnica({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  async function handleNew(selectedService) {
    await AsyncStorage.setItem("@saveservice:chooosed", selectedService);
  }  
  async function handleNewID(selectedServiceID) {
    await AsyncStorage.setItem("@saveserviceID:chooosed", selectedServiceID);
  }
  
 const assistenciaTecnicaList = [

    {
      id:"1",
      
      name:"Aparelho de som", 

    },
    {
        id:"2",
       
        name:"Ar condicionado", 
  
      },

      {
        id:"3",
        name:"Celular", 
  
      },

      {
        id:"4",
        name:"Computador Desktop", 
  
      },

      {
        id:"5",
        name:"Câmera", 
  
      },

      {
        id:"6",
        name:"Fone de ouvido", 
  
      },

      {
        id:"7",
        name:"Eletrodoméstico", 
  
      },

      {
        id:"8",
        name:"Geladeira e freezer", 
  
      },

      {
        id:"9",
        name:"Impressora", 
  
      },

      {
        id:"10",
        name:"Mircro-ondas", 
  
      }, 
      {
        id:"11",
        name:"Relógio", 
  
      },

      {
        id:"12",
        name:"Tablet", 
  
      },
      {
        id:"13",
        name:"Telefone Fixo", 
  
      },

      {
        id:"14",
        name:"Televisão", 
  
      },

      {
        id:"15",
        name:"Vídeo game", 
  
      },

 ]

 const onPressItem = (id) => {
  setSelectedId(id);
};

const oneService = ({ item }) => (
  <TouchableOpacity onPress={() => onPressItem(item.id)}>
  <View style={[styles.item, selectedId === item.id && styles.selectedItem]}>
    <Text style={[styles.name, selectedId === item.id && styles.selectedText]}>{item.name}</Text>
  </View>
</TouchableOpacity>
);

const headerComponent = () => {
  return <Text style={styles.lisHeadline}>Serviços Assistência Técnica</Text>;
};

const itemSeparator = () => {
  return <View style={styles.separator} />;
};

return (
  <SafeAreaView>
    <FlatList
      ListHeaderComponentStyle={styles.listHeader}
      ListHeaderComponent={headerComponent}
      data={assistenciaTecnicaList}
      renderItem={oneService}
      ItemSeparatorComponent={itemSeparator}
      keyExtractor={item => item.id.toString()}
    />

    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const selectedService = assistenciaTecnicaList.find(item => item.id === selectedId)?.name;
          const selectedServiceID = assistenciaTecnicaList.find(item => item.id === selectedId)?.id;
          if (selectedService) {
            handleNew(selectedService);
            handleNewID(selectedServiceID);
            console.log(selectedServiceID);
            console.log(selectedService);
            navigation.navigate('Forms');
          }
        }}
      >
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
listHeader: {
  height: 70,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#001C30',
},
lisHeadline: {
  color: '#FFF',
  fontSize: 21,
  fontWeight: 'bold',
  marginTop: 15,
},
item: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,
},
selectedItem: {
  backgroundColor: '#001C30', // Cor quando o item é selecionado
},
selectedText: {
  color: 'white', // Cor do texto quando o item é selecionado
},
name: {
  fontWeight: 'bold',
  fontSize: 18,
  marginLeft: 15,
},
separator: {
  height: 1,
  backgroundColor: '#FFF',
  width: '100%',
},
buttonContainer: {
  width: "90%",
  alignSelf: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 30,
},
button: {
  height: 38,
  width: 105,
  flex: 1,
  backgroundColor: "#001C30",
  borderRadius: 15,
  alignItems: "center",
  justifyContent: "center",
},
buttonText: {
  color: "white",
  fontSize: 20,
  fontWeight: "700",
},
});