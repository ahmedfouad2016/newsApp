import { combineReducers } from 'redux';

import { reducer as news } from './NewsReducer';

export default combineReducers({
  news,
});
