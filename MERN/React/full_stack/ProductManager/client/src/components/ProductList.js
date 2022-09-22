import React from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const ProductList = (props) => {
    return (
        <div>
            {/* {props.product.map( (product, i) =>
                <p key={i}><a href={product._id}>{product.title},{product.price},{product.description}</a></p>
            )} */}
            <useParams to={`/api/products/update/${ProductList._id}`}>
                <button className='btn btn-primary'>Update</button>
            </useParams>
            <useParams to={`/api/products/delete/${ProductList._id}`}>
                <button className='btn btn-danger'>delete</button>
            </useParams>
        </div>
    )
}
    
export default ProductList;