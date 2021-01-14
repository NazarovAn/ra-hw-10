import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  removeService,
  getEditedServiceId,
  changeServiceField,
  clearServiceField,
  clearEditedServiceId,
} from '../actions/actionCreators';

export default function ServiceList() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.serviceList);
  const filteredList = useSelector(state => state.serviceFilter.filteredList);
  const isFiltered = useSelector(state => state.serviceFilter.isFiltered);
  const editedServiceId = useSelector(state => state.serviceEdit);

  const displayedList = isFiltered ? filteredList : list;

  const handleRemove = (id) => {
    if (editedServiceId === id) {
      dispatch(clearServiceField());
      dispatch(clearEditedServiceId());  
    }    
    dispatch(removeService(id));
  }

  const handleEdit = (service) => {
    dispatch(getEditedServiceId(service.id));
    dispatch(changeServiceField('name', service.name));
    dispatch(changeServiceField('price', service.price));
  }

  return (
    <ul className="pd_1">
      { displayedList.map((service) => {
        return (
          <li key={ service.id }>
            <span>{ service.name } - { service.price }</span>&nbsp;
            <button className="services_button" onClick={ () => handleRemove(service.id) }>X</button>
            <button className="services_button" onClick={ () => handleEdit(service) }>Edit</button>
          </li>)
      }) }
    </ul>
  )
}
