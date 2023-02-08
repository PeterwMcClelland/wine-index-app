import { Button } from '@mui/material';
import React from 'react';
import "./Wine.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Wine = (props) => {
    const history = useNavigate()
    const { _id, name, brand, vintage, varietal, appellation, harvestdate, aging, bottlingdate, alcohol, price} = props.wine;
    const deleteHandler = async() => {
       await axios.delete(`http://localhost:3000/wines/${_id}`)
        .then(res=>res.data)
        .then(()=> history("/"))
        .then(()=> history("/wines"))
    }
  return <div className='card'>
      
      <h1>{brand}</h1>
      <h2>{name}</h2>
      
      <ul>
          <li>Vintage: {vintage}</li>
          <li>Varietal: {varietal}</li>
          <li>Appellation: {appellation}</li>
          <li>Harvest Date: {harvestdate}</li>
          <li>Aging: {aging}</li>
          <li>Bottling Date: {bottlingdate}</li>
          <li>Alcohol: {alcohol}%</li>
      </ul>
      
      <h3>Price: ${price}</h3>
      <Button LinkComponent={Link} to={`/Wines/${_id}`}> Update</Button>
      <Button onClick={deleteHandler}>Delete</Button>
      </div>;
  
};

export default Wine;