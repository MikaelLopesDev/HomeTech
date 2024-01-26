import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  SearchBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const services = [
    {
      id: 1,
      name: "Assistência Técnica",
      image: require("../../assets/assistenciaTecnica.png"),
    },
    {
      id: 2,
      name: "Reformas e Reparos",
      image: require("../../assets/reformasReparos.png"),
    },
    {
      id: 3,
      name: "Eventos",
      image: require("../../assets/eventos.png"),
    },
    {
      id: 4,
      name: "Moda e Beleza",
      image: require("../../assets/beauty.png"),
    },
    {
      id: 5,
      name: "Automóveis",
      image: require("../../assets/carro.png"),
    },
  ];

  let onPressItem = (id) => {

    if(id == 1){
     navigation.navigate('ListAssitenciaTecnica')
    }
    else if (id == 2){
      navigation.navigate('ListAutomoveis')
    }
    else if (id == 3){
      navigation.navigate('ListEventos')
      
    }
    else if (id ==4){
      navigation.navigate('ListModaBeleza')
    }
    else if(id==5){
      navigation.navigate('ListReformasReparos')
    }
 
 return id
  }
  
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

  itemSeparator = () => {
    return <View style={styles.separator} />;
  };



  const[searchText,setSearchText] = useState('');

  useEffect(() => {
    if (searchText === '') {
      setList(services);
    } else {
      setList(
        services.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);
   
  const handleOrderClick = () => {
    let newList = [...services];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setList(newList);
  };

  const[list,setList] = useState(services);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.lisHeadline}>HomeTech Services</Text>
      </View>

      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Buscar serviço..."
          placeholderTextColor="#888"
          itemSeparator
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
        <FontAwesome5 name="sort-alpha-down" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        renderItem={oneService}
        ItemSeparatorComponent={itemSeparator}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B5998",
  },
  lisHeadline: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "bold",
  },
  container: {
    flex:1,
   
  },
  searchArea: {
    flex: 1,
    backgroundColor: "000",
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },
  serviceContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: "center",
    alignItems: "center",
  },

  service: {
    height: 55,
    width: 55,
  },

  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
  },

  separator: {
    height: 1,
    backgroundColor: "#CCC",
    width: "100%",
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },

  input: {
    height: 50,
    width: 400,
    backgroundColor: "#FFF",
    margin: 20,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
  color: "#FFFFFF",
    justifyContent: "center",
    flex: 1,
  },
  
});