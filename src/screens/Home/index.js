import React from "react";
import { View, Text } from "react-native";

import Header from "../../components/Header";

import { global } from "../../assets/styles/global";
import { styles } from "./style";

export default function Home() {
  return (
    <>
      <Header user logout />
      <View style={[global.container, styles.homeContainer]}>
        <Text>Home</Text>
      </View>
    </>
  );
}
