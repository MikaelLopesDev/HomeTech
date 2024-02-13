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
        name:"Acessibilidade", 
  
      },
      {
          id:2,
          name:"Afiaçção", 
    
        },
  
        {
          id:3,
          name:"Agrimensura", 
    
        },
  
        {
          id:4,
          name:"Arquiteto", 
    
        },
  
        {
          id:5,
          name:"Banheira", 
    
        },
  
        {
          id:6,
          name:"Casas e Chalés de madeira", 
    
        },
  
        {
          id:7,
          name:"Chaveiro", 
    
        },
  
        {
          id:8,
          name:" Cimatização ", 
    
        },
  
        {
          id:9,
          name:"Decorador ", 
    
        },
  
        {
          id:10,
          name:"Demolição", 
    
        }, 
        {
          id:11,
          name:"Desentupidor", 
    
        },
  
        {
          id:12,
          name:"Design de interiores", 
    
        },
        {
          id:13,
          name:" Eletricista", 
    
        },
  
        {
          id:14,
          name:"Engenheiro", 
    
        },
  
        {
          id:15,
          name:"Encanador ", 
    
        },
  
        {
        id: 16,
          name : "Fossa ", 
    
        },
        {
          id: 17,
            name : "Gesso e drywall ", 
      
          },
          {
              id: 18,
                name : "Gás", 
          
              },
              {
                  id: 19,
                    name : "Jardinagem ", 
              
                  },
  
                  {
                      id: 20,
                        name : "Marceneiro ", 
                  
                      },
                      {
                          id: 21,
                            name : "Pintor ", 
                      
                          },
                      
                          {
                              id: 22,
                                name : "Piscina ", 
                          
                              },
                      
                              {
                                  id: 23,
                                    name : "Portão automático ", 
                              
                                  },
                      
                                  {
                                      id: 24,
                                        name : "Segurança eletrônica ", 
                                  
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