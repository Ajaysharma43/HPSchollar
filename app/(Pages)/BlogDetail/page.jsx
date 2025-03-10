import BlogDetailHeader from "@/app/Components/BlogDetailComponents/BlogDetail/BlogDetail";
import BlogDetailBody2 from "@/app/Components/BlogDetailComponents/BlogDetailBody/BlogDetailBody";
import BlogDetailBody from "@/app/Components/BlogDetailComponents/BlogDetalBody/BlogDetailBody";

const BlogDetail = () => {
    return(
        <>
        <header>
            <BlogDetailHeader/>
        </header>

        <article className="m-[60px] flex gap-10">
            <section><BlogDetailBody/></section>
            <section><BlogDetailBody2/></section>
        </article>
        </>
    )
}

export default BlogDetail;