import { 
  ADD_SERVICE,
  CHANGE_SERVICE_FIELD,
  CLEAR_SERVICE_FIELD,
  REMOVE_SERVICE,
  GET_EDITED_SERVICE_ID,
  CLEAR_EDITED_SERVICE_ID,
  SAVE_EDITED_SERVICE,
} from './actionTypes';

export function addService(service) {
  return { type: ADD_SERVICE, payload: service };
}
export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: id };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
export function clearServiceField() {
  return { type: CLEAR_SERVICE_FIELD }
}

export function getEditedServiceId(id) {
  return { type: GET_EDITED_SERVICE_ID, payload: id };
}
export function clearEditedServiceId() {
  return { type: CLEAR_EDITED_SERVICE_ID };
}
export function saveEditedService(service) {
  return { type: SAVE_EDITED_SERVICE, payload: service };
}
