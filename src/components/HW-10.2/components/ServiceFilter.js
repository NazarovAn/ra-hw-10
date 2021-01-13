import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterServices, clearFilter, updateFilteredList } from '../actions/actionCreators';

export default function ServiceFilter() {
  const dispatch = useDispatch();
  const initialList = useSelector(state => state.serviceList);
  const { isFiltered } = useSelector(state => state.serviceFilter);
  let delayTimer = null;
  
  const handleChange = (event) => {
    const criteria = event.target.value;
    clearTimeout(delayTimer);
    if (criteria.length > 0) {
      delayTimer = setTimeout(() => dispatch(filterServices(event.target.value, initialList)), 500);
    } else {
      dispatch(clearFilter());
    }
  }

  useEffect(() => {
    if(isFiltered) {
      dispatch(updateFilteredList(initialList));
    }
  }, [dispatch, initialList, isFiltered]);

  return (
    <input className="services_input" placeholder="Поиск услуги" onChange={ handleChange } />
  )
}
