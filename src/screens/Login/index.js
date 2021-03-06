import React, { useState } from "react";
import { View, Image } from "react-native";
import { global } from "../../assets/styles/global";
import { styles } from "./style";
import * as SecureStore from "expo-secure-store";

import Input from "../../components/Input";
import Button from "../../components/Button";
import UserContext from "../../contexts/UserContext";

import api from "../../services/api";
import { useContext } from "react";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext);

  function submit() {
    if (email && password) {
      api
        .post("users/auth/sign_in", { email, password })
        .then(async (response) => {
          setUser(response.data);
          await SecureStore.setItemAsync(
            "token",
            response.headers["access-token"]
          );
          await SecureStore.setItemAsync("uid", response.headers["uid"]);
          await SecureStore.setItemAsync("client", response.headers["client"]);

          navigation.reset({ routes: [{ name: "Home" }] });
        });
    }
  }

  return (
    <View style={[global.container, styles.LoginContainer]}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo_ioasys.png")}
      />

      <Input
        label="e-mail"
        placeholder="usuario@email.com"
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        label="password"
        placeholder="password"
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="login" onPress={submit} />
    </View>
  );
}
