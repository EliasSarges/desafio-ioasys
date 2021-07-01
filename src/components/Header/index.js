import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

import ArrowSvg from "../../assets/icons/arrow.svg";

export default function Header({ backButton, logout, user }) {
  const navigation = useNavigation();

  async function logout() {
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("uid");
    await SecureStore.deleteItemAsync("client");

    navigation.navigate("Login");
  }

  return (
    <View style={styles.headerContainer}>
      {user && <TouchableOpacity style={styles.user} />}

      {backButton && (
        <TouchableOpacity>
          <ArrowSvg width={16} />
        </TouchableOpacity>
      )}

      {logout && (
        <TouchableOpacity onPress={logout}>
          <Text style={styles.logout}>logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
