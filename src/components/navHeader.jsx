import { useContext } from "react";
import { useEffect, useState } from "react"
import { BiChevronLeft,BiChevronRight, BiHeart, BiMenu, BiPopsicle, BiShoppingBag, BiX } from "react-icons/bi";
import { IoBag, IoMenuOutline, IoSearch } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { ProductContext } from "./productContext";
import { Cart } from "./pages/cart";
import { Notify } from "./notify";

export const NewNav = ({open, close, action})=>{
 const products =[]
 const hats ='hats', shoes = 'shoes'
const men = 'men', women= 'women'
    return(
        <nav className={`bg-white  ${open ? 'absolute left-0 top-0 transform-translate smooth 0.2s w-full h-[100vh] scroll-y-none' : 'left-100'}`}>
            <div className={`md:hidden absolute right-5 ${open ? ' bg-blue-600 hover:bg-blue-800 text-white rounded-full block mt-5': 'hidden'}`} onClick={close} >
                <BiX size={30}/>
            </div>
            <ul className={` ${open ? 'block p-2 mt-10': 'hidden'} lg:flex justify-center items-center lg:gap-10 `}>
                <li className="p-2 lg:p-0" onClick={close}>
                    <Link to='/'>Home</Link>
                </li>
                <li className="p-2 lg:p-0" onClick={close}>
                    <Link to={`product/${hats}`}>Hats</Link>
                </li>
                <li className="p-2 lg:p-0" onClick={close}>
                    <Link to={`product/${shoes}`}>Shoes</Link>
                </li>
                <li className="p-2 lg:p-0" onClick={close}>
                    <Link to={`product/${men}`}>Men's Cloth</Link>
                </li>
                <li className="p-2 lg:p-0" onClick={close}>
                    <Link to={`product/${women}`}>Women's Cloth</Link>
                </li>
            </ul>
        </nav>
    )
}


export const NewHeader = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const handleNav =() =>{
        setIsOpen(true);
        // alert('')
    }
    const Close =() =>{
        setIsOpen(false);
    }
    const {state, dispatch} = useContext(ProductContext);
    const [show, setShow] = useState(false)
    const showCart = ()=>{
        !show ?
        setShow(true) : setShow(false)

    }

    return(
       
        <>

        <header className="shadow-sm z-50 fixed top-0 bg-white w-[100%] flex justify-between p-5 bg-white">
            <div className="flex items-center justify-center content-center gap-5">
                <div className="pointer flex gap-2" onClick={()=>{handleNav()}}>
                    <BiMenu size={20} className="lg:hidden"/>
                    <p>Shopify</p>
                </div>
              
        
                <div className="pointer">
                    <IoSearch size={20}/>
                </div>
            </div>
            <NewNav open={isOpen} close={Close}/>
            <div  className="flex items-center justify-center content-center gap-5">
                <div>
                <p className="absolute top-2 text-blue-400 right-5">{state.Fav.length >0 ? state.Fav.length:''}</p>
                    <BiHeart size={20}/>
                </div>
                <div>
                 <p className="absolute top-2 text-blue-400 right-5" onClick={()=>(showCart())}>{state.cart.length >0 ? state.cart.length:''}</p>
                   <BiShoppingBag size={20}/>
                </div>
            </div>
        </header>
        <Cart show={show}/>

        </>
    )
}

