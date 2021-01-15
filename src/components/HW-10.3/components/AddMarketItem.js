import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddMarketItem.css';
import {
  addMarketItem,
  clearMarketItemFields,
  changeMarketItemField,
  changeMarketItemSaleType,
} from '../actions/actionCreators';
import { nanoid } from 'nanoid';

export default function AddMarketItem() {
  const dispatch = useDispatch();
  const item = useSelector(state => state.addItem);
  const { name, price, image, link, saleType, oldPrice } = item;

  const handleInput = (event) => {
    dispatch(changeMarketItemField(event.target.name, event.target.value));
  }
  const handleSelect = (event) => {
    const selectValue = event.target.value === 'default' ? null : event.target.value;
    dispatch(changeMarketItemSaleType(selectValue));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: nanoid(),
      name: item.name,
      price: item.price,
      image: item.image,
      link: item.link,
      saleType: item.saleType,
      oldPrice: item.oldPrice,
    }
    dispatch(addMarketItem(newItem));
    dispatch(clearMarketItemFields());
  }

  return (
    <form className='add_item_form' onSubmit={ handleSubmit }>
      <input className='form_input' onChange={ handleInput } name='name' value={ name === null ? '' : name } placeholder='Название' required />
      <input className='form_input' onChange={ handleInput } name='price' value={ price === null ? '' : price } placeholder='Цена' required />
      <input className='form_input' onChange={ handleInput } name='image' value={ image === null ? '' : image } placeholder='Изображение' required />
      <input className='form_input' onChange={ handleInput } name='link' value={ link === null ? '' : link} placeholder='Ссылка на товар' />
      <select className='form_select' onChange={ handleSelect }>
        <option value='default'>Выбрать категорию</option>
        <option value='latest'>Новинка</option>
        <option value='sale'>Акция</option>
        <option value='discount'>Скидка</option>
      </select>
      { 
        saleType === 'discount'
        ?
          <input className='form_input' onChange={ handleInput } value={ oldPrice === null ? '' : oldPrice } name='oldPrice' placeholder='Старая цена' />
        :
          null 
      }
      <button className='form_submit_btn'>Продолжить</button>
    </form>
  )
}
