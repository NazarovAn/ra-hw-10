import React from 'react';
import { useSelector } from 'react-redux';
import MarketItem from './MarketItem';
import './MarketList.css';

export default function MarketList() {
  const list = useSelector(state => state.marketList);
  return (
    <ul className="market_list">
      { list.map((item) => <MarketItem { ...item } key={ item.id } />) }
    </ul>
  )
}
