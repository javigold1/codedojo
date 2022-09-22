import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                console.log("****** axios.get prints all products")
                console.log(response)
                setAllProducts(response.data.results)
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <div>
            <h3 className="text-info">All Products</h3>
            <h1 className="text-secondary">***</h1>
                {allProducts.map((product, i) => {
                    return <div className="col-4 mx-auto">
                        <div className="">
                            <h4 className="text-danger">{product.title}</h4>
                            <p className="font-weight-bolder">Price: ${product.price}</p>
                            {/* <p className="text-secondary"> Description: {product.description}</p> */}
                            <button className="btn btn-primary"> <Link className="text-light" to={`/products/${product._id}`}>Read More</Link> </button>
                            <hr className="col-2"/>
                        </div>
                    </div>
                })}
        </div>
    );
};

export default AllProducts;