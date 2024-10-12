import { useContext, useState } from "react"
import { ProductContext } from "../productContext"
import {BiCheck, BiDumbbell, BiHeart, BiMinus, BiPlus, BiTrash} from 'react-icons/bi'
import { IoHeart } from "react-icons/io5";

   

export const Fav = ()=>{
    

    const{state, dispatch} = useContext(ProductContext);
    console.log(state.cart); // Add this line to debug
    const removeFromFav = ( item)=>{

        dispatch({ type: 'removeFromFav', payload: item});
    }

    return(
        <div className='flex justify-center md:gap-5'>
           <div className="flex  justify-center w-full w-1/2 md:w-1/4 lg:w-1/5 p-2 ">
                {state.Fav.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    state.Fav.map((item) => (
                        
                        <div key={item.id} className='w-full bg-slate-200 mb-5 flex flex-col justify-center items-center pb-3 rounded-xl'>
                            <div className='p-5 flex justify-center'>
                                <img src={item.asset.img} className='w-[100px] md:w-[200px] h-[100px] md:h-[120px]' />
                            </div>
                            <div>
                            </div>
                            <p>Name: {item.name}</p>
                            <p>Price: ${item.price}</p>
                            <p onClick={() => { removeFromFav(item) }} className="text-red-600"> <IoHeart size={20}/> </p>

                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
