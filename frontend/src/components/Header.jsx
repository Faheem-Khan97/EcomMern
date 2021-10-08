//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
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className= "bg-gradient-to-r from-green-100 to-pink-200 flex justify-center align-center " style = {{height: "9vh"}} >

            <div className="text-gray w-1/3 flex justify-center align-center">
               <h3 className = " m-auto text-center" >Ecom SHOP</h3> 
            </div>
            <nav className="navbar w-2/3 text-gray-700 m-auto ">
                <ul className = "flex justify-around align-center " >
                    <li> <Link to="/">HOME</Link> </li>
                    <li> <Link to = " "> CART <i className = "fas fa-shopping-cart"></i> </Link></li>
                    <li> <Link to = "#">SIGN-IN</Link> </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header
