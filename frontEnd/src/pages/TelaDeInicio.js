import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaDeInicio({navigation}) {

	useEffect(() => {
        async function limparMemoria() {
            try {
                await AsyncStorage.clear();  // Limpa toda a memória AsyncStorage
                console.log('Memória limpa com sucesso!');
            } catch (e) {
                console.error('Erro ao limpar a memória do AsyncStorage:', e);
            }
        }

        limparMemoria();
    }, []);
	return (
		<View style={styles.container}>
			<View style={styles.containerBalck}>
				<View style={{ width: "80%" }}>
					<Text
						style={{
							color: "#3B5998",
							fontWeight: "700",
							fontSize: 24,
							alignSelf: "flex-start",
							marginRight: 10,
							marginTop: 50,
						}}
					>
						Quero Ser
					</Text>
					<Text
						style={{
							color: "#3B5998",
							fontWeight: "700",
							fontSize: 24,
							alignSelf: "flex-start",
						}}
					>
						Cliente
					</Text>
					<View style={styles.buttonWrapper}>
						<TouchableOpacity onPress={() => navigation.navigate("Loguin")}>
							<View
								style={{
									height: 44,
									width: 146,
									backgroundColor: "#3B5998",
									borderRadius: 15,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text
									style={{ color: "black", fontWeight: "700", fontSize: 20 }}
								>
									Começar
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.containerBlue}>
				<View style={{ width: "80%" }}>
					<Text
						style={{
							color: "black",
							fontWeight: "700",
							fontSize: 24,
							alignSelf: "flex-end",
							marginRight: 10,
							marginTop: 50,
						}}
					>
						Quero Ser
					</Text>
					<Text
						style={{
							color: "black",
							fontWeight: "700",
							fontSize: 24,
							alignSelf: "flex-end",
						}}
					>
						Técnico
					</Text>
					<View style={styles.buttonWrapper}>
						<TouchableOpacity
							onPress={() => navigation.navigate("LoguinTech")}
						>
							<View
								style={{
									height: 44,
									width: 146,
									backgroundColor: "black",
									borderRadius: 16,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text
									style={{ color: "#3B5998", fontWeight: "700", fontSize: 20 }}
								>
									Começar
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	buttonWrapper: {
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-end",
		marginTop: "70%",
	},
	containerBalck: {
		height: "50%",
		alignItems: "center",
        backgroundColor: "#000"
	},
	containerBlue: {
		height: "50%",
		backgroundColor: "#3B5998",
		alignItems: "center",
	},
});
