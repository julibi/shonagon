import { FETCH_SNUS } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
    case FETCH_SNUS:
			return [ ...state, ...action.payload.data ];
		default: 
			return state;
	}
}
