import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducer/ProductReduce";
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const store= createStore(productReducer,composeEnhancers(applyMiddleware(thunk)))
export default store;
