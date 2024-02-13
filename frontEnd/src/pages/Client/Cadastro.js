import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Checkbox from "../../components/checkbox";
import { Dimensions, View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import { api } from "../../api/api";

const { width, height } = Dimensions.get('window');


export default function Cadastro({ navigation }) {

  const [view, setView] = useState(1);
  const [checked, setChecked] = useState(false);
  const [pessoa, setPessoa] = useState("");
  const [checkedPessoaFisica, setCheckedPessoaFisica] = useState(false);
  const [checkedPessoaJuridica, setCheckedPessoaJuridica] = useState(false);
  const [masculino, setMasculino] = useState(false);
  const [feminino, setFeminino] = useState(false);

  function CheckedPessoa() {
    if (checkedPessoaFisica === true) {
      setCheckedPessoaJuridica(false);
      setPessoa("Fisica");
    }
    if (checkedPessoaJuridica === true) {
      setCheckedPessoaFisica(false);
      setPessoa("Juridica");
    }
  }

  const cadastro = async (values) => {
    // const { status, data } = await api.post("/cadastro", {
    //   nome: values.nome,
    //   sobrenome: values.sobrenome,
    //   CPF: values.cpf,
    //   email: values.email,
    //   numerodetelefone: values.numerodetelefone,
    //   sexo: CheckedSexo(),
    //   cep: values.cep,
    //   endereco: values.endereco,
    //   complemento: values.complemento,
    //   cidade: values.cidadade,
    //   estado: values.estado,
    //   pessoa: pessoa,
    //   senha: values.senha,
    // });


    /*
    socket.emit("cadastrar_usuario", {
      user: values,
      nome: `${values.nome}_${values.sobrenome}`,
    });
   */
     await api().post("/create/loginandsenha",{email:values.email,password:values.senha})
     //alert(response.data)
     navigation.navigate("Login");
  };

  function CheckedSexo() {
    if (masculino === true) {
      setFeminino(false);
      return "masculino";
    }
    if (feminino === true) {
      setMasculino(false);
      return "feminino";
    }
  }

  useEffect(() => {
    CheckedPessoa();
  }, [checkedPessoaJuridica, checkedPessoaFisica]);

  useEffect(() => {
    CheckedSexo();
  }, [masculino, feminino]);

  return (
    <View style={{ flex: 1 }}>
      <Formik
        initialValues={{
          email: "",
          confirmarEmail: "",
          senha: "",
          confirmarSenha: "",
          nome: "",
          sobrenome: "",
          cpf: "",
          cnpj: "",
          numerodetelefone: "",

          cep: "",
          endereco: "",
          complemento: "",
          cidade: "",
          estado: "",
        }}
        onSubmit={(values) => cadastro(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            {view === 1 && (
              <SafeAreaView style={styles.container}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "400",
                    alignSelf: "center",
                    marginTop: 81,
                  }}
                >
                  Cadastro
                </Text>
                <View style={styles.inputWrapper}>
                  <View>
                    <Text style={styles.label}>E-mail</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.label}>Confirmar E-mail</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        onChangeText={handleChange("confirmarEmail")}
                        onBlur={handleBlur("confirmarEmail")}
                        value={values.confirmarEmail}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        secureTextEntry
                        onChangeText={handleChange("senha")}
                        onBlur={handleBlur("senha")}
                        value={values.senha}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.label}>Confirmar Senha</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        secureTextEntry
                        onChangeText={handleChange("confirmarSenha")}
                        onBlur={handleBlur("confirmarSenha")}
                        value={values.confirmarSenha}
                      />
                    </View>
                  </View>
                  <View style={styles.checkboxview}>
                    <Checkbox checked={checked} setChecked={setChecked} />
                    <Text style={{ marginLeft: 10 }}>
                      Li e Concordo com os{" "}
                      <Text style={{ color: "#282F62" }}>Termos de Uso</Text>
                    </Text>
                  </View>
                  <View style={styles.checkboxview}>
                    <Checkbox checked={checked} setChecked={setChecked} />
                    <Text style={{ marginLeft: 10 }}>
                      Li e Concordo com os{" "}
                      <Text style={{ color: "#282F62" }}>
                        Termos de Privacidade
                      </Text>
                    </Text>
                  </View>
                </View>
              </SafeAreaView>
            )}
            {view === 2 && (
              <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  style={{ height: "100%" }}
                >
                  <ScrollView>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "400",
                        alignSelf: "center",
                        marginTop: 81,
                      }}
                    >
                      Dados Pessoais
                    </Text>
                    <View style={styles.inputWrapper}>
                      <View style={styles.inputRow}>
                        <View style={{ width: "45%" }}>
                          <Text style={styles.label}>Nome</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("nome")}
                              onBlur={handleBlur("nome")}
                              value={values.nome}
                            />
                          </View>
                        </View>
                        <View style={{ width: "45%" }}>
                          <Text style={styles.label}>Sobrenome</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("sobrenome")}
                              onBlur={handleBlur("sobrenome")}
                              value={values.sobrenome}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.inputRow}>
                        {checkedPessoaFisica === true && (
                          <View style={{ width: "45%" }}>
                            <Text style={styles.label}>CPF</Text>
                            <View style={styles.input}>
                              <TextInput
                                style={{ marginLeft: 10 }}
                                onChangeText={handleChange("cpf")}
                                onBlur={handleBlur("cpf")}
                                value={values.cpf}
                              />
                            </View>
                          </View>
                        )}
                        {checkedPessoaJuridica === true && (
                          <View style={{ width: "45%" }}>
                            <Text style={styles.label}>CNPJ</Text>
                            <View style={styles.input}>""
                              <TextInput
                                style={{ marginLeft: 10 }}
                                onChangeText={handleChange("cnpj")}
                                onBlur={handleBlur("cnpj")}
                                value={values.cnpj}
                              />
                            </View>
                          </View>
                        )}
                        <View style={{ width: "45%" }}>
                          <Text style={styles.label}>E-mail</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("email")}
                              onBlur={handleBlur("email")}
                              value={values.email}
                            />
                          </View>
                        </View>
                      </View>

                      <View style={styles.inputRow}>
                        <View style={{ width: "45%" }}>
                          <Text style={styles.label}>
                            Numero de celular
                          </Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("numerodetelefone")}
                              onBlur={handleBlur("numerodetelefone")}
                              value={values.numerodetelefone}
                            />
                          </View>
                        </View>
                        <View style={{ width: "45%", flexDirection: "row" }}>
                          <Text style={styles.label}>Sexo: </Text>
                          <View style={{ marginTop: 20 }}>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <Text style={styles.label}>Masculino</Text>
                              <Checkbox
                                checked={masculino}
                                setChecked={setMasculino}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <Text style={styles.label}>Feminino</Text>
                              <Checkbox
                                checked={feminino}
                                setChecked={setFeminino}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.inputRow}>
                        <View style={{ width: "45%" }}>
                          <Text style={styles.label}>CEP</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("cep")}
                              onBlur={handleBlur("cep")}
                              value={values.cep}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.inputRow}>
                        <View style={{ width: "45%" }}>
                          <Text style={styles.label}>Endereço</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("endereco")}
                              onBlur={handleBlur("endereco")}
                              value={values.endereco}
                            />
                          </View>
                        </View>
                        <View style={{ width: "45%" }}>
                          <Text style={styles.label}>Complemento</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("complemento")}
                              onBlur={handleBlur("complemento")}
                              value={values.complemento}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.inputRow}>
                        <View style={{ width: "45%" }}>
                          <Text style={styles.label}>Cidade</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("cidade")}
                              onBlur={handleBlur("cidade")}
                              value={values.cidade}
                            />
                          </View>
                        </View>
                        <View style={{ width: "45%" }}>
                          <Text style={styles.label}>Estado</Text>
                          <View style={styles.input}>
                            <TextInput
                              style={{ marginLeft: 10 }}
                              onChangeText={handleChange("estado")}
                              onBlur={handleBlur("estado")}
                              value={values.estado}
                            />
                          </View>
                        </View>
                      </View>

                      <View style={styles.checkboxview}>
  <Checkbox
    checked={checkedPessoaFisica}
    setChecked={setCheckedPessoaFisica}
  />
  <Text style={styles.label}>Pessoa Fisica</Text>
