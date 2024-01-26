import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";


export default function LoguinTech({ navigation }) {
  const [onFocus, setOnFocus] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    AsyncStorage.setItem("email", email);
    /*
    socket.emit("login_freelancer", {
      user: { email: email, password: password },
    });
    socket.on("login_autorizado", () => {
      navigation.navigate("HomeFreelancer");
    });

    socket.on('login_nao_autorizado', () => {
      Alert.alert("Senha ou login errados")
    })*/
  }

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "android" && <StatusBar backgroundColor="#FFF" />}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ height: "100%" }}
      >
        <View style={styles.containerLogo}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          {  <Image
              source={require("../../assets/whiteHome.png")}
              style={styles.logo}
            />  }
            
            <Text style={{ fontWeight: "600",color: "#3B5998",fontSize: 48,fontWeight: "700"}}>
              Tech
            </Text>
          </View>
        </View>

        <View style={{ width: "100%", alignItems: "center", marginTop: 100 }}>
          <View style={{ width: "80%" }}>
            <Text>E-mail</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="E-mail"
                placeholderTextColor="#3b5998"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{ fontSize: 14, fontWeight: "400" }}
                onFocus={() => {
                  setOnFocus(false);
                }}
                onEndEditing={() => {
                  setOnFocus(true);
                }}
              />
            </View>
          </View>

          <View style={{ width: "80%", marginTop: 30 }}>
            <Text>Senha</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="********"
                placeholderTextColor="#3B5998"
                style={{ fontSize: 14 }}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                onFocus={() => {
                  setOnFocus(false);
                }}
                onEndEditing={() => {
                  setOnFocus(true);
                }}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("TabRoutesTech")}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "700" }}>
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
        {onFocus && (
          <View style={styles.frameBlue}>
            <TouchableOpacity>
              <Text style={{ color: "white", marginTop: 40 }}>
                Não Tem Conta? Comece Aqui.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCriarConta}
              onPress={() => navigation.navigate("CadastroTech")}
            >
              <Text style={{ fontSize: 20, color: "white", fontWeight: "400" }}>
                Criar Conta
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  frameBlue: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "#3B5998",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 230,
    alignItems: "center",
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 50,
    width: 50,
    
  },
  inputView: {
    height: 44,
    borderRadius: 15,
    borderWidth: 1,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 30,
    paddingTop: 5,
    color: "white"
  },
  buttonCriarConta: {
    height: 47,
    width: 120,
    backgroundColor: "#282F62",
    borderRadius: 15,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    backgroundColor: "#3B5998",
    width: 146,
    height: 45,
    borderRadius: 15,
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
