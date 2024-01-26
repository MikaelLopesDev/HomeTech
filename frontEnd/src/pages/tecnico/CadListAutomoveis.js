import React, { useState }from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';
import Checkbox from "../../components/checkbox";


export default function CadListAutomoveis({navigation}) {



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
 

 const servicesSelected = []
 let onPressItem = (name) => {
if(servicesSelected.includes(name)){
    servicesSelected.splice(servicesSelected.indexOf(name), 1);
    alert('Serviço Removido : ' + name)
    alert(servicesSelected)
}else{
  servicesSelected.push(name)
  alert('Serviço selececionado : ' + name)
  alert(servicesSelected)
}
 }

 const oneService = ( {item} ) => (
  
    <TouchableOpacity onPress={() => onPressItem(item.name)}>
  <View style = {styles.item}>
  <Text style = {styles.name}>{item.name}</Text>
  </View>

  </TouchableOpacity>
  )
  





  headerComponent = () => {

    return <Text style = {styles.lisHeadline}>Serviços Automóveis</Text>
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
  