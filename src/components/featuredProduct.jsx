import { useContext, useState } from "react";
import carousel from '../asset/images1/carousel1.webp';
import carouse1l from '../asset/images1/carousel99.webp';
import carouse22 from '../asset/images1/carousel22.webp';
import carouse33 from '../asset/images1/carousel33.webp';
import carouse55 from '../asset/images1/carousel44.webp';
import carouse66 from '../asset/images1/carousel55.webp';
import carouse77 from '../asset/images1/carousel66.webp';
import carouse88 from '../asset/images1/carousel77.webp';
import carouse99 from '../asset/images1/hats-icon.png';
import carouse210 from '../asset/images1/carousel210.webp';
import img12 from '../asset/images1/man6.jpeg'
import img13 from '../asset/images1/man7.png'

import menIcon from '../asset/images1/shoe.webp'
import { BiHeart } from "react-icons/bi";
import love from '../asset/images1/love.webp';
import love2 from '../asset/images1/love2.webp';
import { Btn } from "./utils/btn";
import { Preview } from "./preview";
import { ProductContext } from "./productContext";
import { Link, useNavigate } from "react-router-dom";
const featruredProductsImg = [
    { id: 42, name: 'Camilla Office Formal Wear', category: 'women', productType: 'clothes', 
        price: 100, description: 'Stylish and comfortable office wear for women, combining professionalism with modern style.', img: carouse33 }
    ,
        { id: 43, name: 'Ava Evening Gown', category: 'women', productType: 'clothes', price: 95, 
            description: 'An elegant and classy evening gown tailored for special occasions. Made from high-quality satin, this dress features a flattering silhouette and intricate detailing.', 
            img: carouse22 },
        { id: 44, name: 'Orion Leather Loafers', category: 'men', productType: 'shoes', price: 55, 
            description: 'Comfortable and stylish leather loafers, ideal for both casual and formal occasions. Crafted with premium leather for durability and a polished look.', 
            img: menIcon },
        { id: 45, name: 'James Slim-Fit Suit', category: 'women', productType: 'shoes', price: 90, 
            description: 'A sleek and modern slim-fit suit designed for the fashion-forward man. Perfect for business meetings or formal events, with a refined cut and breathable fabric.', 
            img: carouse210 },
        { id: 46, name: 'Maxwell Cotton Fedora', category: 'women', productType: 'clothes', price: 25, 
            description: 'Stylish fedora made from 100% cotton, designed for casual wear. Ideal for adding a vintage touch to any outfit.', 
            img: carouse55 },
        { id: 47, name: 'Brady Urban Snapback', category: 'women', productType: 'shoes', price: 20, 
            description: 'A modern snapback with a minimalistic design. Great for casual outings or adding an edge to your everyday style.', 
            img: carouse66 },
        { id: 48, name: 'Luca Everyday Sneakers', category: 'women', productType: 'clothes', price: 50, 
            description: 'Casual sneakers designed for everyday wear. Comfortable, durable, and made from lightweight materials for all-day comfort.', 
            img: carouse77 },
        { id: 49, name: 'Ethan Classic Derby', category: 'women', productType: 'clothes', price: 55, 
            description: 'A pair of comfortable and stylish classic Derby shoes. Perfect for formal occasions or adding a touch of elegance to any outfit.', 
            img: carouse88 },
            { id: 12, name: 'Noah Everyday Essentials', category: 'men', productType: 'clothes', price: 75, description: 'A modern and comfortable outfit, designed for everyday wear with a sleek edge.', img: img12 },
        
];

export const FeaturedProducts = () => {
    
const navigate = useNavigate()
    const goTo =(productType, category, id)=>{
        setTimeout(()=>{
        //  window.location.reload();
        }, 500)
        navigate(`/${productType}/${category}/${id}`);
        window.scrollTo({top:0, behavior:'smooth'})

    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [clickedData, setClickedData] = useState({});
    const [visible, setVisible] = useState(null);

    const handleNext = () => {
        if (window.innerWidth >= 960 && currentIndex + 3 === featruredProductsImg.length || 
            window.innerWidth <= 959 && currentIndex +1 === featruredProductsImg.length) {
         // alert(window.innerWidth)
         setCurrentIndex(0);
  
        }else{
          setCurrentIndex(currentIndex + 1);
        }
      };
      // Function to handle 'Prev' button click
      const handlePrev = () => {
        if (window.innerWidth >= 960 && currentIndex + 3 === 3 || window.innerWidth <= 959 && currentIndex + 1 === 1 ) {
          setCurrentIndex(currentIndex + 7 );
        }else{
          setCurrentIndex(currentIndex - 1);
        }
      }
  
    const handleClick = ( id) => {
        setVisible(true);
        setClickedData({id});
    };

    const handleCancle = () => {
        setVisible(false);
    };
    const {state, dispatch} = useContext(ProductContext);

    const orderNow =()=>{
    }
    return (
        <section className="">
            <div className={`${visible ? 'block' : 'hidden'} flex justify-center items-center`}>
                <Preview id={clickedData.id} action={()=>{handleCancle()} }
                />
            </div>
            <div className="p-10 flex gap-10 justify-between mb-10">
                <div>
                    <h3 className="font-bold text-xl md:text-3xl md:p-2">Love More, Shop More</h3>
                    <p>Get ready to snuggle up with our fabulous fall collection!</p>
                    <button className="py-2 px-3 md:px-7 bg-blue-500 m-2 text-white">Shop Now</button>
                </div>
                <img src={love} className="w-[100px] md:w-[200px] h-[200px] hidden md:block position relative top-[120px] -right-[250px] mt-10" />
                <img src={love2} className="w-[100px] md:w-[400px] h-[300px] hidden md:block" />
            </div>
            <div className="flex justify-center items-center content-center gap-10 mt-10">
                <p className="bg-blue-400 w-[50px] md:w-[200px] h-[2px]"></p>
                <h3 className="font-bold text-xl md:text-3xl">Featured product</h3>
                <p className="bg-blue-400 w-[50px] md:w-[200px] h-[2px]"></p>
            </div>
            <div className="flex gap-6 pt-10">
                {featruredProductsImg.slice(currentIndex, window.innerWidth >= 960 ? currentIndex + 3 : currentIndex + 1).map((item, index) => (
                    <div className="flex flex-col w-full border-2 border-gray-300 relative" key={index}>
                        <img
                            src={item.img}
                            alt={`img-${index}`}
                            style={{
                                width: "90",
                                height: "500px",
                                margin: "5px",
                                objectFit: "cover",
                            }}
                        />
                    <p className="hidden"></p>
                        <div className="absolute top-4 left-2 bg-blue-400 text-blue-100 w-[40px] h-[40px] flex justify-center items-center">
                            <BiHeart size={30} />
                        </div>
                        <div className="absolute right-10 bottom-20 bg-blue-400 text-blue-100 w-[full] p-2 flex justify-center items-center" 
                        onClick={() => handleClick(item.id)}>
                            <p>Quick View</p>
                        </div>
                        <p onClick={()=>(goTo(item.productType, item.category, item.id))}>
                        {item.name}
                        </p>
                    </div>
                ))}
            </div>
            <Btn prev={handlePrev} next={handleNext} bgColor={'bg-blue-400'} color={'text-white'} position={"flex justify-center mt-10"}/>
        </section>
    );
};
