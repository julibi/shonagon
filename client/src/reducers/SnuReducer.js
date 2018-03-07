import { FETCH_SNUS, SET_TO_READ, CREATE_SNU } from '../actions/index';
import update from 'immutability-helper';

export default function(state = [], action) {
	switch(action.type) {
    case FETCH_SNUS:
      return [ ...state, ...action.payload.data ];
    case SET_TO_READ:
      return [ ...state, ...action.payload.data ];
    case CREATE_SNU:
      return [...state, ...action.payload.data];
		default: 
			return state;
	}
}
