import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { StatusBar, useColorScheme, Appearance } from 'react-native';
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'Store';
import AppNavigation from 'Navigation';
import { init } from 'Services/api';
import { Loading } from 'Components';
import { setLoading } from 'Utils/Loading';

export default function App(): ReactElement {
  const loadingRef = useRef(null);
  const color = useColorScheme();
  const [theme, setTheme] = useState(
    color === 'dark' ? DarkTheme : DefaultTheme,
  );

  useEffect(() => {
    init();
    setTimeout(async () => {
      setLoading(loadingRef.current);
    }, 0);
    const change = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? DarkTheme : DefaultTheme);
    });

    return () => {
      change.remove();
    };
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider theme={theme}>
            <AppNavigation />
            <Loading ref={loadingRef} />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
