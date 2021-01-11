import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators';

const selectServiceAdd = ({ serviceAdd }) => serviceAdd; // const selectServiceAdd = (state) => state.serviceAdd;

export default function ServiceAdd() {
  const item = useSelector(selectServiceAdd);
  const dispatch = useDispatch();

  // const handleChange = React.useCallback(
  //   (event) => {
  //     const { name, value } = event.target;
  //     dispatch(changeServiceField(name, value));
  //   },
  //   [dispatch]
  // )
  // const handleSubmit =  React.useCallback(
  //   (event) => {
  //     event.preventDefault();
  //     dispatch(addService(item.name, item.price));
  //   },
  //   [item, dispatch]
  // )

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeServiceField(name, value));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addService(item.name, item.price));
  }


  return (
    <form onSubmit={ handleSubmit }>
      <input className="services_input" name='name' onChange={ handleChange } value={ item.name } />
      <input className="services_input" name='price' onChange={ handleChange } value={ item.price } />
      <button className="services_button" type='submit'>Save</button>
    </form>
  )
}
