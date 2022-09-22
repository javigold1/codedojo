import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Form, Label, FormGroup, Input, Button } from '../styles/Style';


export default props => {
  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState(0);
  const [ description, setDescription ] = useState("");
  const [ errors, setErrors ] = useState({});


  useEffect( () => {
    axios.get("http://localhost:8000/api/product/" + props._id)
      .then(res => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, [props._id])


  const onSubmitHandler = e => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/product/" + props._id, {
      title,
      price,
      description
    })
      .then(res => {
        if(res.data.errors) { setErrors(res.data.errors); }
        else { Navigate("/"); }
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Form onSubmit={ onSubmitHandler }>
        <h2>Update A Product</h2>
        <FormGroup>
          <Label>Title</Label>
          <Input type="text" onChange={(e) => setTitle(e.target.value)} value={ title }/>
          <span className="text-danger">{ errors.title ? errors.title.message: "" }</span>
        </FormGroup>
        <FormGroup>
          <Label>Price   </Label>
          <Input type="number" onChange={(e) => setPrice(e.target.value)} value={ price }/>
          <span className="text-danger">{ errors.price ? errors.price.message: "" }</span>
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
          <span className="text-danger">{ errors.description ? errors.description.message: "" }</span>
        </FormGroup>
        <Button type="submit">Submit</Button>
    </Form>
    </div>
  )
}