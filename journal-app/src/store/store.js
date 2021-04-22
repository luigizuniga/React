import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// auth store state login and logout user
// uiReducer store message and loading state
const reducers = combineReducers({
      auth: authReducer,
        ui: uiReducer
});

// thunk, Middleware extends the store's abilities, and lets you write async logic that interacts with the store
export const store = createStore(
  reducers,
  composeEnhancers(
      applyMiddleware( thunk )
  )
);