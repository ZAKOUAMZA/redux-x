import React, { useState } from 'react';
import axios from 'axios';
import { add_product } from './redux/actions/ProductAction';
import { useDispatch } from 'react-redux';
export default function Post() {
const dispatch=useDispatch()

const [poste, setPoste] = useState(
  {
  image_url:"",
  product_name:"",
  price: '', 
  description: '',
  category:'',
  Product_material:'',
  price_promo:'',
  quantity_in_stock:''
 }
  );

  const handleCreatePost = () => {
       dispatch(add_product(poste))
  };

  return (
    <div>
    
      <input
        type="url"
        placeholder="image_url"
        value={poste.image_url}
        onChange={e => setPoste({ ...poste, image_url: e.target.value })}
      />
      <input
        type="text"
        placeholder="product_name"
        value={poste.product_name}
        onChange={e => setPoste({ ...poste, product_name: e.target.value })}
      />
      <input
        type="number"
        placeholder="price"
        value={poste.price}
        onChange={e => setPoste({ ...poste, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="description"
        value={poste.description}
        onChange={e => setPoste({ ...poste, description: e.target.value })}
      />
       <input
        type="text"
        placeholder="category"
        value={poste.category}
        onChange={e => setPoste({ ...poste, category: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product_material"
        value={poste.Product_material}
        onChange={e => setPoste({ ...poste, Product_material: e.target.value })}
      />
      <input
        type="number"
        placeholder="price_promo"
        value={poste.price_promo}
        onChange={e => setPoste({ ...poste, price_promo: e.target.value })}
      />
      <input
        type="number"
        placeholder="quantity_in_stock"
        value={poste.quantity_in_stock}
        onChange={e => setPoste({ ...poste, quantity_in_stock: e.target.value })}
      />
      
      <button style={{marginTop:'5%'}} onClick={handleCreatePost}>Créer Ici</button>
    </div>
  );
}
