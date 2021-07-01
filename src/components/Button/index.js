import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

export default function Button({ title, ...rest }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
