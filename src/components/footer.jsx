import { useContext, useState } from "react"
import { BiHeart, BiHome, BiPlus, BiUser} from "react-icons/bi"
import { IoHeart } from "react-icons/io5"
import { Link } from "react-router-dom"
import { ProductContext } from "./productContext"
export const Footer =()=>{
    const{state, dispatch} = useContext(ProductContext);
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(1)
    const handleShow = (myIndex)=>{
        (!show) ?  setShow(true) :  setShow(false);
        setIndex(myIndex)
    }
    return(
        <footer className="bg-black text-white md:flex gap-10 justify-between p-10 mt-10 ">
            <nav>
                <p className="mb-5 font-bold flex justify-between"><span>Contact us</span>
                <span className="font-bold font-bold md:hidden" onClick={()=>{handleShow(1)}}><BiPlus/></span></p>
                <ul className={`md:block ${show && index ===1 ? 'block':' hidden'}`}>
                   <p className="mb-2 hover:text-blue-500"><span className="font-bold">Address:</span> 1345 Barnum Avenue Suite 281 Stratford CT</p>
                   <p className="mb-2 hover:text-blue-500"><span className="font-bold">Mob:</span> 203-545-5152</p>
                   <p className="mb-2 hover:text-blue-500"><span className="font-bold">Email:</span> taydiane57@gmail.com</p>
                </ul>
                
            </nav>
            <nav>
                <p className="mb-5 font-bold flex justify-between"><span>Quick link</span>
                <span className="font-bold font-bold md:hidden" onClick={()=>{handleShow(2)}}><BiPlus/></span></p>
                <ul className={`md:block ${show && index===2 ? 'block':' hidden'}`}>
                    <li className="mb-2 hover:text-blue-500">Home</li>
                    <li className="mb-2 hover:text-blue-500">Search</li>
                    <li className="mb-2 hover:text-blue-500">Contact us</li>
                    <li className="mb-2 hover:text-blue-500">Do not sell or share my personal information</li>
                </ul>
            </nav>
            <nav>
                <p className="mb-5 font-bold flex justify-between"><span>Our Catalogue</span>
                <span className="font-bold font-bold md:hidden" onClick={()=>{handleShow(3)}}><BiPlus/></span></p>
                <ul className={`md:block ${show && index ===3 ? 'block':' hidden'}`}>
                    <li className="mb-2 hover:text-blue-500">Shop all</li>
                    <li className="mb-2 hover:text-blue-500">Featured products</li>
                    <li className="mb-2 hover:text-blue-500">About us</li>
                </ul>
            </nav>
            <nav>
                <p className="mb-5 font-bold">Subscribe to our emails
                </p>
                <div className="flex flex-col gap-5 mb-2">
                    <input placeholder='Email' type='email' className="bg-white text-black p-3 w-[300px] outline-0"/>
                </div>
                <div>
                    <button className="px-5 py-2 bg-gray-400 text-black ">Submit</button>
                </div>
            </nav>
        </footer>
            )
}