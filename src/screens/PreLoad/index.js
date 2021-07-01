import React from "react";
import { View, Image } from "react-native";
import { global } from "../../assets/styles/global";
import { styles } from "./style";

export default function PreLoad() {
  return (
    <View style={[global.container, styles.PreloadContainer]}>
      <Image
        style={{ height: 60, width: 200 }}
        source={require("../../assets/images/logo_ioasys.png")}
      />
    </View>
  );
}
