import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import {NavigationContainer} from '@react-navigation/native';
import Profile from './Profile';
import Address from './Address';
import {ProfileIcon, AddressIcon} from '../Svg/index';
const Home = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting="true"
        activeColor="purple"
        sceneAnimationType="shifting">
        <Tab.Screen
          name="Profile"
          component={Profile}
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
