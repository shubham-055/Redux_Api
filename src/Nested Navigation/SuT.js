// Stack Under Tabs
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Trainees from '../Screens/Trainees';
import Mentor from '../Screens/MentorInfo';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';

const SuT = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="StackNav" component={StackNav} />
        <Tab.Screen name="Trainees" component={Trainees} />
        <Tab.Screen name="Mentor" component={Mentor} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};
export default SuT;
