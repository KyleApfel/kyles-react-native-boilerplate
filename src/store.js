import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import counter from './features/counter/reducer';
import navigation from './features/navigation/reducer';

const identity = x => x;

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, __DEV__ ? logger : identity)(createStore);

const reducer = combineReducers({
  counter,
  navigation,
});

export default () => createStoreWithMiddleware(reducer);
