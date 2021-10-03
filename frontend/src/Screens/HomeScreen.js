import React, {useState, useEffect} from 'react';


import { Product } from '../components/Product.jsx';
export const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect(async () => {

        const jsonData = await fetch('api/products')
        const products = await jsonData.json();
        setProducts(products)
      


    }, [])

    return (
        <div className = "flex p-7 justify-around flex-wrap bg-gradient-to-br from-green-100 to-pink-100 " >
            {products.map(product => (
                <Product product = {product} /> 
            ))}
        </div>
    )
}
