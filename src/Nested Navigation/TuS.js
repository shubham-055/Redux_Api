// Tabs Under Stack Navigation
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity} from 'react-native';

import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Trainees from '../Screens/Trainees';
import Mentor from '../Screens/MentorInfo';

const Tab = createBottomTabNavigator();
const TuS = createNativeStackNavigator();

export default function TuSNavigation() {
  return (
    <NavigationContainer>
      <TuS.Navigator>
        <TuS.Screen name="MyTabs" component={MyTabs} />
        <TuS.Screen name="Home" component={Home} />
        <TuS.Screen name="About" component={About} />
        <TuS.Screen name="Contact" component={Contact} />
      </TuS.Navigator>
    </NavigationContainer>
  );
}

const MyTabs = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
      <Tab.Navigator>
        <Tab.Screen name="Trainees" component={Trainees} />
        <Tab.Screen name="Mentor" component={Mentor} />
      </Tab.Navigator>
    </>
  );
};
