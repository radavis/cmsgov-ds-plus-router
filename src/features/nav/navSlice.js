import { createReducer } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';
import getNavItems from './getNavItems'

const mergeByUrl = (result, node) => {
  result[node.url] = node;
  if (Array.isArray(node.items)) {
    node.items.reduce(mergeByUrl, result);
  }
  return result;
}

const randomInt = (max, min = 0) => Math.floor(Math.random() * (max - min) ) + min;

const initialState = {
  items: getNavItems(),
  selectedId: null
}

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(LOCATION_CHANGE, (state, action) => {
      // get selectedId from pathname

      // const itemsByUrl = items.reduce(mergeByUrl, {});
      const { pathname, hash } = action.payload.location;
      state.items = getNavItems({ items: state.items, url: [pathname, hash].join('') })
    })
    .addCase('TOGGLE_COLLAPSE', (state) => {
      state.items[2].defaultCollapsed = !state.items[2].defaultCollapsed;
      // only works if we update another field, such as id
      state.items[2].id = `item-${randomInt(1000)}`;
    })
    .addCase('TOGGLE_ITEM_1_SELECTED', (state, action) => {
      state.items[2].items[0].selected = !state.items[2].items[0].selected;
    })
})

export default reducer;
