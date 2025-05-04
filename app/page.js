import Card_Component from "@/app/Components/Homepage_Components/Aboutus_Component/page";
import HomePage_Banner from "@/app/Components/Homepage_Components/Banner_Homepage/page";
import Blog_Component from "@/app/Components/Homepage_Components/Blog_Component/Blog_Component";
import Cards_Component from "@/app/Components/Homepage_Components/Cards_Component/page";
import CardSlider_Homepage from "@/app/Components/Homepage_Components/CardSlider_Homepage/CardSlider_Homepage";
import DemoSession_Homepage from "@/app/Components/Homepage_Components/DemoSession_Homepage/DemoSession_Homepage";
import Homapage_AboutUs from "@/app/Components/Homepage_Components/Homepage_Aboutus/page";
import Homapage_Slider from "@/app/Components/Homepage_Components/Homepage_Slider/page";
import JobSessions_Component from "@/app/Components/Homepage_Components/JobSessions_Component/page";
import Paper_Component from "@/app/Components/Homepage_Components/Paper_Components/page";
import Subscription_Homepage from "@/app/Components/Homepage_Components/Subscription_Homepagee/page";

export const metadata = {
  title: "HPschollar Homapage",
  description: "This is an amazing page built with Next.js!",
  keywords: ["HPschollar", "Himachal history", "Metadata", "Web Development"],
};

const Homapage = () => {
  
  return (
    <>
      <article className="mb-6">
        <Homapage_Slider />
      </article>

      <article className="flex justify-center ml-3 mr-3 mb-6">
        <Cards_Component />
      </article>

      <article className="mb-6">
        <Homapage_AboutUs />
      </article>

      <article className="md:mt-[150px] md:bottom-0 relative bottom-[100px] mb-6">
        <Card_Component />
      </article>

      <article className="md:mt-[100px] bg-[#F7F7F7] grid justify-center">
        <Paper_Component/>
      </article>

      <article>
        <JobSessions_Component/>
      </article>

      <article>
        <HomePage_Banner/>
      </article>

      <article>
        <Subscription_Homepage/>
      </article>

      <article className="bg-[#D9D9D9] w-full pt-[100px] pb-[100px]">
        <CardSlider_Homepage/>
      </article>

      <article className="pt-[100px] pb-[100px]">
        <Blog_Component/>
      </article>

      <article>
        <DemoSession_Homepage/>
      </article>

      
    </>
  );
};

export default Homapage;