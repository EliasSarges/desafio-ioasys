import React from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./style";

export default function Input({ label, ...rest }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.input}>
        <TextInput {...rest} />
      </View>
    </View>
  );
}
