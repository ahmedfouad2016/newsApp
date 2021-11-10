import React, { ReactElement, useState } from 'react';
import { translate, getLocal } from 'I18n';
import { View } from 'react-native';
import { Switch, Subheading } from 'react-native-paper';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from './Settings.style';

export default function Settings(): ReactElement {
  const LOCAL = getLocal();
  const [langEn, setLangEn] = useState(LOCAL.toString() === 'en');
  const [langSp, setLangSp] = useState(LOCAL.toString() === 'sp');

  const onValueChange = async () => {
    if (LOCAL === 'en') {
      setLangSp(true);
      setLangEn(false);
      await AsyncStorage.setItem('@lang', 'sp');
    } else {
      setLangSp(false);
      setLangEn(true);
      await AsyncStorage.setItem('@lang', 'en');
    }
    setTimeout(() => {
      RNRestart.Restart();
    }, 100);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.row}>
        <Subheading> {translate('lang')} </Subheading>
        <Switch value={langEn} onValueChange={() => onValueChange()} />
      </View>
      <View style={Styles.row}>
        <Subheading> {translate('lang2')} </Subheading>
        <Switch value={langSp} onValueChange={() => onValueChange()} />
      </View>
    </View>
  );
}
