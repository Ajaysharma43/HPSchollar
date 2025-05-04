import AboutusComponent2 from "@/app/Components/AboutusComponents/Aboutuscomponent2/aboutuscomponent2"
import AboutusHeader from "@/app/Components/AboutusComponents/AboutusHeader/AboutUsHeader"
import AboutusComponent1 from "@/app/Components/AboutusComponents/component1/component1"
import CardSlider_Homepage from "@/app/Components/Homepage_Components/CardSlider_Homepage/CardSlider_Homepage"

const Aboutus = () => {
    return (
        <>

        <article>
            <AboutusHeader/>
        </article>
        <article>
            <AboutusComponent1/>
        </article>

        <article className="w-full bg-[#F8F3DF52]">
            <AboutusComponent2/>
        </article>

        <article className="mb-[100px]">
            <CardSlider_Homepage/>
        </article>
        </>
    )
}

export default Aboutus