import { combineReducers } from 'redux';
import SnuReducer from './SnuReducer';

const rootReducer = combineReducers({
  snus: SnuReducer,
  albums: 'susumsum'
});

export default rootReducer;
