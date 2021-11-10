import { getTopHeadlines } from 'Services';
import { IArticles } from 'Containers/NewsContainer/News';

export const GET_TOP_HEADLINES: string = 'GET_TOP_HEADLINES';

export interface IAction<T> {
  type: string;
  payload: T;
}

interface IAddNewsAction {
  articles: IArticles | IArticles[];
  page: number;
  totalResults: number;
}

export const addNews = (
  articles: IArticles | IArticles[],
  totalResults: number,
  page: number = 1,
): IAction<IAddNewsAction> => {
  return {
    type: GET_TOP_HEADLINES,
    payload: { articles, page, totalResults },
  };
};

export const getTopHeadLinesAction = (page: number) => {
  return async (dispatch: (args: any) => IAction<IAddNewsAction>) => {
    const data = await getTopHeadlines(page);
    if (data) {
      const { articles, totalResults } = data;
      dispatch(addNews(articles, totalResults, page));
    }
  };
};
