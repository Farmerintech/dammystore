import { useContext, useState } from "react"
import { ProductContext } from "../productContext"
import {BiCheck, BiDumbbell, BiMinus, BiPlus, BiTrash} from 'react-icons/bi'
export const Cart = ({show})=>{
    const{state, dispatch} = useContext(ProductContext);
    console.log(state.cart); // Add this line to debug


    const addQuantity = (item) => {
        dispatch({ type: 'addQuantity', payload: item });
        
    };

    const calculateTotal = () => {
        const total = state.cart.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);
    
        return total; // This will return the total price of all items in the cart
    }    
        let decreaseQuantity =(item)=>{
            dispatch({ type: 'decreaseQuantity', payload: item});    }
    let removeFromCart =(item)=>{
                dispatch({ type: 'removeFromCart', payload: item});    }
   let multiply=(item1, item2)=>{
        return item1 * item2
    }

    return (
            <div className={`  ${show ? 'mt-10 z-20 absolute top-0 right-0 shadow-md bg-white h-[100vh]' : 'hidden'}`}>
                {state.cart.length === 0 ? (
                    ''
                ) : (
                    state.cart.map((item) => (
                        
                        <div key={item.id} className='mt-10 flex mb-5 flex justify-start items-center pb-3 rounded-xl'>
                            <div>
                            <div className='p-5 flex justify-center'>
                                <img src={item.img} className='w-[100px] md:w-[100px] h-[100px] md:h-[120px]' />
                            </div>
                            </div>
                            <div>
                            <p>{item.name}</p>
                            <p>${item.price}.00</p>
                            <p>{item.quantity}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
    );
    
}