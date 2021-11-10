/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App/index';
import { name as appName } from './app.json';
import { setI18nConfig, setLocal } from 'I18n';
import AsyncStorage from '@react-native-community/async-storage';

AsyncStorage.getItem('@lang').then(lang => {
  setI18nConfig(lang);
  setLocal(lang);
});

AppRegistry.registerComponent(appName, () => App);
