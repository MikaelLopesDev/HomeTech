import React from "react";
import { StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/tecnico/HomeScreen"
import Express from "../pages/tecnico/Express"
import Configuracoes from "../pages/tecnico/Configuracoes"
import MeusPedidos from "../pages/tecnico/MeusPedidos";

import {
  SimpleLineIcons,
  Feather,
  FontAwesome,
} from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

export default function TabRoutesTech() {
  const options = {
    headerShown: false,
  };

  return (
    <>
      <StatusBar />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            right: 0,
            left: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: "#001C30",
          },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <SimpleLineIcons
                  name="home"
                  size={28}
                  color={focused ? "#60FFFF" : "white"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Express"
          component={Express}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Feather
                name="plus-circle"
                size={28}
                color={focused ? "#60FFFF" : "white"}
              />
              );
            },
          }}
        />
        <Tab.Screen
          name="MeusPedidos"
          component={MeusPedidos}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <FontAwesome
                  name="list"
                  size={26}
                  color={focused ? "#60FFFF" : "white"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Configuracoes"
          component={Configuracoes}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Feather
                  name="settings"
                  size={28}
                  color={focused ? "#60FFFF" : "white"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
