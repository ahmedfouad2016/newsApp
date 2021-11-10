import React, { ReactElement, useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'Store';
import AppNavigation from 'Navigation';
import { init } from 'Services/api';
import { Loading } from 'Components';
import { setLoading } from 'Utils/Loading';

export default function App(): ReactElement {
  const loadingRef = useRef(null);

  useEffect(() => {
    init();
    setTimeout(async () => {
      setLoading(loadingRef.current);
    }, 0);
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
            <Loading ref={loadingRef} />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
