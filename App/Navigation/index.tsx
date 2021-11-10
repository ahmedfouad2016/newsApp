import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from './HomeStack';
import SettingsStack from './SettingsStack';
import { translate } from 'I18n';

const Tab = createMaterialBottomTabNavigator();

export default function AppContainer(): ReactElement {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          options={{ tabBarLabel: translate('home') }}
          component={HomeStack}
        />
        <Tab.Screen
          name="SettingsStack"
          options={{ title: translate('settings') }}
          component={SettingsStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
