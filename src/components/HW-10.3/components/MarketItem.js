import React from 'react';
import './MarketItem.css';

export default function MarketItem(props) {
  const { name, price, link, image, saleType, oldPrice } = props;
  const rublSign = '\u20BD';

  const chooseDiscountText = () => {
    switch (saleType) {
      case 'discount':
        const discountPercent = Math.round((oldPrice - price) / (oldPrice / 100));
        return Number.isNaN(discountPercent) ? <span className='discount_icon__text'>Акция</span> : discountPercent + '%';    
      case 'latest':
        return <span className='discount_icon__text'>New</span>;
      default:
        return <span className='discount_icon__text'>Акция</span>;
    }
  }

  const shortenName = () => {
    return name.length > 26 ? name.slice(0, 26) + '...' : name;
  }

  return (
    <li className='market_item'>
      { saleType ? <div className='discount_icon'>{ chooseDiscountText() }</div> : null }
      <img className='market_item__img' src={ image ? image : 'https://via.placeholder.com/120x150.png' } alt={ name } />
      <div className='market_item__price_wrapper'>
        <span>{ price }{ rublSign }</span>&nbsp;
        { oldPrice ? <span className='market_item__old_price'>{ oldPrice }{ rublSign }</span> : null }
      </div>
      <a href={ link } className='market_item__link'>{ shortenName() }</a>
    </li>
  )
}
