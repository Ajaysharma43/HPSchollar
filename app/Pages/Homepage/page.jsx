import Cards_Component from "@/app/Components/Homepage_Components/Cards_Component/page"
import Homapage_Slider from "@/app/Components/Homepage_Components/Homepage_Slider/page"

const Homapage = () => {
    return(
        <>
        <article>
            <Homapage_Slider/>
        </article>

        <article className="flex justify-center">
            <Cards_Component/>
        </article>
        </>
    )
}

export default Homapage