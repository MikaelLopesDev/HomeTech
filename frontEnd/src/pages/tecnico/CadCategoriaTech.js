import { StatusBar } from 'expo-status-bar';
import React , { Component } from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView} from 'react-native';



export default function CadCategoriaTech({navigation}) {

 const services = [
 {
id: 1,
name: 'Assistência Técnica',
image: require('../../assets/assistenciaTecnica.png'),

 },
 {
  id: 2,
  name: 'Reformas e Reparos',
  image: require('../../assets/reformasReparos.png'),
   },
   {
    id: 3,
    name: 'Eventos',
    image: require('../../assets/eventos.png'),
     },
     {
      id: 4,  
      name: 'Moda e Beleza',
     image: require('../../assets/beauty.png'),
       },
       {
        id: 5,
        name: 'Automóveis',
        image: require('../../assets/carro.png'),
         },



 ]


 let onPressItem = (id) => {

   if(id == 1){
    navigation.navigate('CadListAssitenciaTecnica')
   }
   else if (id == 2){
    navigation.navigate('CadListAutomoveis')
   }
   else if (id == 3){
    navigation.navigate('CadListEventos')

   }
   else if (id ==4){
    navigation.navigate('CadListModaBeleza')
   }
   else if(id==5){
    navigation.navigate('CadListReformasReparos')
   }

return id
 }


 const oneService = ( {item} ) => (

  <TouchableOpacity onPress={() => console.log(onPressItem(item.id)) }>
<View style = {styles.item}>
<View style = {styles.serviceContainer}>

  <Image source ={item.image} style = {styles.service} />
</View>
<Text style = {styles.name}>{item.name}</Text>
</View>
</TouchableOpacity>
)
headerComponent = () => {
  return <Text style = {styles.lisHeadline}>HomeTech Categorias</Text>
}
itemSeparator = () => {
  return <View style = {styles.separator} />
}

  return (
    <SafeAreaView >

     
      <FlatList

      ListHeaderComponentStyle = {styles.listHeader}

      ListHeaderComponent={headerComponent}


     data = {services}
     renderItem = {oneService} 

     ItemSeparatorComponent = {itemSeparator}
    
     />

     
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  listHeader:{
 height: 60,
 alignItems: 'center',
 justifyContent: 'center',
 backgroundColor: '#3B5998',

  },
 lisHeadline:{
color: '#FFF',
fontSize: 21,
fontWeight: 'bold',
alignItems: 'center',
paddingVertical: 13,

 },
 item: {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 13,
},
 serviceContainer:{
  backgroundColor: "#D9D9D9",
  borderRadius: 100,
  height: 89,
  width: 89,
  justifyContent: "center",
  alignItems: "center",
},
 service:{
height: 55,
width: 55,
 },
 name:{
fontWeight: 'bold',
fontSize:18,
marginLeft: 15,
 },
 
  separator: {
    height: 1,
    backgroundColor: '#CCC',
    width: '100%',
    
  },
});