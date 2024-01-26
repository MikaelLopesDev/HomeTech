import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function ListAssitenciaTecnica({navigation}) {

  const [service, setService] = useState("");


  async function handleNew(){
 
    await AsyncStorage.setItem("@saveservice:chooosed", service);
    
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

 let onPressItem = (name) => {

  setService(name);

 }




 const oneService = ( {item} ) => (
 

    <TouchableOpacity  onPress={() =>  onPressItem(item.name)}>
  <View style = {styles.item}>
  <Text style = {styles.name}>{item.name}</Text>
  </View>
  </TouchableOpacity>
  )
  





  headerComponent = () => {

    return <Text style = {styles.lisHeadline}>Serviços Assistência Técnica</Text>
  }
  
  itemSeparator = () => {
    return <View style = {styles.separator} />
  }
  
    return (
      <SafeAreaView >
       
        <FlatList
        ListHeaderComponentStyle = {styles.listHeader}
        ListHeaderComponent={headerComponent}
       data = {assistenciaTecnicaList}
       renderItem = {oneService} 
       
       ItemSeparatorComponent = {itemSeparator}
      
     
       />

<View
                style={{
                  width: "90%",
                  alignSelf: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 30,
                }}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    handleNew()
                    console.log(service)
                    navigation.navigate('Forms')
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 20, fontWeight: "700" }}
                  >
                    confirmar
                  </Text>
                </TouchableOpacity>
                
              </View>

       
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    listHeader:{
   height: 70,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#3B5998',
   
    },
   lisHeadline:{
  color: '#FFF',
  fontSize: 21,
  fontWeight: 'bold',
  
  
  
   },
   item:{
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,

  
   },
  
   name:{
  fontWeight: 'bold',
  fontSize:18,
  marginLeft: 15,
  
   },
  
    separator: {
      height: 1,
      backgroundColor: '#FFF',
      width: '100%',
      
    },
     button: {
      height: 38,
      width: 105,
      flex:1,
      backgroundColor: "#3B5998",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  