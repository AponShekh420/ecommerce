import CatagorySection from "@/components/pages/home/catagory/CatagorySection";
import SlideSection from "@/components/pages/home/slider/SlideSection";
import CoursesSlider from "../components/pages/home/coursesSlider/CoursesSlider";
import ProductSlider from "@/components/pages/home/productSlider/ProductSlider";
import Testimonials from "@/components/pages/home/testimonials/Testimonials";
import UpcomingCourses from "@/components/pages/home/upcomingCourse/UpcomingCourses";
import Services from "@/components/pages/home/services/Services";
import UltimateRelationship from "@/components/pages/home/ultimateRelationship/UltimateRelationship";
import WelcomeSection from "@/components/pages/home/welcome/WelcomeSection";
import UpcommingScheduleSection from "@/components/pages/home/upcomming/UpcommingScheduleSection";
import TakeChargeSection from "@/components/pages/home/takeCharge/TakeChargeSection";

export const metadata = {
  title: "Ohel Miriam | Online Shop",
  description: "Everybody could order from Ohel Miriam easly"
}


export default function Home() {
  return (
    <div className="w-full flex flex-col gap-y-10">
      <SlideSection/>
      <WelcomeSection/>
      <CatagorySection/>
      <UpcommingScheduleSection/>
      <CoursesSlider/>
      <ProductSlider/>
      <Testimonials/>
      <UpcomingCourses/>
      <Services/>
      <UltimateRelationship/>
      <TakeChargeSection/>
    </div>
  );
}
