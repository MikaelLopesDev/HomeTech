
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroTech from "../pages/tecnico/Cadastro"



import Perfil from "../pages/Client/Perfil"
import ListAssitenciaTecnica from "../pages/Client/ListAssitenciaTecnica"
import ListModaBeleza from "../pages/Client/ListModaBeleza"
import ListAutomoveis from "../pages/Client/ListAutomoveis"
import ListEventos from "../pages/Client/ListEventos"
import ListReformasReparos from "../pages/Client/ListReformasReparos"
import MeusPedidos from "../pages/Client/MeusPedidos"



import PerfilTech from "../pages/tecnico/Perfil"
import CadCategoriaTech from "../pages/tecnico/CadCategoriaTech"
import CadListAssitenciaTecnica  from "../pages/tecnico/CadListAssitenciaTecnica"
import CadListAutomoveis from "../pages/tecnico/CadListAutomoveis"
import CadListEventos from "../pages/tecnico/CadListEventos"
import CadListModaBeleza from "../pages/tecnico/CadListModaBeleza"
import CadListReformasReparos from "../pages/tecnico/CadListReformasReparos"
import Loguin from "../pages/Client/Loguin"
import LoguinTech from "../pages/tecnico/Loguin"
import Forms from "../pages/Client/Forms"
import TabRoutesTech from "./TabRoutesTech"
import TabRoutesClient from "./TabRoutesClient";
import Cadastro from "../pages/Client/Cadastro"
import TelaDeInicio from "../pages/TelaDeInicio"
 import DetalhesPedido from "../pages/tecnico/DetalhesPedido";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>


<Stack.Screen
        name="TelaDeInicio"
        component={TelaDeInicio}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Loguin"
        component={Loguin}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Cadastro" component={Cadastro} />


      <Stack.Screen
        name="LoguinTech"
        component={LoguinTech}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="CadastroTech" component={CadastroTech} />
     

      { 
      <Stack.Screen

        name="TabRoutesClient"
        component={TabRoutesClient}
        options={{ headerShown: false }}
      />    
      }

{
       <Stack.Screen
        name="TabRoutesTech"
        component={TabRoutesTech}
        options={{ headerShown: false }}
      />
      }
          <Stack.Screen name="ListAssitenciaTecnica" component={ListAssitenciaTecnica}   options={{ headerShown: false }}/>
          <Stack.Screen name="ListModaBeleza" component={ListModaBeleza}   options={{ headerShown: false }}/>
          <Stack.Screen name="ListAutomoveis" component={ListAutomoveis}   options={{ headerShown: false }}/>
          <Stack.Screen name="ListEventos" component={ListEventos}   options={{ headerShown: false }}/>
          <Stack.Screen name="ListReformasReparos" component={ListReformasReparos}   options={{ headerShown: false }}/>
          <Stack.Screen name="MeusPedidos" component={MeusPedidos}   options={{ headerShown: false }}/>

          <Stack.Screen name="CadCategoriaTech" component={CadCategoriaTech}   options={{ headerShown: false }}/>
          <Stack.Screen name="CadListAssitenciaTecnica" component={CadListAssitenciaTecnica}   options={{ headerShown: false }}/>
          <Stack.Screen name="CadListAutomoveis" component={CadListAutomoveis}   options={{ headerShown: false }}/>
          <Stack.Screen name="CadListEventos" component={CadListEventos}   options={{ headerShown: false }}/>
          <Stack.Screen name="CadListModaBeleza" component={CadListModaBeleza}   options={{ headerShown: false }}/>
          <Stack.Screen name="CadListReformasReparos" component={CadListReformasReparos}   options={{ headerShown: false }}/>


          <Stack.Screen name="DetalhesPedido" component={DetalhesPedido}   options={{ headerShown: false }}/>

          <Stack.Screen name="Perfil" component={Perfil}   options={{ headerShown: false }}/>

        <Stack.Screen name="PerfilTech" component={PerfilTech}   options={{ headerShown: false }}/>

         
          <Stack.Screen name="Forms" component={Forms} options={{ headerShown: false }}/>
      
         

    </Stack.Navigator>
  );
}
