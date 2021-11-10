import React, { ReactElement } from 'react';
import { Card } from 'react-native-paper';

export interface INewsCardProps {
  title: string;
  description: string;
  img: string;
}

export default function NewsCard({
  img,
  title,
  description,
}: INewsCardProps): ReactElement {
  return (
    <Card>
      <Card.Title title={title} subtitle={description} />
      <Card.Cover source={{ uri: img }} />
    </Card>
  );
}
