import TestSeriesComponent1 from "@/app/Components/TestSeriesComponent/TestSeriesComponent1"
import TestSeriesComponent2 from "@/app/Components/TestSeriesComponent/TestSeriesComponent2"
import TestSeriesHeader from "@/app/Components/TestSeriesComponent/TestSeriesHeader"

export const metadata = {
    title: "HPschollar TestSeries",
    description: "This is an amazing page built with Next.js!",
    keywords: ["HPschollar", "Himachal history", "Metadata", "Web Development"],
  };
  

const TestSeries = () => {
    return (
        <>

        <article>
            <TestSeriesHeader/>
        </article>
        <article className="flex flex-wrap justify-center mt-[40px] mb-[40px]">
            <section>
                <TestSeriesComponent1/>
            </section>

            <section>
                <TestSeriesComponent2/>
            </section>
        </article>
        </>
    )
}

export default TestSeries