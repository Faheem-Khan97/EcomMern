import React, { useState , useEffect} from 'react'
import products from '../products'
import { Link } from 'react-router-dom'
// import {img} from '../../public/imagesmob2.jpeg'

const ProductSc = ({match}) => {
    
    const [product, setProduct] = useState({})


    useEffect(async () => {

        const jsonData = await fetch(`/api/products/${match.params.id}`)
        const product = await jsonData.json();
        setProduct(product)
      


    }, [])

    const {image, name, rating, description, price } = product

    return (
        <section className = "h-90 " >
            <h2>Helloooo</h2>
            <article>
                <img src={`/${image}`} alt={product.name} loading = "lazy" />
            </article>
            
           helloo
        </section>
    )
}

export default ProductSc
