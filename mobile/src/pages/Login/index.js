import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  Platform 
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import logo from "../../assets/logo.png";
import api from "../../services/api";

import styles from "./styles";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");

  async function handleLogin() {
    const response = await api.post("/devs", {
      username
    });

    const { _id } = response.data;

    await AsyncStorage.setItem("@Tindev:user", _id);

    navigation.navigate("Main");
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === "ios"}
      style={styles.container}
    >
      <Image source={logo} resizeMode="contain" />
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        placeholder="Digite seu usuário no Github"
        value={username}
        onChangeText={setUsername} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
