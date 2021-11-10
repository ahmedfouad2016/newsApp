import Constants from 'Config/Constants';
import { api } from './api';

const country = 'us';
const apiKey = Constants.API_KEY;
const pageSize = Constants.PAGE_SIZE;

const getTopHeadlines = async (page: number = 1) => {
  try {
    const response = await api.get('top-headlines', {
      country,
      apiKey,
      pageSize,
      page,
    });
    if (!response.ok) {
      return null;
    }
    return response.data;
  } catch (error) {
    return null;
  }
};

export { getTopHeadlines };
