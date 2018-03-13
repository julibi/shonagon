import { GET_UNREAD_SNUS } from '../actions/index';
// import update from 'immutability-helper';

export default function(state = [], action) {
	switch(action.type) {
    case GET_UNREAD_SNUS:
      return [ ...action.payload.data ];
		default: 
			return state;
	}
}
