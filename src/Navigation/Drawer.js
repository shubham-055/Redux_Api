import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Trainees from '../Screens/Trainees';
import Mentor from '../Screens/MentorInfo';
import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Latest News" component={Tabs} />
      <Drawer.Screen name="Trainees" component={Trainees} />
      <Drawer.Screen name="Mentor" component={Mentor} />
    </Drawer.Navigator>
  );
};
export default DrawerNav;
