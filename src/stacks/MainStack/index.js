import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PreLoad from "../../screens/PreLoad";
import Login from "../../screens/Login";
import Home from "../../screens/Home";
import UserInfo from "../../screens/UserInfo";
import EnterpriseDetails from "../../screens/EnterpriseDetails";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Preload" component={PreLoad} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="EnterpriseDetails" component={EnterpriseDetails} />
    </Stack.Navigator>
  );
}
