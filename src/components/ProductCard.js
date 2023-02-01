import React from 'react';

const ProductCard = ({ item, onClick }) => {
  return (
    <div className='image-container' onClick={onClick}>
      <img src={item.image} alt={item.name} className='image-size' />
      <div className='margin-10'>
        <p>
          {item.name}
          <br />
          <span className='price-text'>{item.price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
