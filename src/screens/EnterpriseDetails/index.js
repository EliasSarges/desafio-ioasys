import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import * as SecureStore from "expo-secure-store";

import Header from "../../components/Header";
import TextBox from "../../components/TextBox";

import FacebookSvg from "../../assets/icons/facebook.svg";
import TwitterSvg from "../../assets/icons/twitter.svg";
import LinkedinSvg from "../../assets/icons/linkedin.svg";
import { styles } from "./style";

import api from "../../services/api";

export default function EnterpriseDetails({ route, navigation }) {
  const [enterprise, setEnterprise] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    const token = await SecureStore.getItemAsync("token");
    const client = await SecureStore.getItemAsync("client");
    const uid = await SecureStore.getItemAsync("uid");

    if (token && client && uid) {
      const response = await api.get(`enterprises/${route.params.id}`, {
        headers: { "access-token": token, client: client, uid: uid },
      });

      setEnterprise(response.data.enterprise);
    }
  }

  return (
    <View style={styles.container}>
      <Header
        backButton
        style={{ paddingHorizontal: 10, position: "absolute", zIndex: 2 }}
      />

      {enterprise && (
        <ImageBackground
          source={{
            uri: `https://empresas.ioasys.com.br${enterprise.photo}`,
          }}
          style={styles.backgroundImage}
        >
          <View style={styles.backgroundImageDarker} />
        </ImageBackground>
      )}

      {enterprise && (
        <Text style={styles.name}>{enterprise.enterprise_name}</Text>
      )}

      <View style={styles.informationHeader}>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialIcon, styles.facebook]}>
            <FacebookSvg />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialIcon, styles.linkedin]}>
            <LinkedinSvg />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialIcon, styles.twitter]}>
            <TwitterSvg />
          </TouchableOpacity>
        </View>

        <View style={styles.firstLetterContainer}>
          <View style={styles.firstLetter}>
            {enterprise && (
              <Text style={styles.firstLetterText}>
                {enterprise.enterprise_name[0]}
              </Text>
            )}
          </View>
        </View>
      </View>

      <ScrollView
        style={{ width: "100%", marginTop: 20 }}
        contentContainerStyle={{ paddingBottom: "15%" }}
      >
        {enterprise && (
          <TextBox title="description" content={enterprise.description} />
        )}

        {enterprise && <TextBox title="city" content={enterprise.city} />}

        {enterprise && <TextBox title="country" content={enterprise.country} />}

        {enterprise && (
          <TextBox
            title="share price"
            content={`$ ${enterprise.share_price}`}
          />
        )}

        {enterprise && <TextBox title="shares" content={enterprise.shares} />}
      </ScrollView>
    </View>
  );
}
