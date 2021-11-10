import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewsContainer, NewsDetails } from 'Containers';

const Stack = createNativeStackNavigator();

export default function HomeStack(): ReactElement {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={NewsContainer} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
}
