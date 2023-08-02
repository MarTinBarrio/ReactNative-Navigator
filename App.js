import "react-native-gesture-handler";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="User">
         {/* Puedo no poner: initialRouteName="User", y en ese caso tomaría como default la
         primer pag registrada */}
        <Drawer.Screen name="Wellcome" component={WelcomeScreen} />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
