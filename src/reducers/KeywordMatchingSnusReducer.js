import { GET_SNUS_MATCHING_KEYWORD } from '../actions/index';
// import update from 'immutability-helper';

export default function(state = [], action) {
	switch(action.type) {
    case GET_SNUS_MATCHING_KEYWORD:
      return [ ...action.payload.data ];
		default: 
			return state;
	}
}
