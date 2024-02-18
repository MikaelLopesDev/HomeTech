import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

export default function ConfiguracoesTech({ navigation }) {
  const assistenciaTecnicaList = [
    { id: 1, name: "Perfil" },
    { id: 2, name: "Solicitar serviço" },
  ];

  const onPressItem = (id) => {
    if (id == 1) navigation.navigate("PerfilTech");
    else if (id == 2) navigation.navigate("TabRoutesClient");
  };

  const oneService = ({ item }) => (
    <TouchableOpacity onPress={() => onPressItem(item.id)}>
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const headerComponent = () => {
    return <Text style={styles.lisHeadline}>Configurações</Text>;
  };

  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={headerComponent}
        data={assistenciaTecnicaList}
        renderItem={oneService}
        ItemSeparatorComponent={itemSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Opcional: para definir a cor de fundo do restante da tela
  },
  listHeader: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001C30',
  },
  lisHeadline: {
    color: '#FFF',
    fontSize: 21,
    fontWeight: 'bold',
    // Remova o paddingTop se não for necessário
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#FFF',
    width: '100%',
  },
});
