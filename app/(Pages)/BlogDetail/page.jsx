import BlogDetailHeader from "@/app/Components/BlogDetailComponents/BlogDetail/BlogDetail";
import BlogDetailBody from "@/app/Components/BlogDetailComponents/BlogDetalBody/BlogDetailBody";

const BlogDetail = () => {
    return(
        <>
        <header>
            <BlogDetailHeader/>
        </header>

        <article className="m-[60px]">
            <section><BlogDetailBody/></section>
            <section></section>
        </article>
        </>
    )
}

export default BlogDetail;