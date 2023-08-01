import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return <Drawer.Navigator>
      <Drawer.Screen name ="Wellcome" component={WelcomeScreen}/>
      <Drawer.Screen name ="User" component={UserScreen}/>
    </Drawer.Navigator>
  ;
}