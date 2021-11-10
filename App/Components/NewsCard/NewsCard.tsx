import React from 'react';
import { Card } from 'react-native-paper';

export interface INewsCardProps {
  title: string;
  subTitle: string;
  img: string;
}

export default function NewsCard({ img, title, subTitle }: INewsCardProps) {
  return (
    <Card>
      <Card.Title title={title} subtitle={subTitle} />
      <Card.Cover source={{ uri: img }} />
    </Card>
  );
}
