import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import Main from "./pages/Main";

const createNavigator = _prLogged => {
  return createAppContainer(createSwitchNavigator(
    { 
      Login, 
      Main
    }, { 
      initialRouteName: _prLogged ? "Main" : "Login"
    }
  ));
}

export default createNavigator;
