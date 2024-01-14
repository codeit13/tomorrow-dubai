import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productAction';
import ListProducts from './ListProducts';


const Products = () => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);



  return (
    <ListProducts title="Our Exclusive Homes !!!"/>
    )

};

export default Products;
