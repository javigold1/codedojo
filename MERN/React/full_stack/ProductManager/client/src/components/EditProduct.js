import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';

const EditProduct = (props) => {
    
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description:""
    })

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/update/${props.productId}`)
            .then(response => {
                console.log("****** response from create api after submitting form")
                console.log(response)
                console.log("****** response from create api after submitting form")
                setFormInfo(response.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        console.log("changing the input")
        console.log(e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("getting ready to submit this product", formInfo)
        axios.put(`http://localhost:8000/api/projects/update/${props.productId}`, formInfo)
            .then(response => {
                console.log("just updated")
                console.log(response)
                Navigate("/")
            })
            .catch(err => console.log(err))
        
    }


    return (
        <div>
            <h1 className="text-info mb-5">Add your New Product:</h1>
            <form onSubmit={submitHandler}>
                {/* <p className="text-danger">{errors.title? errors.title.message: ""}</p> */}
                <div className="form-group col-3 mx-auto"> 
                    <p>Title: <input type="text" name="title" value={formInfo.title} onChange={changeHandler} className="form-control"/></p>
                </div>
                <div className="form-group col-1 mx-auto"> 
                    <p>Price: <input type="number" name="price" value={formInfo.price} onChange={changeHandler} className="form-control"/></p>
                {/* <p className="text-danger">{errors.content? errors.content.message: ""}</p> */}
                </div>
                <div className="form-group col-3 mx-auto"> 
                <p>Description: <textarea name="description" value={formInfo.description} id="" cols="30" rows="5" onChange={changeHandler} className="form-control"></textarea></p>
                </div>
                {/* <p><input type="date" name="" onChange={changeHandler}/></p> */}
                <button className="btn btn-primary">Edit Product</button>
            </form>
        </div>
    );
};


export default EditProduct;