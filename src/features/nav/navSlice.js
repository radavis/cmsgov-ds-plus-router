import { createReducer } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from 'connected-react-router';

const links = [
  {
    id: 'thing-1',
    label: 'Thing 1',
    url: '/thing-one'
  },
  {
    id: 'thing-2',
    label: 'Thing 2',
    url: '/thing-two'
  },
  {
    id: 'list',
    label: 'List',
    defaultCollapsed: true,
    items: [
      {
        id: 'sub-item-1',
        label: 'SubItem 1',
        url: '/items/1'
      },
      {
        id: 'sub-item-2',
        label: 'SubItem 2',
        url: '/items/2'
      },
      {
        id: 'sub-item-3',
        label: 'SubItem 3',
        url: '/items/3'
      }
    ]
  }
]

const initialState = {
  links,
  selectedId: null
}

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(LOCATION_CHANGE, (state, action) => {
      state.selectedId = action.payload.location.pathname.substring(1).replace(/\//g, '-')
    })
})

export default reducer;
