import {
  CHANGE_MARKET_ITEM_FIELD,
  CHANGE_MARKET_ITEM_SALE_TYPE,
  CLEAR_MARKET_ITEM_FIELDS,
} from '../actions/actionTypes';

const initialState = {
  name: null,
  price: null,
  link: null,
  image: null,
  saleType: null,
  oldPrice: null,
}

export default function addItemReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MARKET_ITEM_FIELD:
      return { ...state, [action.payload.name]: action.payload.value };

    case CHANGE_MARKET_ITEM_SALE_TYPE:
      return { ...state, saleType: action.payload };

    case CLEAR_MARKET_ITEM_FIELDS:
      return initialState;
  
    default:
      return state
  }
}
