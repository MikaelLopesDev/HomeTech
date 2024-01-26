import React, { useState }from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';
import Checkbox from "../../components/checkbox";


export default function ConfiguracoesTech({navigation}) {



 const assistenciaTecnicaList = [

    {
      id:1,
      name:"Perfil", 

    },
    {
        id:2,
        name:"solicitar serviço", 
  
      },
    

 ]

 let onPressItem = (id) => {
 if(id == 1)
 navigation.navigate("PerfilTech")
 else if(id == 2)
 navigation.navigate("TabRoutesClient")
 }

 const oneService = ( {item} ) => (
  
    <TouchableOpacity onPress={() => onPressItem(item.id)}>
  <View style = {styles.item}>
  <Text style = {styles.name}>{item.name}</Text>
  </View>

  </TouchableOpacity>
  )
  





  headerComponent = () => {

    return <Text style = {styles.lisHeadline}>Configurações</Text>
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
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    listHeader:{
   height: 90,
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
  fontSize:20,
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
  });
  