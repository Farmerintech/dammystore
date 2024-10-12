import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
export const Btn =({bgColor, color, next, prev, position, btnPos, border})=>{
    return(
        <div>
            <div className={`ml-2 mr-2 flex justfify-left gap-5 ${position}`}>
                <button className={`p-2 relative ${btnPos} font-bold ${bgColor} ${color} ${border}` } onClick={prev}>
                    <BiChevronLeft size={30}/>
                </button>
                <button className={` p-2 relative ${btnPos} font-bold ${bgColor} ${color} ${border}`} onClick={next}> 

                    <BiChevronRight size={30}/>
                </button>
            </div>
        </div>

    )
}