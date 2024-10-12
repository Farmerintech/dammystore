import { BiX } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { myProducts } from "./storeProducts"
import { useContext, useState } from "react"
import { ProductContext } from "./productContext"
export const Preview = ({ id, action})=>{
    const navigate =useNavigate()
    const goTo =(productType, category, id)=>{
        setTimeout(()=>{
            window.scrollTo({top:0, behavior:'smooth'})
         navigate(`/${productType}/${category}/${id}`);
        //  window.location.reload();\
        action();
        }, 500)
         window.scrollTo({top:0, behavior:'smooth'})
     }

     const {state, dispatch} = useContext(ProductContext)
 
     const addToCart = (item) => {
        dispatch({ type: 'AddToCart', payload: item });
        action();

    };
    const [myProduct, setMyProducts] = useState(myProducts);

    const addQuantity = (itemId) => {
        // Update only the product with the matching ID
        setMyProducts((prevProducts) => {
          return prevProducts.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          );
        });
      };
      
      const reduceQuantity = (item ) => {
        // Update only the product with the matching ID
        if(item.quantity > 1 ){
        setMyProducts((prevProducts) => {
          return prevProducts.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        });
      }
    }
      
      return (
        <section className="flex items-center justify-center">
          {myProduct
            .filter((item) => item.id === id) // Filter the specific product
            .map((item) => (
              <div
                key={item.id}
                className="flex justify-around md:gap-8 border -2 border-blue-300 md:flex-row flex-col md:items-center fixed mt-10 top-10 p-2 z-30 w-[90%] md:w-[50%] md:h-[500px] h-[600px] bg-white"
              >
                <div
                  className="absolute top-5 right-5 bg-white text-gray-200 border-gray border-2 rounded-full p-1"
                  onClick={action}
                >
                  <BiX size={20} />
                </div>
                <div className="flex justify-center gap-8 items-center">
                  <img
                    src={item.img}
                    className="md:w-[300px] w-[300px] md:h-[300px] h-[300px] rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <h4 className="font-bold text-2xl text-left">{item.name}</h4>
                  <p>${item.price}.00 USD</p>
                  <div className="border-2 flex gap-8 border-black w-[150px] justify-around p-2 rounded-md">
                    <span onClick={() => addQuantity(item.id)}>+</span>
                    <span>{item.quantity}</span>
                    <span onClick={() => reduceQuantity(item)}>-</span>
                  </div>
                  <button
                    className="bg-blue-400 text-white p-2 md:w-[200px]"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                  <button className="bg-blue-400 text-white p-2 md:w-[200px]">
                    Add to wishlist
                  </button>
                  <p
                    className="text-underline cursor-pointer"
                    onClick={() => goTo(item.productType, item.category, item.id)}
                  >
                    View full details
                  </p>
                </div>
              </div>
            ))}
        </section>
      );
      

}