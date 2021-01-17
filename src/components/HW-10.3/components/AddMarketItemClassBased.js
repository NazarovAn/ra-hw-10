import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './AddMarketItem.css';
import {
  addMarketItem,
  clearMarketItemFields,
  changeMarketItemField,
  changeMarketItemSaleType,
} from '../actions/actionCreators';
import { nanoid } from 'nanoid';

class AddMarketItemClassBased extends Component {
  constructor(props){
    super(props);
    this.imageInputRef = React.createRef();
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'price':
        return this.dispatchPriceInput(name, value, this.props.item.price);
      case 'oldPrice':
        return this.dispatchPriceInput(name, value, this.props.item.oldPrice);
      default:
        return this.props.onInput(name, value);
    }
  }

  dispatchPriceInput = (name, value, stateValue) => {
    if (/^[0-9]+$/.test(value) || value === '') {
      return this.props.onInput(name, value);
    } else {
      return stateValue;
    }
  }

  handleSelect = (event) => {
    const selectValue = event.target.value === 'default' ? null : event.target.value;
    this.props.onSelect(selectValue);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { item } = this.props;
    const newItem = {
      id: nanoid(),
      name: item.name,
      price: item.price,
      image: item.image,
      link: item.link,
      saleType: item.saleType,
      oldPrice: item.oldPrice,
    }
    this.props.onSubmit(newItem);
  }

  handleAddImage = (event) => {
    event.preventDefault();
    this.imageInputRef.current.click();
  }

  handleImageUpload = (event) => {
    const image = event.target.files[0];

    if (/^(image)/.test(image.type)) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        const { result } = reader;
        this.props.onImageUpload(result);
      };
    }
  }

  render() {
    const { name, price, image, link, saleType, oldPrice } = this.props.item;

    return (
      <form className='add_item_form' onSubmit={ this.handleSubmit }>
        <input className='form_input' onChange={ this.handleInput } name='name' value={ name === null ? '' : name } placeholder='Название' required />
        <input className='form_input' onChange={ this.handleInput } name='price' value={ price === null ? '' : price } placeholder='Цена' required />
        <input className='form_input' onChange={ this.handleInput } name='link' value={ link === null ? '' : link} placeholder='Ссылка на товар' />
        <select className='form_select' onChange={ this.handleSelect }>
          <option value='default'>Выбрать категорию</option>
          <option value='latest'>Новинка</option>
          <option value='sale'>Акция</option>
          <option value='discount'>Скидка</option>
        </select>
        { 
          saleType === 'discount'
          ?
            <input className='form_input' onChange={ this.handleInput } value={ oldPrice === null ? '' : oldPrice } name='oldPrice' placeholder='Старая цена' />
          :
            null 
        }
        { image ? <img className='image_preview' src={ image } alt='image_preview' /> : null }
        <div>
          <button onClick={ this.handleAddImage } className='form_submit_btn'>Выбрать изображение</button>
          <button className='form_submit_btn'>Продолжить</button>
        </div>    
        <input ref={ this.imageInputRef } className='form_input file_input' onChange={ this.handleImageUpload } name='image' placeholder='Изображение' type='file' />
      </form>
    )
  }
}

AddMarketItemClassBased.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null]).isRequired]),
    price: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null]).isRequired]),
    image: PropTypes.string,
    link: PropTypes.string,
    saleType: PropTypes.string,
    oldPrice: PropTypes.string,
  }),
  onInput: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onImageUpload: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.addItem,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onInput: (name, value) => dispatch(changeMarketItemField(name, value)),
    onSelect: (value) => dispatch(changeMarketItemSaleType(value)),
    onSubmit: (newItem) => {
      dispatch(addMarketItem(newItem));
      dispatch(clearMarketItemFields());
    },
    onImageUpload: (url) => dispatch(changeMarketItemField('image', url)),
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMarketItemClassBased);
