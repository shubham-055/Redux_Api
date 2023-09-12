import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import {NavigationContainer} from '@react-navigation/native';
import Calender from './Calender';
import Address from './Events';
import {ProfileIcon, AddressIcon} from '../Svg/index';
const Home = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting="true"
        activeColor="purple"
        sceneAnimationType="shifting">
        <Tab.Screen
          name="Calender"
          component={Calender}
          options={{
            tabBarIcon: () => <ProfileIcon />,
          }}
        />
        <Tab.Screen
          name="Address"
          component={Address}
          options={{
            tabBarIcon: () => <AddressIcon />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Home;
