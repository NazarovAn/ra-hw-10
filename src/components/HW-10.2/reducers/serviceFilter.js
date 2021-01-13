import {
  FILTER_SERVICE,
  CLEAR_FILTER,
  UPDATE_FILTERED_LIST,
} from '../actions/actionTypes';

const initialState = {
  list: null,
  filteredList: null,
  cryteria: null,
  isFiltered: false,
};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE:
      const { list, criteria } = action.payload;
      const filteredList = list.filter((service) => service.name.toLocaleLowerCase().includes(criteria.trim()));
      return { list, filteredList, criteria, isFiltered: true };

    case UPDATE_FILTERED_LIST:
      const newList = action.payload;
      const newFilteredList = newList.filter((service) => service.name.toLocaleLowerCase().includes(state.criteria.trim()));
      return { ...state, list: newList, filteredList: newFilteredList };
    
    case CLEAR_FILTER:
      return initialState;
  
    default:
      return state;
  }
}