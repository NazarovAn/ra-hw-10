import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService } from '../actions/actionCreators';

export default function ServiceList() {
  const items = useSelector(({ seviceList }) => seviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  };

  return (
    <ul className="pd_1" >
      {items.map(({ id, name, price }) => {
        return (
          <li key={ id }>
            { `${ name } ${ price }` }
            <button className="services_button" onClick={ () => handleRemove(id) }>X</button>
          </li>
        )
      })}
    </ul>
  )
}
