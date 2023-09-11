import { GET_PRODUCT } from "../actionTypes/ProductType";
import axios from 'axios';

export const get_product=()=>(dispatch)=>{
    try {
        axios.get("https://www.harmonystore01.com/api/get_All_products")
        .then(res=>{
            dispatch({type:GET_PRODUCT,payload:res.data})
        });
        
    } catch (error) {
        
    }
}
export const add_product=(poste)=>(dispatch)=>{

    try {
        axios.post("https://www.harmonystore01.com/api/Create_products",poste)
        .then(res=>{
            dispatch(get_product())
        });
        
    } catch (error) {
        
    }
}