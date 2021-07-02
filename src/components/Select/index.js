import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";

import ArrowDownSvg from "../../assets/icons/arrow-down.svg";

import { styles } from "./style";

export default function Select({ children }) {
  const [active, setActive] = useState(false);

  function handleClickSelect() {
    setActive(!active);
  }

  return (
    <>
      <TouchableOpacity style={styles.selectButton} onPress={handleClickSelect}>
        <Text style={{ color: "#333", fontSize: 20 }}>type</Text>
        <ArrowDownSvg stroke="black" />
      </TouchableOpacity>

      {active && (
        <View style={styles.selectModal}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleClickSelect}
          >
            <Text style={{ color: "#fff", fontSize: 30 }}>X</Text>
          </TouchableOpacity>

          <View style={styles.selectModalContent}>
            <ScrollView
              style={{ width: "100%" }}
              contentContainerStyle={{ justifyContent: "center" }}
            >
              {children}
            </ScrollView>
          </View>
        </View>
      )}
    </>
  );
}
