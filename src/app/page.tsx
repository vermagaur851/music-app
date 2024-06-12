import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import "./globals.css";
import UpComingWebinars from "@/components/UpComingWebinars";
import Instructor from "@/components/Instructor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.04]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpComingWebinars/>
      <Instructor/>
    </main>
  );
}
