import React, { ReactElement } from 'react';
import { Card, Paragraph, Subheading } from 'react-native-paper';
import styles from './NewsCard.style';

export interface INewsCardProps {
  title: string;
  description?: string | null;
  img: string;
  author?: string | null;
  content?: string | null;
  publishedAt?: string | null;
}

export default function NewsCard({
  img,
  title,
  description,
  author = null,
  content = null,
}: INewsCardProps): ReactElement {
  return (
    <Card style={styles.container}>
      <Card.Cover source={{ uri: img }} />
      <Card.Title title={title} subtitle={description} />
      <Card.Content>
        {author ? <Subheading>{author}</Subheading> : null}
        {content ? <Paragraph>{content}</Paragraph> : null}
      </Card.Content>
    </Card>
  );
}
