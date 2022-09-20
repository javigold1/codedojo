import React from 'react'
import axios from 'axios';
    
const ProductList = (props) => {
    return (
        <div>
            {props.product.map( (product, i) =>
                <p key={i}><a href={product._id}>{product.title},{product.price},{product.description}</a></p>
            )}
        </div>
    )
}
    
export default ProductList;