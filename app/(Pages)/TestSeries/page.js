import TestSeriesComponent1 from "@/app/Components/TestSeriesComponent/TestSeriesComponent1"
import TestSeriesComponent2 from "@/app/Components/TestSeriesComponent/TestSeriesComponent2"
import TestSeriesHeader from "@/app/Components/TestSeriesComponent/TestSeriesHeader"

const TestSeries = () => {
    return (
        <>

        <article>
            <TestSeriesHeader/>
        </article>
        <article className="flex flex-wrap justify-center mt-[20px]">
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