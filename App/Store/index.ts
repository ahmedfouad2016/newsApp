import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import { api } from 'Services';
import reducers from './Reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(
  persistedReducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);
let persistor = persistStore(store);
export { store, persistor };
