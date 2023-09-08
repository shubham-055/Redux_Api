import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNav from '../Navigation/Stack';
const Drawer = createDrawerNavigator();

const SuD = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNav" component={StackNav} />
    </Drawer.Navigator>
  );
};

export default SuD;
