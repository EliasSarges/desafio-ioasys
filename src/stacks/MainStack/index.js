import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PreLoad from "../../screens/PreLoad";
import Login from "../../screens/Login";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Preload" component={PreLoad} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
