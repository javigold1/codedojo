import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button1 } from '../styles/Style';


export default props => {
  const getEverything = () => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };


  const [products, setProducts] = useState([]);


  useEffect( () => {
    getEverything();
  }, []);


  const deleteProduct = (_id) => {
    axios.delete("http://localhost:8000/api/product/" + _id)
      .then(res => {
        console.log(res);
        getEverything();
      })
      .catch(err => console.log(err));
  }


  return(
    <div className = "container">
      <h3>Product List</h3>
      { products.map( product => {
        return <h3 key={ product._id }>
                  <Link to = { `/product/${product._id}` }>Title: { product.title }</Link> | Price: ${ product.price } | Description: { product.description } |
                  <Link to = {`/edit/${product._id}`} className="btn-link" > Edit </Link> | 
                  <Button1 onClick={ e => { deleteProduct(product._id) } } className="btn btn-link align-baseline">
                      X
                  </Button1>
                </h3>
      })}
    </div>
  )
}