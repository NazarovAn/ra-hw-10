import React from 'react';
import './Filter.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilter from './components/ServiceFilter';
// import ServiceAddClassBased from './components/ServiceAddClassBased';
// import ServiceListClassBased from './components/ServiceListClassBased';
import store from './store/store';
import { Provider } from 'react-redux';

export default function Filter() {
  return (
    <Provider store={ store }>
      <div className="pd_1">
        <ServiceAdd />
        <ServiceList />
        {/* <ServiceAddClassBased />
        <ServiceListClassBased /> */}
        <ServiceFilter />
      </div>
    </Provider>
  )
}
