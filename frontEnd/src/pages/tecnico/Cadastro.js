import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert, Image } from "react-native";
import { Formik } from "formik";
import axios from "axios";

export default function Cadastro({ navigation }) {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };


  const cadastro = async (values) => {
    navigation.navigate("CadCategoriaTech", { formData: values });
  };

  const cadastros = async (values) => {
    const userData = {
      ...values,
      typeOfPerson: 'TECHNICIAN',
      technicianServices: '' 
    };
  
    console.log("Dados enviados para cadastro:", userData); // Imprime os dados que serão enviados
  
    try {
      const response = await axios.post('http://18.188.75.46:8080/users', userData);
      if (response.status === 200 || response.status === 201) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        navigation.navigate("LoguinTech");
      } else {
        Alert.alert("Erro", "Não foi possível realizar o cadastro.");
      }
    } catch (error) {
      console.error("Erro ao realizar cadastro:", error);
      Alert.alert("Erro", "Ocorreu um erro ao realizar o cadastro.");
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Cadastro</Text>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            avatar: "",
            postalCode: "",
            address: "",
            email: "",
            password: ""
          }}
          onSubmit={cadastro}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
           <View style={styles.formContainer}>
           <View style={styles.formBackground}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  placeholder="Nome"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                  placeholder="Sobrenome"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("avatar")}
                  onBlur={handleBlur("avatar")}
                  value={values.avatar}
                  placeholder="Avatar (URL)"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("postalCode")}
                  onBlur={handleBlur("postalCode")}
                  value={values.postalCode}
                  placeholder="CEP"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                  placeholder="Endereço"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="E-mail"
                />
         <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        secureTextEntry={passwordVisibility}
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        value={values.password}
        placeholder="Senha"
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.visibilityToggle}>
        <Image
          source={passwordVisibility ? require("../../assets/eye.png") : require("../../assets/eye-off.png")}
          style={styles.visibilityIcon}
        />
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
  </View>
</View>
        )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
   
   );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    alignItems: 'center',
    padding: 20,
  },
  formBackground: {
    width: '100%',
    backgroundColor: '#f2f2f2', // Altere conforme necessário
    padding: 20,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    paddingHorizontal: 10, // Ajuste conforme necessário para o padding interno
    borderRadius: 5, // Ajuste conforme necessário para os cantos arredondados
  },
  input: {
    flex: 1,
    height: 40,
  },
  visibilityToggle: {
    marginLeft: 10, // Ajuste conforme necessário
  },
  visibilityIcon: {
    width: 20,
    height: 20,
  },
  toggleButton: {
    position: 'absolute',
    right: 35,
    top: 35,
  },
  passwordContainer: {
    flexDirection: 'row', // Posiciona os elementos internos em uma linha
    alignItems: 'center', // Centraliza os elementos verticalmente
    width: '80%', // Largura do contêiner
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  toggleImage: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  form: {
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
  },
});
