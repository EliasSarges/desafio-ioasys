import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./style";

export default function ButtonHomeList({ name, type, image, ...rest }) {
  return (
    <TouchableOpacity style={styles.buttonHomelistContainer} {...rest}>
      <Image
        source={{ uri: `https://empresas.ioasys.com.br/${image}` }}
        style={{ width: "25%", height: "80%" }}
      />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
