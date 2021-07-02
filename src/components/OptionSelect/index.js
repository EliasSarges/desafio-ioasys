import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

export default function OptionSelect({ title, ...rest }) {
  return (
    <TouchableOpacity style={styles.optionSelect} {...rest}>
      <Text style={{ color: "#fff", fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  );
}
