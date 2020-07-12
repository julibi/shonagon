import { GET_READ_SNUS } from '../actions/index';
// import update from 'immutability-helper';

export default function(state = [], action) {
	switch(action.type) {
    case GET_READ_SNUS:
      return [ ...action.payload.data ];
		default: 
			return state;
	}
}
