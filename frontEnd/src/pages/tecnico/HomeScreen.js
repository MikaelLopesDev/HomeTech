import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function HomeScreen(navigation) {

  
  const[service,setService] = useState("");

  const [marca, setMarca] = useState("");
  const [garantia, setGarantia] = useState("");
  const [problema, setProblema] = useState("");


  const [selectedYear,setSelectedYear] = useState("");
  const [selectedMonth,setSelectedMonth] = useState("");
  const [selectedDay,setSelectedDay] = useState("");
  const [selectedHour,setSelectedHour] = useState(null);

async function handleFetchData(){
  const service = await AsyncStorage.getItem("@saveforms:service");
  
  service ? setService(service) : setService("não informado") ;


  const marca = await AsyncStorage.getItem("@saveforms:marca");
  
  marca ? setMarca(marca) : setMarca("não informado") ;

  const garantia = await AsyncStorage.getItem("@saveforms:garantia");
  
  garantia ? setGarantia(garantia) : setGarantia("não informado") ;

  const problema = await AsyncStorage.getItem("@saveforms:problema");
  
  problema ? setProblema(problema) : setProblema("não informado") ;



  const hour = await AsyncStorage.getItem("@saveforms:hour");
  setSelectedHour(hour) 

  const day = await AsyncStorage.getItem("@saveforms:day");
  
  day ? setSelectedDay(day) : setSelectedDay("não informado") ;

  const month = await AsyncStorage.getItem("@saveforms:month");
  
  month ? setSelectedMonth(month) : setSelectedMonth("não informado") ;

  const year = await AsyncStorage.getItem("@saveforms:year");
  
  year ? setSelectedYear(year) : setSelectedYear("não informado");





}

useEffect(() => {

  handleFetchData();

},[]);

let  onPressItem = () =>{


 
}

return (

    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headline}>HomeTech</Text>
    </View>

    <View style={styles.subheader}>
      <Text style={styles.subHeadline}>serviços disponíveis</Text>
    </View>


              
<View style={styles.dadosContainer}>  

<TouchableOpacity onPress={ ()=> onPressItem()}>
<View style={styles.dataHourContainer}> 

<Text style={styles.dataText}> Data : {selectedDay}-0{selectedMonth}-{selectedYear}</Text> 

<Text style={styles.horaText}> Hora  :  {selectedHour}H</Text> 
</View>

<View style={styles.detailsContainer}>
  <Text style={styles.detailsText}>Serviço :  {service}</Text> 
  <Text style={styles.detailsText}>Marca :  {marca}</Text> 
  <Text style={styles.detailsText}>Garantia :  {garantia}</Text> 
  <Text style={styles.detailsText}>Problema  :  {problema}</Text> 
 


  </View>
  </TouchableOpacity>

    </View>


    


</SafeAreaView>
);


}
const styles = StyleSheet.create({
    container:{
    
        flex: 1,
        
        
    },

    header: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3B5998",
      },
      headline: {
        color: "#000",
        fontSize: 21,
        fontWeight: "bold",
      },
    
    subheader:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        marginTop: 8,

    },
    subHeadline: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",
      },
      dadosContainer: {
        flex: 1,
        paddingLeft: 4,
      },
      dataHourContainer: {
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: "#C4C4C4"
      },

      detailsContainer:{
        borderRadius: 12,
        backgroundColor: "#3B5998"
      },
      detailsText:{

        color: "#F2EFEF",
      }

})