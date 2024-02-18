import { StatusBar } from 'expo-status-bar';
import React , { Component } from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView} from 'react-native';



export default function CadCategoriaTech({ navigation, route }) {
  const { formData } = route.params;

  const services = [
    {
      id: 1,
      name: 'Assistência Técnica',
      image: require('../../assets/assistenciaTecnica.png'),
    },
    // Outros serviços...
  ];

  const onPressItem = (id) => {
    let screenName = '';
    switch(id) {
      case 1:
        screenName = 'CadListAssitenciaTecnica';
        break;
      // Adicione outros casos conforme necessário
    }

    if(screenName) {
      navigation.navigate(screenName, { formData });
    }
  };

  const oneService = ({ item }) => (
    <TouchableOpacity onPress={() => onPressItem(item.id)}>
      <View style={styles.item}>
        <View style={styles.serviceContainer}>
          <Image source={item.image} style={styles.service} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => <Text style={styles.lisHeadline}>HomeTech Categorias</Text>}
        data={services}
        renderItem={oneService}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
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