import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import OptionSelect from "../../components/OptionSelect";

import { global } from "../../assets/styles/global";
import { styles } from "./style";

import api from "../../services/api";

export default function Home() {
  const [active, setActive] = useState(false);

  return (
    <View style={[global.container, styles.homeContainer]}>
      <Header user logout />

      <TouchableOpacity
        style={styles.filterByButton}
        onPress={() => setActive(!active)}
      >
        <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
          filter by
        </Text>
      </TouchableOpacity>

      {active && <Input placeholder="name" />}

      {active && (
        <Select>
          <OptionSelect title="teste" />
        </Select>
      )}
    </View>
  );
}
