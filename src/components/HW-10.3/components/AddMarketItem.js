import React, { useRef } from 'react';
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
  const imageInputRef = useRef();

  const handleInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'price':
        if (/^[0-9]+$/.test(value) || value === '') {
          return dispatch(changeMarketItemField(name, value));          
        } else {
          return price;
        }

      default:
        dispatch(changeMarketItemField(name, value));
    }
  }

  const handleSelect = (event) => {
    const selectValue = event.target.value === 'default' ? null : event.target.value;
    dispatch(changeMarketItemSaleType(selectValue));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (/^(https?:\/\/)/.test(item.link)) {
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
    } else {
      dispatch(changeMarketItemField('link', 'Недействительная ссылка'));
    }
  }

  const handleAddImage = (event) => {
    event.preventDefault();
    imageInputRef.current.click();
  }

  const handleImageUpload = (event) => {
    const image = event.target.files[0];

    // const reader = new FileReader();
    // reader.onload = function(e) {
    //   // The file's text will be printed here
    //   console.log(e.target.result)
    // };
    // reader.readAsText(image);

    // console.log(image);
    // if (/^(image)/.test(image.type)) {
    //   console.log('it IS image');
    // }
  }

  return (
    <form className='add_item_form' onSubmit={ handleSubmit }>
      <input className='form_input' onChange={ handleInput } name='name' value={ name === null ? '' : name } placeholder='Название' required />
      <input className='form_input' onChange={ handleInput } name='price' value={ price === null ? '' : price } placeholder='Цена' required />
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
      <div>
        <button onClick={ handleAddImage } className='form_submit_btn'>Выбрать изображение</button>
        <button className='form_submit_btn'>Продолжить</button>
      </div>
      <input ref={ imageInputRef } className='form_input file_input' onChange={ handleImageUpload } name='image' value={ image === null ? '' : image } placeholder='Изображение' type='file' />
    </form>
  )
}
