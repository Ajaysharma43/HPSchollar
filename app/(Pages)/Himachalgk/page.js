import Component1 from "@/app/Components/HimchalGK/Compoent1"
import Component2 from "@/app/Components/HimchalGK/Component2"
import HimachalGkHeader from "@/app/Components/HimchalGK/HimchalGkHeader"
import CardSlider_Homepage from "@/app/Components/Homepage_Components/CardSlider_Homepage/CardSlider_Homepage"

export const metadata = {
    title: "HPschollar HimachalGk",
    description: "This is an amazing page built with Next.js!",
    keywords: ["HPschollar", "Himachal history", "Metadata", "Web Development"],
  };
  

const HimachalGk = () => {
    return (
        <>

            <article>
                <HimachalGkHeader />
            </article>
            <div className="max-w-[1280px] mx-auto bg-white">
                <article className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 gap-8 bg-white">
                    <section className="w-full lg:w-2/3">
                        <Component1 />
                    </section>
                    <section className="w-full lg:w-1/3">
                        <Component2 />
                    </section>
                </article>
            </div>


            <article className="mb-[50px]">
                <CardSlider_Homepage />
            </article>
        </>
    )
}

export default HimachalGk