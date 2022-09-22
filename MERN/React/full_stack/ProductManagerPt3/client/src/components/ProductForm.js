import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Form, Label, FormGroup, Input, Button } from '../styles/Style';


export default () => {
  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState(0);
  const [ description, setDescription ] = useState("");
  const [ errors, setErrors ] = useState({});


  const onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product', { title, price, description })
      .then(res => {
        if(res.data.errors) { setErrors(res.data.errors); }
        else { Navigate("/"); }
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  
  return (
    <Form onSubmit={ onSubmitHandler }>
      <h2>Create a Product</h2>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" onChange={(e) => setTitle(e.target.value)}/>
        <span className="text-danger">{ errors.title ? errors.title.message: "" }</span>
      </FormGroup>
      <FormGroup>
        <Label>Price</Label>
        <Input type="number" onChange={(e) => setPrice(e.target.value)}/>
        <span className="text-danger">{ errors.price ? errors.price.message: "" }</span>
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Input type="text" onChange={(e) => setDescription(e.target.value)}/>
        <span className="text-danger">{ errors.description ? errors.description.message: "" }</span>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}