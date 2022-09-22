import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';
import axios from 'axios';


const CreateProduct = () => {

const [formInfo, setFormInfo] = useState({
    title: "",
    price: "",
    description:""
})

const [errors, setErros] = useState({})

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
    axios.post("http://localhost:8000/api/products/new", formInfo)
        .then(response => {
            console.log("****** response from create api after submitting form")
            console.log(response)
            console.log("****** response from create api after submitting form")   
            if(response.data.results){
            Navigate("/")
            }
            else{
                setErros(response.data.errors)
            }
        })
        .catch(err => console.log(err))
}


    return (
        <div>
            <h1 className="text-info mb-5">Add your New Product:</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group col-3 mx-auto"> 
                    <p >Title: <input type="text" name="title" onChange={changeHandler} className="form-control"/></p>
                </div>
                <div className="form-group col-1 mx-auto"> 
                    <p >Price: <input type="number" name="price" onChange={changeHandler} className="form-control"/></p>
                </div>
                <div className="form-group col-3 mx-auto"> 
                <p>Description: <textarea name="description" id="" cols="30" rows="5" onChange={changeHandler} className="form-control"></textarea></p>
                </div>
                 <button className="btn btn-primary">Create Product</button>
            </form>
        </div>
    );
};


export default CreateProduct;