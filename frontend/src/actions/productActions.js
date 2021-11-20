// This gonna be action creators
import axios from 'axios'
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,PRODUCT_ITEM_REQUEST, PRODUCT_ITEM_SUCCESS, PRODUCT_ITEM_FAIL  } from "../constants/productConstants";

export const productList = () => async (dispatch) => {

    try {
        console.log("Inside action creator");
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })

        const {data} = await axios.get('/api/products');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
        
    } catch (error) { 
        console.log(error.response.data.message)
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message && error.response.data?.message ? error.response.data.message: error.message
        })
        
    }
}

export const listProductItem = (id) => async (dispatch) => {

    try {
        console.log("Inside action creator");
        dispatch({
            type: PRODUCT_ITEM_REQUEST
        })

        const {data} = await axios.get(`/api/products/${id}`);
        dispatch({
            type: PRODUCT_ITEM_SUCCESS,
            payload: data
        })
        
    } catch (error) { 
        // console.log(error.response.data.message)
        dispatch({
            type: PRODUCT_ITEM_FAIL,
            payload: error.message && error.response.data?.message ? error.response.data.message: error.message
        })
        
    }
}

