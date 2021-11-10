import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import Modal from 'react-native-modal';

import styles from './Loading.style';
import Constants from 'Config/Constants';

const Loading = (_: any, ref: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isVisible) {
      timeout.current = setTimeout(() => {
        timeout.current = null;
        if (isVisible) {
          setIsVisible(false);
        }
      }, Constants.REQUEST_TIME_OUT);
    } else {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    }
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [isVisible]);

  useImperativeHandle(ref, () => ({
    show: () => setIsVisible(true),
    hide: () => setIsVisible(false),
  }));

  return (
    <Modal coverScreen isVisible={isVisible}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}> Loading </Text>
          <ActivityIndicator color="#fff" style={styles.spiner} size="large" />
        </View>
      </View>
    </Modal>
  );
};

export default forwardRef(Loading);
