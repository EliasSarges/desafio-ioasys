import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export default function TextBox({ title, content }) {
  return (
    <View style={styles.textContainer}>
      {title && <Text style={styles.title}>{title}</Text>}
      {content && <Text style={styles.content}>{content}</Text>}
    </View>
  );
}
