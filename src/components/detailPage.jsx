import { Navigate, useNavigate, useParams } from "react-router-dom"
import { myProducts } from "./storeProducts"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Preview } from "./preview"
import { useContext } from "react"
import { ProductContext } from "./productContext"
export const DetailedPage = ()=>{
const {productName, category, id} =useParams()
const [clickedData, setClickedData] = useState({});
const [visible, setVisible] = useState(null);
const {state, dispatch} = useContext(ProductContext)

const handleClick = (img, text, price, pT, cat, myId) => {
    setVisible(true);
    setClickedData({ img, text, price, pT, cat, myId});
};
const handleCancle = () => {
    setVisible(false);
};
const navigate =useNavigate()
const goTo =(productType, category, myId)=>{
   setTimeout(()=>{
    navigate(`/${productType}/${category}/${myId}`);
    // window.location.reload();
   }, 500)
    window.scrollTo({top:0, behavior:'smooth'})
}

const [myProduct, setMyProducts] = useState(myProducts);

const addToCart = (item) => {
    dispatch({ type: 'AddToCart', payload: item });
};
const addQuantity = (item) => {
    // Update only the product with the matching ID
    setMyProducts((prevProducts) => {
      return prevProducts.map((item) =>
        item.id === Number(id) ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };
  
  const reduceQuantity = (item ) => {
    // Update only the product with the matching ID
    if(item.quantity > 1 ){
    setMyProducts((prevProducts) => {
      return prevProducts.map((item) =>
        item.id === Number(id) ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  }
}


    return(
        <section className="mt-10 p-2">
            <div className={`${visible ? 'block' : 'hidden'} flex justify-center items-center`}>
                <Preview imgSrc={clickedData.img} text={clickedData.text} action={handleCancle} 
                price={clickedData.price} productType={clickedData.pT} category={clickedData.cat} id={clickedData.myId}
                link={`/${clickedData.pT}/${clickedData.cat}/${clickedData.myId}`}
                />
            </div>
            <div>
               {myProduct.filter(item=>item.id==id).map((item)=>(
                <section className="mt-10 flex gap-10 justify-center md:flex-row flex-col md:items-center">
                 <div className="flex justify-center items-center">
                     <img src={item.img} className="md:w-[300px] w-[100%] md:h-[400px] h-[300px] rounded-md"/>
                 </div>
                 <div className="flex flex-col justify-start gap-2">
                 <h4 className="font-bold text-2xl text-left">{item.name}</h4>
                 <p>${item.price}.00 USD</p>
                 <p>Quantity: {item.quantity}</p>
                 {item.id}

                 <p className="text-sm">Delivery cost calculated at checkout</p>
                 <div>
                    <p>Size</p>
                    <select className="boreder-2 border-black p-2 w-[150px] md:w-[300px]">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                 </div>
                 <p>Quantity</p>
                 <div className="border-2 flex gap-8 border-black w-[150px] justify-around p-2 rounded-md">
                     <span onClick={() => (addQuantity(item))}>+</span>
                     <span>{item.quantity}</span>
                     <span onClick={()=>(reduceQuantity(item))}>-</span>
                 </div>
                     <button className="bg-blue-400 text-white p-2 md:w-[300px]" onClick={()=>(addToCart(item))}>Add to Cart</button>
                     <button className="bg-blue-400 text-white p-2 md:w-[300px]">Buy it now</button>
                     <p className="text-xl font-bold">Description</p>
                     <p className="w-[300px]">{item.description}</p>
                 </div>
             </section>
               ))}
            </div>
            <section>
                <div className="mt-10">
                    <p className="font-bold text-2xl">Related Products</p>
                </div>
                <div className="flex flex-wrap justify-center items-center p-2 gap-2 ">
                    {myProduct.filter(item=>item.id !==Number(id) && item.productType==productName && item.category === category).map((item)=>(
                         <div className="w-[48%] md:w-[300px]" key={item.id}>
                         <div className="w-[100%] md:w-[300px] ">
                            <img
                             src={item.img}
                             alt={`img-${id}`}
                             className=" md:w-[300px] h-[300px] rounded-t-md"
                         />
                         </div>
                     <p className="hidden"></p>
                         <div className="relative bg-blue-400 text-blue-100 w-[full] p-3 flex justify-center items-center" 
                        onClick={() => handleClick(item.img, item.name, item.price, item.productType, item.category, item.id)}>
                             <p className="absolute bottom-0 ">Quick View</p>
                         </div>
                         <p onClick={()=>(goTo(item.productType, item.category,item.id))}>
                            {item.name}
                            {item.id}
                            
                            </p>
                         
                     </div>
                     
                 ))}
                </div>
            </section>
        </section>
    )
}