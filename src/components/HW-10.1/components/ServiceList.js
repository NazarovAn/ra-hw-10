import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, getEditedServiceId, changeServiceField, clearServiceField, clearEditedServiceId } from '../actions/actionCreators';

export default function ServiceList() {
  const list = useSelector(state => state.serviceList);
  const editedServiceId = useSelector(state => state.serviceEdit);
  const dispatch = useDispatch();

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
      { list.map((service) => {
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
