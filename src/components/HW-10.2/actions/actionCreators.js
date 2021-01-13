import { 
  ADD_SERVICE,
  CHANGE_SERVICE_FIELD,
  CLEAR_SERVICE_FIELD,
  REMOVE_SERVICE,
  SAVE_EDITED_SERVICE_ID,
  CLEAR_EDITED_SERVICE_ID,
  SAVE_EDITED_SERVICE,
  FILTER_SERVICE,
  CLEAR_FILTER,
  UPDATE_FILTERED_LIST,
} from './actionTypes';

export function addService(service) {
  return { type: ADD_SERVICE, payload: service };
}
export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: id };
}

export function filterServices(criteria, list) {
  return { type: FILTER_SERVICE, payload: { criteria, list } };
}
export function clearFilter() {
  return { type: CLEAR_FILTER };
}
export function updateFilteredList(newList) {
  return { type: UPDATE_FILTERED_LIST, payload: newList }
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
export function clearServiceField() {
  return { type: CLEAR_SERVICE_FIELD }
}

export function getEditedServiceId(id) {
  return { type: SAVE_EDITED_SERVICE_ID, payload: id };
}
export function clearEditedServiceId() {
  return { type: CLEAR_EDITED_SERVICE_ID };
}
export function saveEditedService(service) {
  return { type: SAVE_EDITED_SERVICE, payload: service };
}
