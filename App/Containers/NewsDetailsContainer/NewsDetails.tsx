import React from 'react';
import { View } from 'react-native';
import { IArticles } from '../NewsContainer/News';
import { NewsCard } from 'Components';
import { RouteProp } from '@react-navigation/core';
import { useTheme } from 'react-native-paper';
import styles from './NewsDetails.style';

type RootStackParamList = {
  Home: undefined;
  NewsDetails: { article: IArticles };
};

export interface INewsDetailsProps {
  route: RouteProp<RootStackParamList, 'NewsDetails'>;
}

export default function NewsDetails({ route }: INewsDetailsProps) {
  const { article } = route.params;
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <NewsCard
        title={article.title}
        author={article.author}
        img={article.urlToImage}
        content={article.content}
      />
    </View>
  );
}
