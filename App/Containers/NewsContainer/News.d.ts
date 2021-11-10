export interface IArticles {
  source: { id: null | string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface INews<T> {
  status: string;
  totalResults: number;
  articles: Array<T> | T;
}
