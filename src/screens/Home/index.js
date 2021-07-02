import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { debounce } from "lodash";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import OptionSelect from "../../components/OptionSelect";
import ButtonHomeList from "../../components/ButtonHomeList";
import * as SecureStore from "expo-secure-store";

import { global } from "../../assets/styles/global";
import { styles } from "./style";

import api from "../../services/api";

export default function Home({ navigation }) {
  const [active, setActive] = useState(false);
  const [enterprises, setEnterprises] = useState([]);
  const [types, setTypes] = useState({});

  const [typeSelected, setTypeSelected] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  // filterBy
  useEffect(() => {
    fetchApi();
  }, [name, typeSelected]);

  //delay para a chamada da api ao digitar o nome
  const debounceSearch = useCallback(
    debounce((text) => setName(text), 500),
    []
  );

  // busca de dados
  async function fetchApi() {
    const token = await SecureStore.getItemAsync("token");
    const client = await SecureStore.getItemAsync("client");
    const uid = await SecureStore.getItemAsync("uid");

    //so busca os dados se tiver os headers necessarios
    if (token && client && uid) {
      //faz uma busca com os filtros especificados
      if (name || typeSelected) {
        const response = await api.get(
          `enterprises?enterprise_types=${typeSelected}&name=${name}`,
          {
            headers: { "access-token": token, client: client, uid: uid },
          }
        );
        setEnterprises(response.data.enterprises);
        return;
      }

      // faz uma busca sem filtros
      const response = await api.get("enterprises", {
        headers: { "access-token": token, client: client, uid: uid },
      });

      let data = [];

      response.data.enterprises.forEach((element) => {
        data.push(element.enterprise_type);
      });

      //filtra os dados para a listagem de tipos
      let aux = Array.from(new Set(data.map((value) => value.id))).map((id) => {
        return data.find((value) => value.id === id);
      });

      setTypes(aux);
      setEnterprises(response.data.enterprises);
    }
  }

  return (
    <View style={[global.container, styles.homeContainer]}>
      <Header user logout />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles.filterByButton}
          onPress={() => setActive(!active)}
        >
          <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
            filter by
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ paddingVertical: 20 }}
          onPress={() => {
            setName("");
            setTypeSelected(0);
          }}
        >
          <Text style={styles.removeFilter}>remove filter</Text>
        </TouchableOpacity>
      </View>

      {active && (
        <>
          <Input
            placeholder="name"
            onChangeText={(text) => debounceSearch(text)}
          />

          <Select>
            {types.length != 0 &&
              types.map(({ enterprise_type_name, id }) => (
                <OptionSelect
                  key={id}
                  title={enterprise_type_name}
                  onPress={() => {
                    setActive(!active);
                    setTypeSelected(id);
                  }}
                />
              ))}
          </Select>
        </>
      )}
      <ScrollView
        style={{ width: "100%", marginTop: 20 }}
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
                sharePrice={enterprise.share_price}
                onPress={() =>
                  navigation.navigate("EnterpriseDetails", {
                    id: enterprise.id,
                  })
                }
              />
            );
          })}
      </ScrollView>
    </View>
  );
}
