import { combineReducers } from 'redux';
import SnusReducer from './SnusReducer';
import SnuReducer from './SnuReducer';
import KeywordMatchingSnusReducer from './KeywordMatchingSnusReducer';
import UnreadSnusReducer from './UnreadSnusReducer';

const rootReducer = combineReducers({
  snus: SnusReducer,
  currentSnu: SnuReducer,
  keywordMatchingSnus: KeywordMatchingSnusReducer,
  unreadSnus: UnreadSnusReducer
});

export default rootReducer;
