import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import OptionSelect from "../../components/OptionSelect";
import ButtonHomeList from "../../components/ButtonHomeList";
import * as SecureStore from "expo-secure-store";

import { global } from "../../assets/styles/global";
import { styles } from "./style";

import api from "../../services/api";

export default function Home() {
  const [active, setActive] = useState(false);
  const [enterprises, setEnterprises] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    console.log(enterprises);
  }, [enterprises]);

  async function fetchApi() {
    const token = await SecureStore.getItemAsync("token");
    const client = await SecureStore.getItemAsync("client");
    const uid = await SecureStore.getItemAsync("uid");

    if (token && client && uid) {
      const response = await api.get("api/v1/enterprises", {
        headers: { "access-token": token, client: client, uid: uid },
      });

      setEnterprises(response.data.enterprises);
    }
  }

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

      {active && (
        <>
          <Input placeholder="name" />

          <Select>
            <OptionSelect title="teste" />
          </Select>
        </>
      )}
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ paddingBottom: "15%" }}
      >
        {enterprises &&
          enterprises.map((enterprise) => {
            return (
              <ButtonHomeList
                key={enterprise.id}
                name={enterprise.enterprise_name}
                type={enterprise.enterprise_type.enterprise_type_name}
                image={enterprise.photo}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}
