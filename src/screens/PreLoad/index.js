import React, { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { View, Image } from "react-native";
import { global } from "../../assets/styles/global";
import { styles } from "./style";

export default function PreLoad({ navigation }) {
  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    const token = await SecureStore.getItemAsync("token");
    const uid = await SecureStore.getItemAsync("uid");
    const client = await SecureStore.getItemAsync("client");

    if (!token && !uid && !client) {
      navigation.navigate("Login");
    }

    if (token && uid && client) {
      navigation.navigate("Home");
    }
  }

  return (
    <View style={[global.container, styles.PreloadContainer]}>
      <Image
        style={{ height: 60, width: 200 }}
        source={require("../../assets/images/logo_ioasys.png")}
      />
    </View>
  );
}
