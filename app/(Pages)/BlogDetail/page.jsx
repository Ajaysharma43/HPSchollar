import BlogDetailHeader from "@/app/Components/BlogDetailComponents/BlogDetail/BlogDetail";
import BlogDetailBody2 from "@/app/Components/BlogDetailComponents/BlogDetailBody/BlogDetailBody";
import BlogDetailBody from "@/app/Components/BlogDetailComponents/BlogDetalBody/BlogDetailBody";
import { Suspense } from "react";

export const metadata = {
    title: "HPschollar BlogDetail",
    description: "This is an amazing page built with Next.js!",
    keywords: ["HPschollar", "Himachal history", "Metadata", "Web Development"],
  };

const BlogDetail = () => {
    return(
        <>
        <Suspense fallback={<div>loading</div>}>
        <header>
            <BlogDetailHeader/>
        </header>

        <article className="m-4 md:m-[60px] flex md:gap-10">
            <section><BlogDetailBody/></section>
            <section><BlogDetailBody2/></section>
        </article>
        </Suspense>
        </>
    )
}

export default BlogDetail;