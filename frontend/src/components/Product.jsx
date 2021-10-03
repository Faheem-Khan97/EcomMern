import React from 'react'
import { Link } from 'react-router-dom'
import Review from './Review'

export const Product = ({product}) => {
    const {image, name, rating, description, price, _id } = product
    console.log(image);
    return (
        <div className = " h-auto px-5 pb-2 pt-4 mb-4 w-1/4 m-2 transition duration-300 transform flex-col justify-between items-center shadow-inset bg-white rounded-md font-sans max-h-50 hover:shadow-xl hover:scale-105 ">
            
            <img src={image} alt="" srcSet="" loading="lazy" />
            
             <p className = " my-2  font-bold tracking-wide  " >{name} </p>
             <Review rating = {rating} />
          
            
            <Link to = {`/product/${_id}`} >  <p className = " my-2 mt-4 tracking-wider text-sm leading-7 text-gray text-opacity-10 cursor-pointer hover:text-blue-800 ">{description}</p>  </Link>
            <p className = " mt-2 tracking-wide "><span className = " font-semibold  " >${price}</span></p>
          
        </div>
    )
}
