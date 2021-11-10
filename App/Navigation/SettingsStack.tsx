import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsContainer } from 'Containers';

const Stack = createNativeStackNavigator();

export default function SettingsStack(): ReactElement {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingsContainer} />
    </Stack.Navigator>
  );
}
