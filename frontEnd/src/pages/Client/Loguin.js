import React, { useState, useEffect } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView,Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [isFocused, setOnFocus] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  
  const handleLogin = async () => {

    console.log("Tentativa de login com:", { email: email, password: password });
    {
    try {
    const response = await fetch('http://18.188.75.46:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Supondo que 'data' contenha o ID do usuário como 'userId'
      const userId = data.id;

         // Imprime o ID do usuário no console
         console.log("ID do usuário:", userId);

      // Armazenar o ID do usuário no AsyncStorage
      await AsyncStorage.setItem('userId', userId.toString());

      // Navegação ocorre apenas se o login for bem-sucedido
      navigation.navigate("TabRoutesClient");
    } else {
      throw new Error(data.message || 'Erro ao efetuar login');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    Alert.alert("Erro", "Não foi possível fazer o login. Verifique suas credenciais e tente novamente.");
  }} 
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // ou use setOnFocus(false)
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // ou use setOnFocus(true)
      }
    );
  
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
    {Platform.OS === "android" && <StatusBar backgroundColor="#FFF" />}
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
    >
      <View style={styles.containerLogo}>
        <Image source={require("../../assets/logoHomeTech.png")} style={styles.logo} />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="E-mail"
                placeholderTextColor="#3b5998"
                value={email}
                onChangeText={setEmail}
                style={styles.inputText}
                onFocus={() => setOnFocus(false)}
                onEndEditing={() => setOnFocus(true)}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="********"
                placeholderTextColor="#3B5998"
                style={styles.inputText}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={passwordVisibility}
                onFocus={() => setOnFocus(false)}
                onEndEditing={() => setOnFocus(true)}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.visibilityToggle}>
                <Image
                  source={passwordVisibility ? require('../../assets/eye.png') : require('../../assets/eye-off.png')}
                  style={styles.visibilityIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
  <Text style={styles.buttonLoginText}>Entrar</Text>
</TouchableOpacity>
        </View>
        </ScrollView>
        
        {!isKeyboardVisible && (
        <View style={styles.frameBlue}>
          <TouchableOpacity>
            <Text style={styles.frameBlueText}>Não tem conta ainda?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCriarConta} onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.buttonCriarContaText}>CADASTRE-SE</Text>
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
    backgroundColor: "#FFF",
  },
  keyboardAvoidingView: {
    height: "100%",
  },
  containerLogo: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    height: 100,
    width: 200,
    marginTop: 40,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 100,
  },
  inputContainer: {
    width: "80%",
  },
  label: {
    color: "white",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 30,
    paddingRight: 10,
    marginTop: 5,
  },
  inputText: {
    flex: 1,
    color: "black",
    fontSize: 14,
  },
  visibilityToggle: {
    padding: 5,
  },
  visibilityIcon: {
    width: 20,
    height: 20,
  },
  buttonLogin: {
    backgroundColor: "#001C30",
    borderRadius: 15,
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
    width: 146,
    height: 45,
  },
  buttonLoginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  frameBlue: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#001C30",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 180,
    alignItems: "center",
  },
  frameBlueText: {
    color: "white",
    marginTop: 40,
  },
  buttonCriarConta: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 50,
  },
  buttonCriarContaText: {
    color: "#001C30",
    fontSize: 18,
    fontWeight: "400",
  },
 
});
