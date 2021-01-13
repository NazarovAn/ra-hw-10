import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addService, changeServiceField, saveEditedService, clearServiceField, clearEditedServiceId } from '../actions/actionCreators';

export default function ServiceAdd() {
  const dispatch = useDispatch();
  const item = useSelector(state => state.serviceAdd);
  const editedServiceId = useSelector(state => state.serviceEdit);

  const handleChange = (event) => {
    dispatch(changeServiceField(event.target.name, event.target.value ));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(editedServiceId) {
      const editedService = {
        id: editedServiceId,
        name: item.name,
        price: item.price,
      }

      dispatch(saveEditedService(editedService));
      dispatch(clearEditedServiceId());
    } else {
      dispatch(addService({ name: item.name, price: item.price }));
    }
    dispatch(clearServiceField());
  }

  const handleCancel = (event) => {
    event.preventDefault();
    dispatch(clearServiceField());
    dispatch(clearEditedServiceId());
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input className="services_input" onChange={ handleChange } name="name" value={ item.name } />
      <input className="services_input" onChange={ handleChange } name="price" value={ item.price } />
      <button className="services_button">Save</button>
      <button className="services_button" onClick={ handleCancel }>Cancel</button>
    </form>
  )
}
