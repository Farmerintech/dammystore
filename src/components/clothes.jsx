import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myProducts } from "./storeProducts";
import { Preview } from "./preview";





export const Clothes =()=>{
    const {productName} =useParams();
    const [clickedData, setClickedData] = useState({});
const [visible, setVisible] = useState(null);

const handleClick = (id) => {
    setVisible(true);
    setClickedData({id});
};
const handleCancle = () => {
    setVisible(false);
};
const navigate =useNavigate()
const goTo =(productType, category, id)=>{
   setTimeout(()=>{
    navigate(`/${productType}/${category}/${id}`);
    window.location.reload();
   }, 500)
    window.scrollTo({top:0, behavior:'smooth'})
}

myProducts.forEach(product => {
    if (product.productType === 'clothes' && product.category === 'women') {
        product.productType = 'women';
    }
    if(product.productType === 'clothes' && product.category === 'men'){
        product.productType = 'men';
    }
});

    return(
        <section className=" mt-10 gap-2">
             <div className={`${visible ? 'block' : 'hidden'} flex justify-center items-center`}>
             <Preview id={clickedData.id} action={()=>{handleCancle()}}
                />
             </div>
            <div className="flex flex-wrap justify-center items-center p-2 gap-2 mt-10">
                    {myProducts.filter(item=>item.productType==productName).map((item)=>(
                         <div className="w-[48%] md:w-[300px] mt-10" key={item.id}>
                         <div className="w-[100%] md:w-[300px]">
                            <img
                             src={item.img}
                             alt={`img-${item.id}`}
                             className=" md:w-[300px] h-[300px] rounded-t-md"
                         />
                         </div>
                     <p className="hidden"></p>
                         <div className="relative bg-blue-400 text-blue-100 w-[full] p-3 flex justify-center items-center" 
                        onClick={() => handleClick(item.id)}>
                             <p className="absolute bottom-0 ">Quick View</p>
                         </div>
                         <p onClick={()=>(goTo(item.productType, item.category,item.id))}>
                            {item.name}{item.id}
                            
                            </p>
                         
                     </div>
                     
                 ))}
                </div>
  

        </section>
    )
}