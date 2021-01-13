import { nanoid } from "nanoid";
import { 
  ADD_SERVICE,
  REMOVE_SERVICE,
  SAVE_EDITED_SERVICE,
} from '../actions/actionTypes';
import data from '../data/data';

const initialState = data;

const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return [...state, { id:nanoid(), ...action.payload }];
    
    case REMOVE_SERVICE:
      const id = action.payload;
      return state.filter((service) => service.id !== id);

    case SAVE_EDITED_SERVICE:
      const editedService = action.payload;
      return state.map((service) => service.id === editedService.id ? editedService : service);

    default:
      return state;
  }
}

export default serviceListReducer;
