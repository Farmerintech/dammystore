import {createContext, useReducer, useState} from 'react';


export const ProductContext = createContext();
//define initial stae of cart anf fav
const initialState = ({
    cart:[],
    Fav:[],
    quantity:1,
    notify:{
        message:''
    },
    view:{}
});
// the reducer that mange what hapens to cart and fav
const productReducer =(state, action)=>{
    switch(action.type){
        case 'AddToCart':
            const alreadyInCart = state.cart.find(item => item.id === action.payload.id);//check if italready exist in cart
            if (!alreadyInCart){                
                return{
                    ...state,
                    cart:[...state.cart, action.payload],
                    notify: {
                        ...state.notify,
                        message: `${action.payload.name} added to cart`
                    }
                   }
            }else{
                console.log('item already in cart');
                return{ 
                    ...state,
                notify: {
                    ...state.notify,
                    message: `${action.payload.name} already in cart`
                }
            }
        }
        case 'removeFromCart':
                    return{
                        ...state,
                        cart:state.cart.filter(item=>item.id !==action.payload.id),
                        ...state.notify.message = `item ${action.payload.id} removed from cart `,
                        notify: {
                            ...state.notify,
                            message: `${action.payload.name} added to cart`
                        }
                    }
        case 'addToFav':
            const isFavorite = state.Fav.find(item => item.id === action.payload.id);
            if (!isFavorite){
                return{
                     ...state,
                     Fav:[...state.Fav, action.payload],
                     ...state.notify.message = `${action.payload.name} added to favourite `
                }
            }else{
                //console.log('item already in cart')
                return { 
                    ...state,
                    Fav:state.Fav.filter(item=>
                        item.id !==action.payload.id),
                        ...state.notify.message = `${action.payload.name} removed from favourite `,
                notify: {
                    ...state.notify,
                    message: `${action.payload.name} removed from favourite`
                }
            };
            }
       case 'removeFromFav':
                  return{
                     ...state,
                     notify: {
                        ...state.notify,
                        message: `${action.payload.name} added to cart`
                    } ,
                     Fav:state.Fav.filter(item=>
                        item.id !==action.payload.id),            
                     }
        case 'addQuantity':
                    return {
                        ...state,
                        cart: state.cart.map(item =>
                            item.id === action.payload.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    };
                
         case 'decreaseQuantity':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1}
                        : item
                ),
            };
        default:
            return state;
    }
}

export const ProductProvider = ({children})=>{
    const [state, dispatch] = useReducer(productReducer, initialState);
    return(
        <ProductContext.Provider value ={{state, dispatch}}>
        {children}
        </ProductContext.Provider>
    )
}