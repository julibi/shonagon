import { createSelector } from 'reselect';

// then get one random one out of the unreadSnus
const randomSnu = 
  state => state.unreadSnus[Math.floor(Math.random() * state.unreadSnus.length)]
;

export { randomSnu };

