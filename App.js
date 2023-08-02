import "react-native-gesture-handler";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Header } from "@react-navigation/elements";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="User" screenOptions={{
        headerStyle: {backgroundColor: '#3c0a6b'},
        headerTintColor: 'yellow',
        drawerActiveBackgroundColor: '#f0e1ff',
        drawerActiveTintColor: '#3c0a6b',
        drawerStyle: {backgroundColor: '#ccc'}, 
      }}>
         {/* Puedo no poner: initialRouteName="User", y en ese caso tomaría como default la
         primer pag registrada */}
        <Drawer.Screen name="Wellcome" component={WelcomeScreen} options={{
          headerStyle: {backgroundColor: '#3c0a6b'},
          headerTintColor: 'white',
          drawerLabel: 'Welcome Screen',
          drawerIcon: ({color, size}) => <Ionicons name="home" color={color} size={size}/>
          /*
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          drawerStyle: {backgroundColor: '#ccc'}, 
          Esto si quisiera personalizar cada opción del menu hamburgesa
          */
        }} />
        <Drawer.Screen name="User" component={UserScreen} options={{
          drawerIcon: ({color, size}) => <Ionicons name="person" color={color} size={size}/>
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
