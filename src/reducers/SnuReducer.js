import { FETCH_SNU } from '../actions/index';
// import update from 'immutability-helper';

export default function(state = [], action) {
	switch(action.type) {
    case FETCH_SNU:
      return { ...action.payload.data };
		default: 
			return state;
	}
}
