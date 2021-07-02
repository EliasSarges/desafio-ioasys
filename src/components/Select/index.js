import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

export default function Select({ children }) {
  const [active, setActive] = useState(false);

  function handleClickSelect() {
    setActive(!active);
  }

  return (
    <>
      <TouchableOpacity style={styles.selectButton} onPress={handleClickSelect}>
        <Text style={{ color: "#fff", fontSize: 20 }}>type</Text>
      </TouchableOpacity>

      {active && (
        <View style={styles.selectModal}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleClickSelect}
          >
            <Text style={{ color: "#fff", fontSize: 30 }}>X</Text>
          </TouchableOpacity>

          <View style={styles.selectModalContent}>{children}</View>
        </View>
      )}
    </>
  );
}
