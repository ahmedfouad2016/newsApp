import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from './HomeStack';
import SettingsStack from './SettingsStack';

const Tab = createMaterialBottomTabNavigator();

export default function AppContainer(): ReactElement {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="SettingsStack" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
