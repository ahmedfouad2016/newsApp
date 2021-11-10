import Constants from 'Config/Constants';
import { IArticles, INews } from 'Containers/NewsContainer/News';
import { api } from './api';
import { ApiResponse as IApiResponse } from 'apisauce';

const country: string = 'us';
const apiKey: string = Constants.API_KEY;
const pageSize: number = Constants.PAGE_SIZE;

const getTopHeadlines = async (
  page: number = 1,
  q: string = '',
): Promise<INews<IArticles> | null> => {
  try {
    const response: IApiResponse<INews<IArticles>> = await api.get(
      'top-headlines',
      {
        q,
        country,
        apiKey,
        pageSize,
        page,
      },
    );
    if (!response.ok) {
      return null;
    }
    const { data = null } = response;
    return data;
  } catch (error) {
    return null;
  }
};

export { getTopHeadlines };
