import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import {productListReducer, productItemReducer} from './reducers/productReducers';

console.log("Store Top");

const reducer = combineReducers({
    productList: productListReducer,
    productItem: productItemReducer
});

const initialState = {};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

console.log("Store End");
export default store