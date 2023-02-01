import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Home = () => {
  const history = useHistory();
  const [product, setProduct] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://fe.dev.dxtr.asia/api/products`,
      });
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (newId) => {
    history.push(`/detail/${newId}`);
  };

  return (
    <div>
      <div className='title-text'>
        <h1>PRODUCT LIST</h1>
      </div>
      <div className='product-container'>
        {product &&
          product.map((item, index) => {
            return (
              <div key={index}>
                <ProductCard
                  item={item}
                  onClick={() => handleSelect(item.id)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