</View>
<View style={styles.checkboxview}>
  <Checkbox
    checked={checkedPessoaJuridica}
    setChecked={setCheckedPessoaJuridica}
  />
  <Text style={styles.label}>Pessoa Juridica</Text>
</View>

                    </View>
                  </ScrollView>
                </KeyboardAvoidingView>
              </SafeAreaView>
            )}
           
            {view === 3 && (
            

              <SafeAreaView

                style={{
                  ...styles.container,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                
                <View style={styles.otpWrapper}>
                  <View style={styles.otpInput}>
                    <TextInput
                      style={{
                        height: "100%",
                        width: "100%",
                        textAlign: "center",
                      }}
                      maxLength={1}
                    />
                  </View>
                  <View style={styles.otpInput}>
                    <TextInput />
                  </View>
                  <View style={styles.otpInput}>
                    <TextInput />
                  </View>
                  <View style={styles.otpInput}>
                    <TextInput />
                </View>
                </View>
                    
                {view === 3 && (
                  <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => handleSubmit()}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      Confirmar
                    </Text>
                  </TouchableOpacity>
                )}
              </SafeAreaView>
              
            )}
            
            {view !== 3 && (
              <View
              style={{
                width: "90%",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <TouchableOpacity
                style={[styles.button, { flex: 1, marginRight: 10 }]} // Usa flex para ajustar a largura e marginRight para espaçamento
                onPress={() => {
                  view === 1 ? navigation.goBack() : setView(view - 1);
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "700" }} // Ajusta o tamanho da fonte se necessário
                >
                  Voltar
                </Text>
              </TouchableOpacity>
            
              <TouchableOpacity
                style={[styles.button, { flex: 1, marginLeft: 10 }]} // Usa flex para ajustar a largura e marginLeft para espaçamento
                onPress={() => {
                  setView(view + 1);
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "700" }} // Ajusta o tamanho da fonte se necessário
                >
                  Próximo
                </Text>
              </TouchableOpacity>
            </View>
            
            )}
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxview: {
    flexDirection: 'row', // Organiza os elementos horizontalmente
    alignItems: 'center', // Centraliza os itens verticalmente na View
    marginBottom: 10, // Adiciona um espaço abaixo de cada linha de checkbox
  },
  label: {
    fontSize: width < 350 ? 14 : 16, // Tamanho da fonte ajustável com base na largura da tela
    color: '#333', // Cor do texto
    fontWeight: 'bold', // Peso da fonte
    marginBottom: 8, // Espaçamento abaixo do rótulo
    marginTop: 20, // Espaçamento acima do rótulo
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd', // Cor da borda
    backgroundColor: '#f9f9f9', // Cor de fundo do campo de entrada
    height: 48, // Altura aumentada para melhor toque
    borderRadius: 10, // Bordas menos arredondadas para um visual moderno
    paddingLeft: 20, // Padding maior para o texto não começar exatamente na borda
    marginTop: 12, // Espaçamento superior aumentado
  },
  inputIcon: {
    position: 'absolute',
    right: 15, // Posição ajustada para a direita
    top: width < 350 ? 14 : 16, // Ajuste na posição superior com base na largura da tela
  },
  button: {
    backgroundColor: '#3B5998',
    borderRadius: 20,
    height: 45, // Mantém a altura dos botões
    justifyContent: 'center',
    alignItems: 'center',
    // Remova a propriedade 'width' para permitir que o 'flex' controle a largura
  },
  // Outros estilos podem ser ajustados de forma semelhante para melhorar a aparência
});
