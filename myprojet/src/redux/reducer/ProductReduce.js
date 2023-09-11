import { GET_PRODUCT } from "../actionTypes/ProductType";
const initialState={
    product:[]
    
}
const productReducer = (state=initialState,{type,payload}) => {
 switch (type) {
    case GET_PRODUCT:
return {...state,product:payload}
    default:
        return state;
 }
}
export default productReducer;