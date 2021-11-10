import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewsContainer, NewsDetails } from 'Containers';
import { translate } from 'I18n';

const Stack = createNativeStackNavigator();

export default function HomeStack(): ReactElement {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={NewsContainer}
        options={{ title: translate('home') }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ title: translate('details') }}
      />
    </Stack.Navigator>
  );
}
