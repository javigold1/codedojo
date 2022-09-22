import React from 'react';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import ProductInfo from '../components/ProductInfo';
import ProductEditForm from '../components/ProductEditForm';
import { Router, Link } from 'react-router-dom';


export default () => {
  return (
    <>
      <div>
        <h1>
          <Link to="/">Home</Link> | 
          <Link to="/new"> New Product</Link>
        </h1>
      </div>
      <hr/>

      <Router>
        <ProductForm path="/new" />
        <ProductList path="/" />
        <ProductInfo path="/product/:_id" />
        <ProductEditForm path="/edit/:_id" />
      </Router>
    </>
  )
}