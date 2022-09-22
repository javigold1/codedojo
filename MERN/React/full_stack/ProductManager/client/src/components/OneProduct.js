import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Navigate, Link} from 'react-router-dom';

const OneProduct = (props) => {

    const [oneProduct, setOneProduct] = useState({})

    useEffect(() =>{
    axios.get(`http://localhost:8000/api/products/${props.productId}`)
        .then(response =>{
            console.log("response after trying to get one product", response)
            setOneProduct(response.data.results)

        })
        .catch(err => console.log(err))

}, [])

const deleteProduct = (e, productId) => {
    console.log("deleting product", productId)
    axios.delete(`http://localhost:8000/api/products/delete/${props.productId}`)
        .then(response => {
            console.log("deleted")
            console.log(response)
            Navigate("/")
        })
        .catch(err => console.log(err))
}

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title text-danger">{oneProduct.title}</h4>
                <p className="card-text font-weight-bolder">Price: ${oneProduct.price}</p>
                <p className="card-text text-secondary">Description: {oneProduct.description}</p>
                {/* <a href="#!" className="btn btn-primary">Go somewhere</a> */}
            <button onClick={(e)=> deleteProduct(e, oneProduct._id)} className="btn btn-danger mr-3">Delete Product</button>
            <button className="btn btn-success"> <Link className="text-light" to={`/products/edit/${props.productId}`}> Edit Product </Link> </button>
            </div>
        </div>
    );
};


export default OneProduct;