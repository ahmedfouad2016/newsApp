import React from 'react';
import { View } from 'react-native';
import { IArticles } from '../NewsContainer/News';
import { NewsCard } from 'Components';
import { RouteProp } from '@react-navigation/core';

type RootStackParamList = {
  Home: undefined;
  NewsDetails: { article: IArticles };
};

export interface INewsDetailsProps {
  route: RouteProp<RootStackParamList, 'NewsDetails'>;
}

export default function NewsDetails({ route }: INewsDetailsProps) {
  const { article } = route.params;

  return (
    <View>
      <NewsCard
        title={article.title}
        author={article.author}
        img={article.urlToImage}
        content={article.content}
      />
    </View>
  );
}
