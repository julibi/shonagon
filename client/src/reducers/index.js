import { combineReducers } from 'redux';
import SnusReducer from './SnusReducer';
import SnuReducer from './SnuReducer';
import KeywordMatchingSnusReducer from './KeywordMatchingSnusReducer';
import RandomSnuReducer from './RandomSnuReducer';
import ReadSnusReducer from './ReadSnusReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  snus: SnusReducer,
  currentSnu: SnuReducer,
  keywordMatchingSnus: KeywordMatchingSnusReducer,
  randomSnu: RandomSnuReducer,
  readSnus: ReadSnusReducer,
  form: formReducer
});

export default rootReducer;
