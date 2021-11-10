import React, { ReactElement, useEffect, useState, useCallback } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { getTopHeadLinesAction } from 'Store/Actions/NewsActions';
import NewsCard from 'Components/NewsCard/NewsCard';
import { RootState } from 'Store';
import Styles from './News.style';
import { Divider } from 'react-native-paper';

interface INewsProps {
  navigation: NativeStackNavigationProp<any>;
}

export default function News({ navigation }: INewsProps): ReactElement {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);

  const { articles } = useSelector((state: RootState) => state.news);
  const { page } = useSelector((state: RootState) => state.news);
  const { totalResults } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(getTopHeadLinesAction(1));
  }, [dispatch]);

  const onRefresh = useCallback(async () => {
    setRefresh(true);
    await dispatch(getTopHeadLinesAction(1, true));
    setRefresh(false);
  }, [dispatch]);

  const onLoadMore = useCallback(() => {
    if (articles?.length < totalResults) {
      dispatch(getTopHeadLinesAction(page + 1));
    }
  }, [page, dispatch, articles, totalResults]);

  return (
    <FlatList
      style={Styles.container}
      data={articles}
      refreshing={refresh}
      onRefresh={onRefresh}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsDetails', { article: item })}>
          <NewsCard
            title={item.title}
            description={item.description}
            img={item.urlToImage}
          />
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <Divider style={Styles.separator} />}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
    />
  );
}
