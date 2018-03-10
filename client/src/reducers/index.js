import { combineReducers } from 'redux';
import SnuReducer from './SnuReducer';
import KeywordsReducer from './KeywordsReducer';

const rootReducer = combineReducers({
  snus: SnuReducer,
  showKeywords: KeywordsReducer
});

export default rootReducer;
