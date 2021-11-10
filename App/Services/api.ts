import { create } from 'apisauce';
import Constants from 'Config/Constants';
import { Alert } from 'react-native';

const api = create({
  baseURL: Constants.BASE_URL,
  timeout: 30000,
}); // 30 seconds

const init = () => {
  const naviMonitor = (response: any) => {
    if (__DEV__) {
      console.log('hey!  listen! ', response);
    }

    if (!response.ok) {
      Alert.alert(response);
    }
  };

  api.addMonitor(naviMonitor);
};

export { api, init };
