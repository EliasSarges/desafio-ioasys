import React, { useState } from "react";
import { View, Image } from "react-native";
import { global } from "../../assets/styles/global";
import { styles } from "./style";

import Input from "../../components/Input";
import Button from "../../components/Button";
import UserContext from "../../contexts/UserContext";

import api from "../../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(UserContext);

  function submit() {
    if (email && password) {
      api
        .post("api/v1/users/auth/sign_in", { email, password })
        .then(async (response) => {
          setUser(response.data);
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
