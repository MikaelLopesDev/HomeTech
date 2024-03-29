import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert, Image, Keyboard } from "react-native";
import { Formik } from "formik";

export default function Cadastro({ navigation }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    avatar: "",
    postalCode: "",
    address: "",
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleCadastro = (values) => {
    // Atualiza o estado formData com os valores mais recentes do formulário
    setFormData(values);
    
    // Navega para a próxima página, passando os valores atualizados
    navigation.navigate("CadCategoriaTech", { formData: values });
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Formik
  initialValues={formData}
  onSubmit={(values) => currentStep === 1 ? handleNext() : handleCadastro(values)}
>
  {({ handleChange, handleSubmit, values }) => (
    <>
      <View style={styles.formContainer}>
      <View style={styles.containerLogo}>
            <Image source={require("../../assets/logoHomeTech.png")} style={styles.logo} />
          </View>
        <View style={styles.formBackground}>
         
          {currentStep === 1 ? (
            <>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("email")}
                value={values.email}
                placeholder="E-mail"
              />
              <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={handleChange("password")}
                value={values.password}
                placeholder="Senha"
              />
              <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
                placeholder="Confirmar Senha"
              />
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Próximo</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("firstName")}
                value={values.firstName}
                placeholder="Nome"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange("lastName")}
                value={values.lastName}
                placeholder="Sobrenome"
              />
           
              <TextInput
                style={styles.input}
                onChangeText={handleChange("postalCode")}
                value={values.postalCode}
                placeholder="CEP"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange("address")}
                value={values.address}
                placeholder="Endereço"
              />
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      {!isKeyboardVisible && (
        <View style={styles.frameBlue}>
          <TouchableOpacity>
            <Text style={styles.frameBlueText}>Já tem conta?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCriarConta} onPress={() => navigation.navigate("LoguinTech")}>
            <Text style={styles.buttonCriarContaText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )}
</Formik>

    </ScrollView>
  </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  formContainer: {
    marginTop: -50, // Ajuste na margem superior para o formulário ficar abaixo da imagem
    alignItems: 'center',
    padding: 20,
  },
  containerLogo: {
    alignItems: "center",
    marginTop: -250, // Ajuste na margem superior para posicionar a imagem corretamente
  },
  logo: {
    height: 100,
    width: 200,
  },
  formBackground: {
    width: '90%', // Ajuste na largura para o formulário não ocupar 100% da tela
    backgroundColor: '#fFF',
    padding: 20,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 30,
    paddingHorizontal: 30, // Ajuste conforme necessário para o padding interno
    borderRadius: 5, // Ajuste conforme necessário para os cantos arredondados

  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 30,
    paddingRight: 10,
    marginTop: 5,
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
    padding: 30,
  },
  input: {
    width: '100%', // Ajuste para o input ocupar toda a largura do formBackground
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    paddingTop: 10,
  },
  button: {
    backgroundColor: "#001C30",
    borderRadius: 15,
    marginTop: 60,
    marginLeft: 60,
    alignItems: "center",
    justifyContent: "center",
    width: 146,
    height: 45,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center', // Centraliza o texto no botão
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
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
