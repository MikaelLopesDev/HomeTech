import React from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';



export default function MeusPedidos(navigation) {

return (

<View style={styles.container}>  


<Text>Página  dos pedidos feitos pelo cliente  </Text>

</View>


);


}
const styles = StyleSheet.create({

    container:{
    
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },


})