import { useState } from "react";
import { Btn } from "./utils/btn";
import carousel from '../asset/images1/carousel1.webp'
import carouse2 from '../asset/images1/hats3.webp'
import carouse3 from '../asset/images1/carousel66.webp'
import carouse4 from '../asset/images1/carousel3.webp'
import carouse1l from '../asset/images1/carousel99.webp'

export const SecondCarousel = ()=>{
    const Images =
    [
        {
            img:carousel,
            text:'My shoe'
        },
        {
            img:carouse2,
            text:'My cloth'
        },
        {
            img:carouse3,
            text:'designers'
        },
        {
            img:carouse4,
            text:'cardigans'
        },
        {
            img:carouse1l,
            text:'hats'
        },

    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle 'Next' button click
    const handleNext = () => {
      if (window.innerWidth >= 960 && currentIndex + 3 === Images.length || window.innerWidth <= 959 && currentIndex +1 === Images.length) {
       // alert(window.innerWidth)
       setCurrentIndex(0);

      }else{
        setCurrentIndex(currentIndex + 1);
      }
    };
    // Function to handle 'Prev' button click
    const handlePrev = () => {
      if (window.innerWidth >= 960 && currentIndex + 3 === 3 || window.innerWidth <= 959 && currentIndex + 1 === 1 ) {
        setCurrentIndex(currentIndex +2 );
      }else{
        setCurrentIndex(currentIndex - 1);
      }
    }

    return(
    

        <section className="bg-blue-200 text-black/95 p-2 pt-10 md:p-[20px] lg:p-[60px] h-[800px] md:h-[600px] flex flex-col md:flex-row justify-between gap-10 overflow-hidden pb-10">
            <div className="">
                <h3 className="font-bold text-2xl">Trending Fashion</h3>
                <p>Discover the essence of timeless fashion with our best selling collection, taillored to empower modern women </p>
                <Btn prev={handlePrev} next ={handleNext} border ={'border-2 border-blue-300'} color={'text-black'} position={'md:ml-10 absolute md:left-0 right-0 mt-10'}/>
            </div>
            <div className="flex gap-6">
        {Images.slice(currentIndex, window.innerWidth >= 960 ? currentIndex + 3: currentIndex + 1).map((img, index) => (
            <div className="flex flex-col w-full " key={index}>
                 <img
                   src={img.img}
                   alt={`img-${index}`}
                   style={{
                      width: "600px",
                      height: "500px",
                      margin: "5px",
                      objectFit: "cover",
                }}
          />
          <p>{img.text}</p>
           </div>
        ))}
           
         
      </div>
        </section>  

    )
}