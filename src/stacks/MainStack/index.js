import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PreLoad from "../../screens/PreLoad";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="PreLoad"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Preload" component={PreLoad} />
    </Stack.Navigator>
  );
}
