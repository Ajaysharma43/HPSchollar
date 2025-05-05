import HpQuizComponent1 from "@/app/Components/HpQuizComponents/HpQuizComponent1"
import HpQuizHeader from "@/app/Components/HpQuizComponents/HpQuizHeader"

export const metadata = {
    title: "HPschollar HpQuiz",
    description: "This is an amazing page built with Next.js!",
    keywords: ["HPschollar", "Himachal history", "Metadata", "Web Development"],
  };
  

const HpQuiz = () => {
    return (
        <>
        <article>
            <HpQuizHeader/>
        </article>

        <HpQuizComponent1/>
        </>
    )
}

export default HpQuiz