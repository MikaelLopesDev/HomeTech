
import React, { useState }from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';
import Checkbox from "../../components/checkbox";


export default function CadListEventos({navigation}) {



 const assistenciaTecnicaList = [

    {
      id:1,
      name:"Aparelho Animação de festas", 

    },
    {
        id:2,
        name:"Acessor de Eventos", 
  
      },

      {
        id:3,
        name:"Bandas e cantores", 
  
      },

      {
        id:4,
        name:"Bartenders", 
  
      },

      {
        id:5,
        name:"Brindes e lembrancinhas", 
  
      },

      {
        id:6,
        name:"Buffet completo", 
  
      },

      {
        id:7,
        name:"Churrasqueiro", 
  
      },

      {
        id:8,
        name:"Confeteira", 
  
      },

      {
        id:9,
        name:"Decoração", 
  
      },

      {
        id:10,
        name:"Djs", 
  
      }, 
      {
        id:11,
        name:"Confeitaria", 
  
      },

      {
        id:12,
        name:"Florista", 
  
      },
      {
        id:13,
        name:"Garçons", 
  
      },

     

 ]

 let onPressItem = (name) => {
 {/*
 navigation.navigate("Forms")*/}
alert('Serviço selececionado : ' + name)
 }

 const oneService = ( {item} ) => (
  
    <TouchableOpacity onPress={() => onPressItem(item.name)}>
  <View style = {styles.item}>
  <Text style = {styles.name}>{item.name}</Text>
  </View>

  </TouchableOpacity>
  )
  





  headerComponent = () => {

    return <Text style = {styles.lisHeadline}>Serviços Eventos</Text>
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
                    navigation.navigate('LoguinTech')
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
   checkboxview: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
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
  