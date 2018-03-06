import { createSelector } from 'reselect';

// first get all the unread Snus
const unreadSnus = state => state.snus.filter(snu => snu.read === false);

// then get one random one out of the unreadSnus
const randomFirstSnu = createSelector(
  unreadSnus,
  snus => snus[Math.floor(Math.random() * snus.length)]
);

export { unreadSnus, randomFirstSnu };

