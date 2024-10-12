import { useState } from "react";
import { Btn } from "./utils/btn";
export const FirstCarousel =()=>{
    const [current, setCurrent] = useState(1);
    let [current2, setCurrent2] = useState(1)
    const NextPrev =()=>{
        current === 1 ? setCurrent(2) : setCurrent(1)
    }
    const NextPrevTwo =()=>{
        current2 >= 1 ? setCurrent2(current2+1) : current2 === 4 ? setCurrent2(1) : setCurrent2(1)
    }
    return(
        <div>
         <div className="carousel">
            <div className={`w-full flex justify-center relative flex gap-6 bg-[url('./asset/images1/hero3.jpg')] h-[500px] md:h-[500px] bg-cover bg-center ${current ===1 ? 'block' : 'hidden'}`}>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <p className="font-bold text-3xl">Stay Warm</p>
                    <button className="bg-blue-500 text-white p-2">Shop Now</button>
                </div>
            </div>
            <div className={`w-full flex justify-center relative flex gap-6 bg-[url('./asset/images1/hero2.jpg')] h-[500px] md:h-[500px] bg-cover bg-center ${current ===2 ? 'block' : 'hidden'}`}>
                <div className="flex  flex-col gap-2 justify-center items-center">
                    <p className="font-bold">Stay warm</p>
                    <button className="bg-blue-500 text-white p-2">Shop Now</button>
                </div>
            </div>
        </div>
        <Btn prev={NextPrev} next ={NextPrev} bgColor={'bg-blue-500'} color={'text-white'} position={'absolute md:right-0'} btnPos = {'-top-5'}/>
        
        </div>
    )
}