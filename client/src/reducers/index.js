import { combineReducers } from 'redux';
import SnusReducer from './SnusReducer';
import SnuReducer from './SnuReducer';
import KeywordMatchingSnusReducer from './KeywordMatchingSnusReducer';
import RandomSnuReducer from './RandomSnuReducer';
import ReadSnusReducer from './ReadSnusReducer';

const rootReducer = combineReducers({
  snus: SnusReducer,
  currentSnu: SnuReducer,
  keywordMatchingSnus: KeywordMatchingSnusReducer,
  randomSnu: RandomSnuReducer,
  readSnus: ReadSnusReducer
});

export default rootReducer;
