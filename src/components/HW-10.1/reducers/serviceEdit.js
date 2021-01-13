import {
  GET_EDITED_SERVICE_ID,
  CLEAR_EDITED_SERVICE_ID,
} from '../actions/actionTypes';

const initialState = null;

const serviceEditReducer = (state = initialState, action) => {
  switch (action.type) {    
    case GET_EDITED_SERVICE_ID:
      return action.payload;

    case CLEAR_EDITED_SERVICE_ID:
      return initialState;
      
    default:
      return state;
  }
}

export default serviceEditReducer;
