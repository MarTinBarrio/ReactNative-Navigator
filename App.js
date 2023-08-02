import "react-native-gesture-handler";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Header } from "@react-navigation/elements";

/* https://reactnavigation.org/docs/bottom-tab-navigator */

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="User" screenOptions={{
        headerStyle: {backgroundColor: '#3c0a6b'},
        headerTintColor: 'yellow',
        tabBarActiveTintColor: 'blue'
      }}>
         {/* Puedo no poner: initialRouteName="User", y en ese caso tomaría como default la
         primer pag registrada */}
        <BottomTab.Screen name="Wellcome" component={WelcomeScreen} options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size}/>
        }} />
        <BottomTab.Screen name="User" component={UserScreen} options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size}/>
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
