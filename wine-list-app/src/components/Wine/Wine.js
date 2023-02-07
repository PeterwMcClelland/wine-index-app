import { Button } from '@mui/material';
import React from 'react';
import "./Wine.css";

const Wine = (props) => {
    const { name, brand, vintage, varietal, appellation, harvestdate, aging, bottlingdate, alcohol, price} = props.wine;
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
      <Button>Update</Button>
      <Button>Delete</Button>
      </div>;
  
};

export default Wine;