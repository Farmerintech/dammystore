
import { FirstCarousel } from "../frstcarousel"
import { SecondCarousel } from "../secondCarousel"
import { FeaturedProducts } from "../featuredProduct"

export const Home =()=>{    
    return(
       <section>
        <FirstCarousel/>
        <SecondCarousel/>
        <FeaturedProducts/>
       </section>
    )
}