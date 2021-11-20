import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {listProductItem } from '../actions/productActions.js';
import products from '../products'
import { Link } from 'react-router-dom'
// import {img} from '../../public/imagesmob2.jpeg'

const ProductSc = ({match}) => {

     const dispatch = useDispatch();
     
     const productItem = useSelector(state => { 
         console.log(state)
         return state.productItem;
     })
    
     
    const {loading, product, error} = productItem;



     useEffect(() => {

        dispatch(listProductItem(match.params.id));
        
     }, [dispatch, match])

    return (
        <section className = "h-90 " >
            { loading ? <h1>Loading..............</h1>
            :<div  > 
                <h2>Helloooo</h2>
                <article>
                    <img src={`/${product.image}`} alt={product.name} loading = "lazy" />
                    <h5>{product.name}</h5>
                </article>
            </div>
    }
        </section>
    )
}

export default ProductSc
