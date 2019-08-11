import React, { useEffect, useState } from "react";
import { View, StatusBar, YellowBox } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import createNavigator from "./routes";

YellowBox.ignoreWarnings([
  "Unrecognized WebSocket"
]);

const App = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [userChecked, setUserChecked] = useState(false);

  useEffect(() => {
    async function getUser() {
      const user = await AsyncStorage.getItem("@Tindev:user");

      setUserLogged(!!user);
      setUserChecked(true);
    }

    getUser();
  }, []);

  const Routes = userChecked 
    ? createNavigator(userLogged)
    : <View />;
  
  return (
    <>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor="transparent" 
        translucent />

      {userChecked && <Routes />}
    </>
  );
};

export default App;
