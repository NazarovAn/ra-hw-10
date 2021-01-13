import { createStore, combineReducers } from "redux";
import serviceAddReducer from '../reducers/serviceAdd';
import serviceEditReducer from '../reducers/serviceEdit';
import serviceListReducer from '../reducers/serviceList';
import serviceFilterReducer from '../reducers/serviceFilter';

const reducer = combineReducers({
  serviceAdd: serviceAddReducer,
  serviceEdit: serviceEditReducer,
  serviceList: serviceListReducer,
  serviceFilter: serviceFilterReducer,
})
 
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
