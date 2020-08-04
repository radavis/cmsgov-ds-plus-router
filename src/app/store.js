import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import navReducer from '../features/nav/navSlice';

export const history = createBrowserHistory();

const devTools = process.env.NODE_ENV !== 'production'

const middleware = [
  ...getDefaultMiddleware(),
  routerMiddleware(history)
]

const reducer = {
  nav: navReducer,
  router: connectRouter(history)
};

export default configureStore({
  devTools,
  middleware,
  reducer
});
