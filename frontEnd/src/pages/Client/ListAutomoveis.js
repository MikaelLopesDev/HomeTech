import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListAssitenciaTecnica({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  async function handleNew(selectedService) {
    await AsyncStorage.setItem("@saveservice:chooosed", selectedService);
  }

 const assistenciaTecnicaList = [

    {
        
            id:1,
            name:"Alarme automotivo", 
      
          },
          {
              id:2,
              name:"Ar condicionado", 
        
            },
      
            {
              id:3,
              name:"Auto elétrico", 
        
            },
      
            {
              id:4,
              name:"Borracharia", 
        
            },
      
            {
              id:5,
              name:"Guincho", 
        
            },
      
            {
              id:6,
              name:"Higienização e Polimento", 
        
            },
      
            {
              id:7,
              name:"Insulfilm", 
        
            },
      
            {
              id:8,
              name:"Martelinho de ouro", 
        
            },
      
            {
              id:9,
              name:"Pintura", 
        
            },
      
            {
              id:10,
              name:"Som automotivo", 
        
            }, 
            {
              id:11,
              name:"Vendas de Automóveis", 
        
            },
      
            {
              id:12,
              name:"Vidraçaria", 
        
            },

 ]

 
 const onPressItem = (id) => {
  setSelectedId(id);
};

const oneService = ({ item }) => (
  <TouchableOpacity onPress={() => onPressItem(item.id)}>
    <View style={[styles.item, selectedId === item.id && styles.selectedItem]}>
      <Text style={styles.name}>{item.name}</Text>
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
          if (selectedService) {
            handleNew(selectedService);
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
  backgroundColor: '#3B5998',
},
lisHeadline: {
  color: '#FFF',
  fontSize: 21,
  fontWeight: 'bold',
},
item: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,
},
selectedItem: {
  backgroundColor: '#3B5998', // Cor quando o item é selecionado
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
  backgroundColor: "#3B5998",
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