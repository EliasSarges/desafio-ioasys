import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

import ArrowSvg from "../../assets/icons/arrow.svg";
import ArrowBlackSvg from "../../assets/icons/arrow-black.svg";
import UserSvg from "../../assets/icons/user.svg";

export default function Header({
  backButton,
  backBlackButton,
  logout,
  style,
  user,
}) {
  const navigation = useNavigation();

  async function logOff() {
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("uid");
    await SecureStore.deleteItemAsync("client");

    navigation.reset({ routes: [{ name: "Login" }] });
  }

  return (
    <View style={[styles.headerContainer, style]}>
      {user && (
        <TouchableOpacity
          style={styles.user}
          onPress={() => navigation.navigate("UserInfo")}
        >
          <UserSvg width={30} height={30} />
        </TouchableOpacity>
      )}

      {backButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowSvg width={16} />
        </TouchableOpacity>
      )}

      {backBlackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBlackSvg width={16} />
        </TouchableOpacity>
      )}

      {logout && (
        <TouchableOpacity onPress={logOff}>
          <Text style={styles.logout}>logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
