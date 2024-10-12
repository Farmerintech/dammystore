import { Link } from 'react-router-dom';
import { IoBag, IoMenu, IoBagCheckOutline } from "react-icons/io5"
import { BiCart } from "react-icons/bi"
import { useContext } from "react"
import { ProductContext } from "./productContext"
export const Nav = ()=>{
    const{state} = useContext(ProductContext);
    return(
        <nav className="flex justify-between fixed w-[100%] top-0 bg-white p-2">
            <div className="md:hidden"><IoMenu  size={20}/></div>
            <div className="flex justify-center content-center items-center text-lg">F<span className='text-blue-700'><IoBagCheckOutline/></span>SN</div>
            <div className='flex justify-center gap-5 pointer'>

           
            <div className="w-[35px] h-[35px] rounded-full flex justify-center content-center  items-center bg-blue-800 pointer text-white">
                <BiCart size={15}/>
                
            <span className="absolute top-2 right-5 text-[10px] "><Link to='/cart'>{state.cart.length}</Link></span>
            </div>
            </div>
        </nav>
    )
}