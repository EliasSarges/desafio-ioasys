import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";

import UserContext from "./src/contexts/UserContext";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={[user, setUser]}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContext.Provider>
  );
}
