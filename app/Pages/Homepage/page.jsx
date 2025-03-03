import Cards_Component from "@/app/Components/Homepage_Components/Cards_Component/page"
import Homapage_Slider from "@/app/Components/Homepage_Components/Homepage_Slider/page"

const Homapage = () => {
    return(
        <>
        <article>
            <Homapage_Slider/>
        </article>

        <article className="flex justify-center ml-3 mr-3">
            <Cards_Component/>
        </article>

        <article>
            
        </article>
        </>
    )
}

export default Homapage