import { createStore, combineReducers } from 'redux';
import addItemReducer from '../reducers/addItem';
import marketListReducer from '../reducers/marketList';

const reducer = combineReducers({
  addItem: addItemReducer,
  marketList: marketListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
