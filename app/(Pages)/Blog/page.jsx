import Blog_Body from "@/app/Components/Blog_Components/Blog_Body/Blog_Body"
import Blog_Header from "@/app/Components/Blog_Components/Blog_header/Blog_header"

const Blog = () => {
    return(
        <>
        <article>
            <Blog_Header/>
        </article>

        <article className="pt-[100px] pb-[100px]">
            <Blog_Body/>
        </article>
        </>
    )
}

export default Blog