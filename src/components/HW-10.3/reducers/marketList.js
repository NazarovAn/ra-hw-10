import data from '../data/data';
import {
  ADD_MARKET_ITEM,
} from '../actions/actionTypes';

const initialState = data;

export default function marketListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MARKET_ITEM:
      return [...state, { ...action.payload }];
  
    default:
      return state;
  }
}
