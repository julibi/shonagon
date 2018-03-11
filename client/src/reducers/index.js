import { combineReducers } from 'redux';
import SnusReducer from './SnusReducer';
import OwnReducer from './OwnReducer';

const rootReducer = combineReducers({
  snus: SnusReducer,
  test: OwnReducer
});

export default rootReducer;
