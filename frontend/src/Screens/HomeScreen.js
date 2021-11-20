import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { productList }  from '../actions/productActions.js';
import { Product } from '../components/Product.jsx';
export const HomeScreen = () => {

    const dispatch = useDispatch()

    const productLists = useSelector(state => state.productList);

    const {loading, error, products} = productLists
  
    useEffect(() => {

        dispatch(productList());

    }, [dispatch])



    return <> 
        { loading? <div>
                <h2>Loading........</h2>
            </div> 
        :error ? <h2>{error}</h2> 
        : <div className = "flex p-7 justify-around flex-wrap bg-gradient-to-br from-green-100 to-pink-100 " >
            { products?.map(product => <Product product = {product} />) }
   
        </div>
    } 
        
        </>
}
