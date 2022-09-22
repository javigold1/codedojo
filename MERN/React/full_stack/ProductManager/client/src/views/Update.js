import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        // <div>
        //     <p>Title: {product.title}</p>
        //     <p>Price: {product.price}</p>
        //     <p>Description: {product.description}</p>
        // </div>
            <div>
                {
                    loaded && (
                    <div className=''>
                        <h1>Update</h1>
                        <ProductForm initialProduct={product} onSubmitProp={handleUpdateProduct} />
                    </div>
                    )
                }
                <DeleteButton productId={productId} successCallBack={()=>props.history.push("/")}/>
            </div>
    );
}
    
export default Detail;