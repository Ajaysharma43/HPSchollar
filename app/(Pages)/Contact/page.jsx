import Contact_Body from "@/app/Components/Contact_Components/Contact_body/Contact_body";
import ContactHeader from "@/app/Components/Contact_Components/Contact_Header/Contact_Header";

const Contact = () => {
    return(
        <>
        <header>
            <ContactHeader/>
        </header>

        <article className="mt-[50px] mb-[50px]">
            <Contact_Body/>
        </article>
        </>
    )
}

export default Contact;