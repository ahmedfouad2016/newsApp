import React, { ReactElement, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'Store';
import AppNavigation from 'Navigation';
import { init } from 'Services/api';

export default function App(): ReactElement {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <AppNavigation />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
