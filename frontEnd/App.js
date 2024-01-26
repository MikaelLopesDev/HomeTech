import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import StackNavigation   from './src/routes/stackNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutesTech from './src/routes/TabRoutesTech';
import TabRoutesClient from './src/routes/TabRoutesClient';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

       <Stack.Navigator screenOptions={{ headerShown: false }}>
    
       <Stack.Screen name="Stack" component={StackNavigation} />

        <Stack.Screen name="TabRoutesClient" component={TabRoutesClient} />

       <Stack.Screen name="TabRoutesTech" component={TabRoutesTech} />     
     

      </Stack.Navigator>
    </NavigationContainer>
  );
}