import React from 'react';
import './Market.css';
import MarketList from './components/MarketList';
import AddMarketItem from './components/AddMarketItem';
import { Provider } from 'react-redux';
import store from './store/store';

export default function Market() {
  return (
    <Provider store={ store }>
      <AddMarketItem />
      <MarketList />
    </Provider>
  )
}
