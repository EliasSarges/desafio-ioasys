import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { global } from "../../assets/styles/global";
import { styles } from "./style";

import UserContext from "../../contexts/UserContext";
import Header from "../../components/Header";

import User from "../../assets/icons/user.svg";
import Eye from "../../assets/icons/eye.svg";

export default function UserInfo() {
  const [user, setUser] = useContext(UserContext);
  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   console.log(user);
  // }, []);

  return (
    <>
      <Header backBlackButton style={{ paddingHorizontal: 20 }} />
      <View style={[global.container, styles.userInfoContainer]}>
        <View style={styles.userImageContainer}>
          {user ? (
            <User style={{ width: "50%", height: "50%" }} />
          ) : (
            <Image
              source={`https://empresas.ioasys.com.br/${user.investor.photo}`}
            />
          )}
        </View>

        {user && <Text style={styles.name}>{user.investor.investor_name}</Text>}

        <View style={styles.balanceContainer}>
          <View style={styles.balance}>
            {user && active && (
              <Text style={{ fontSize: 20 }}>$ {user.investor.balance}</Text>
            )}
          </View>

          <TouchableOpacity
            onPress={() => setActive(!active)}
            style={styles.eyeSvgIcon}
          >
            <Eye />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>E-mail</Text>
          {user && <Text style={{ fontSize: 20 }}>{user.investor.email}</Text>}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Country</Text>
          {user && (
            <Text style={{ fontSize: 20 }}>{user.investor.country}</Text>
          )}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>City</Text>
          {user && <Text style={{ fontSize: 20 }}> {user.investor.city}</Text>}
        </View>
      </View>
    </>
  );
}
