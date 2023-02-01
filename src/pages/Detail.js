/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  let { productId } = useParams();
  // const history = useHistory();

  const [product, setProduct] = useState();

  useEffect(() => {
    getData();
  }, [productId]);

  const getData = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://fe.dev.dxtr.asia/api/products`,
      });
      setProduct(data.filter((x) => x.id === productId));
      console.log(data.filter((x) => x.id === productId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <div>{JSON.stringify(product)}</div>
    </div>
  );
};

export default Detail;
