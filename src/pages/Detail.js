/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../Detail.css';

import { Carousel } from 'react-responsive-carousel';
import StarRatings from 'react-star-ratings';

const Detail = () => {
  let { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getData();
  }, [productId]);

  console.log(product);

  const getData = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://fe.dev.dxtr.asia/api/products`,
      });
      const tempProduct = data.filter((x) => x.id === productId);
      if (tempProduct.length) {
        setProduct(tempProduct[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = () => {
    alert('Cart Button');
  };

  const handleBuy = () => {
    alert('Buy Button');
  };

  return (
    <div className='detail-container'>
      {product && (
        <div className='content-container'>
          <div className='carousel-size'>
            <Carousel
              showIndicators={false}
              statusFormatter={(current, total) => `${current}/${total}`}
              showArrows={false}
            >
              {product.images?.map((img, index) => {
                return (
                  <div className='carousel-box' key={index}>
                    <img src={img} alt={index} />
                  </div>
                );
              })}
            </Carousel>
          </div>

          <div className='desc-position'>
            <div className='sale-text'>SALE</div>
            <div className='product-name'>{product.name}</div>
            <div className='start-review'>
              <StarRatings
                rating={product.rating}
                starRatedColor='orange'
                numberOfStars={5}
                name='rating'
                starDimension={'15'}
                starEmptyColor='grey'
                starSpacing={'0'}
              />
              <span className='review-text'>
                {`(${product.reviewCount} reviews)`}
              </span>
            </div>
            <div className='price-text'>{product.price}</div>
            <div className='line-margin' />
            <div className='button-space'>
              <div className='button-cart' onClick={handleCart}>
                Add To Cart
              </div>
              <div className='button-buy' onClick={handleBuy}>
                Buy Now
              </div>
              <div />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
