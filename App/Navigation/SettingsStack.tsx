import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsContainer } from 'Containers';
import { translate } from 'I18n';

const Stack = createNativeStackNavigator();

export default function SettingsStack(): ReactElement {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        options={{ title: translate('settings') }}
        component={SettingsContainer}
      />
    </Stack.Navigator>
  );
}
