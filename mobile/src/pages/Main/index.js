import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  SafeAreaView,
  StatusBar 
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import io from "socket.io-client";

import logo from "../../assets/logo.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import itsamatch from "../../assets/itsamatch.png";
import api from "../../services/api";

import styles from "./styles";

export default function Main({ navigation }) {
  const [id, setId] = useState("");
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    async function getUser() {
      const user = await AsyncStorage.getItem("@Tindev:user");

      setId(user);
    }

    getUser();
  }, []);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: { user: id }
      });

      setUsers(response.data);
    }

    if (!id) {
      return;
    }

    loadUsers();
  }, [id]);

  useEffect(() => {
    if (id) {
      const socket = io("http://192.168.0.104:3333", {
        query: { user: id }
      });

      socket.on("match", dev => {
        setMatchDev(dev);
      });
    }
  }, [id]);

  async function handleLike() {
    const [user, ...rest] = users;

    await api.post(`/devs/${user._id}/likes`, null, {
      headers: { user: id }
    });

    setUsers(rest);
  }

  async function handleDislike() {
    const [user, ...rest] = users;

    await api.post(`/devs/${user._id}/dislikes`, null, {
      headers: { user: id }
    });

    setUsers(rest);
  }

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate("Login");
  }

  return (
    <>
      <StatusBar backgroundColor="#F5F5F5" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.logoButton} onPress={handleLogout}>
          <Image source={logo} />
        </TouchableOpacity>

        <View style={styles.cardsContainer}>
          {users.length === 0 
            ? (
              <Text style={styles.empty}>Acabou :(</Text>
            ) : (
              users.map((user, index) => (
                <View 
                  key={user._id} 
                  style={[styles.card, { zIndex: users.length - index }]}
                >
                  <Image
                    style={styles.avatar}
                    resizeMode="stretch" 
                    source={{ uri: user.avatar }} 
                    resizeMode="contain" />
    
                  <View style={styles.footer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.bio} numberOfLines={3}>
                      {user.bio}
                    </Text>
                  </View>
                </View>
              ))
            )
          }
        </View>
        
        {users.length > 0 && (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={handleDislike}>
              <Image source={dislike} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLike}>
              <Image source={like} />
            </TouchableOpacity>
          </View>
        )}

        {matchDev && (
          <View style={styles.matchContainer}>
            <StatusBar backgroundColor="#00000000" />
            <Image style={styles.matchImage} source={itsamatch} />
            <Image style={styles.matchAvatar} source={{ uri: matchDev.avatar }} />

            <Text style={styles.matchName}>{matchDev.name}</Text>
            <Text style={styles.matchBio} numberOfLines={3}>{matchDev.bio}</Text>

            <TouchableOpacity onPress={() => setMatchDev(null)}>
              <Text style={styles.closeMatch}>FECHAR</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}
