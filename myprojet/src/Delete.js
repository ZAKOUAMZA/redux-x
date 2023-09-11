import axios from 'axios'
import React, { useState } from 'react'

export default function Delete() {
    const [id, setId] = useState();

  const handleDelete = () => {
    axios.delete(`https://www.harmonystore01.com/api/delete_product/${id}`)
      .then(response => {
        console.log(' supprimé avec succès');
      })
      .catch(error => {
        console.error( error);
      });
  };
  return (
    <div>
      <input
        type="number"
        placeholder="ID de l'utilisateur à supprimer"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button  style={{marginTop:'5%'}} onClick={handleDelete}>Supprimer</button>
    </div>
  )
}
