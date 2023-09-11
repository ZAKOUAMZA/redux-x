import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch ,useSelector} from 'react-redux';
import { get_product } from './redux/actions/ProductAction';

export default function Product() {
  const dispatch=useDispatch()

    
    useEffect(()=>{
    dispatch(get_product())
        },[dispatch])

        const data=useSelector((state)=>state.product)

        const handleDelete = (id) => {
          axios.delete(`https://www.harmonystore01.com/api/delete_product/${id}`)
            .then(response => {
              console.log(' supprimé avec succès');
            })
            .catch(error => {
              console.error( error);
            });
        };
  return (
    <div style={{ display:"flex", flexWrap:"wrap",justifyContent:"space-around" }}>
    {data.map((el)=> 
     <Card key={el.id} style={{ width:"300px" }}>
        <img  src={el.image_url} />
      <Card.Body>
        <Card.Title>{el.product_name}</Card.Title>
        <Card.Text>{el.description}</Card.Text>
        <Card.Text>Prix:{el.price}</Card.Text>
        <Card.Text>Quantité:{el.quantity_in_stock}</Card.Text>
        <Button variant="primary" onClick={()=>handleDelete(el.id)}>Go somewhere</Button>
      </Card.Body>
    </Card>
    )}
     
    </div>
  )
}
