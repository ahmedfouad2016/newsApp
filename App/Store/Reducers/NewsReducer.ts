import { IArticles } from 'Containers/NewsContainer/News';
import { GET_TOP_HEADLINES, IAction } from '../Actions/NewsActions';

export interface INewsState {
  articles: Array<IArticles>;
  page: number;
  totalResults: number;
}

const initialState = {
  totalResults: 0,
  articles: [],
  page: 1,
};

export const reducer = (
  state = initialState,
  { type, payload }: IAction<any>,
) => {
  switch (type) {
    case GET_TOP_HEADLINES: {
      const { articles, page, totalResults } = payload;
      return {
        ...state,
        articles: page === 1 ? [...articles] : [...state.articles, ...articles],
        page,
        totalResults,
      };
    }

    default:
      return state;
  }
};
