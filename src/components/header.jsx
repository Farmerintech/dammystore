import { IoSearch, IoShirt, IoBag} from "react-icons/io5"
import { Nav } from "./nav"

export const Header =()=>{
    return(
        <header className="hidden">
            <Nav/>
            <div className="md:flex justify-between items-center content-center md:m-5 pt-10">
                <div className="flex justify-between items-center content-center gap-5 border rounded-full p-2 m-2">
                    <div className="flex justify-center items-center gap-2"><IoSearch size={20}/><input type="text" placeholder="search" className="lg:w-[500px] outline-none" /></div>
                    <span className="text-gray-100">|</span><span className="text-[10px]">for men</span>
                </div>
                <div className="flex justify-center lg:flex-wrap md:gap-5 m-3 gap-2">
                <button className="w-[90px] h-[30px] text-white rounded-full bg-blue-700 flex justify-center items-center"><IoShirt/> T-shirt</button>
                <button className="w-[90px] h-[30px] text-black rounded-full  bg-stone-50 flex justify-center items-center">Shirt</button>
                <button className="w-[90px] h-[30px] text-black rounded-full  bg-stone-50 flex justify-center items-center">Jeans</button>
                <button className="w-[90px] h-[30px] text-black rounded-full  bg-stone-50 flex justify-center items-center">Hodies</button>
            </div>
            </div>
        </header>
    )
}