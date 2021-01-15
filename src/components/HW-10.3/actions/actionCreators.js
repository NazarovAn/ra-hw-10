import {
  ADD_MARKET_ITEM,
  CHANGE_MARKET_ITEM_FIELD,
  CHANGE_MARKET_ITEM_SALE_TYPE,
  CLEAR_MARKET_ITEM_FIELDS,
} from './actionTypes';

export function clearMarketItemFields() {
  return { type: CLEAR_MARKET_ITEM_FIELDS };
}
export function changeMarketItemField(name, value) {
  return { type: CHANGE_MARKET_ITEM_FIELD, payload: { name, value } };
}
export function changeMarketItemSaleType(type) {
  return { type: CHANGE_MARKET_ITEM_SALE_TYPE, payload: type };
}

export function addMarketItem(item) {
  return { type: ADD_MARKET_ITEM, payload: item };
}
