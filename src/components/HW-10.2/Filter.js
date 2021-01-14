import React from 'react';
import './Filter.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilter from './components/ServiceFilter';
import ServiceAddClassBased from './components/ServiceAddClassBased';
import ServiceListClassBased from './components/ServiceListClassBased';
import ServiceFilterClassBased from './components/ServiceFilterClassBased';
import store from './store/store';
import { Provider } from 'react-redux';

export default function Filter() {
  return (
    <Provider store={ store }>
      <div className="pd_1 flex">
        <div className="pd_1 flex_column">
          <h3 className="pd_1">Functional components</h3>
          <ServiceAdd />
          <ServiceList />
          <ServiceFilter />
        </div>
        <div className="pd_1 flex_column">
          <h3 className="pd_1">Class based components </h3>
          <ServiceAddClassBased />
          <ServiceListClassBased />
          <ServiceFilterClassBased />
        </div>
      </div>
    </Provider>
  )
}
