import { ENABLE_KEYWORDS_SHOWING } from '../actions/index';
// import update from 'immutability-helper';

export default function(state = [], action) {
	switch(action.type) {
    case ENABLE_KEYWORDS_SHOWING:
      console.log('hellow, am i being ignored here?', action.payload.data);
      return [ ...state, ...action.payload.data ];
		default: 
			return state;
	}
}
