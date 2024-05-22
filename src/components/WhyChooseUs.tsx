"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expert Instructors",
    description:
      "Our courses are taught by experienced professionals who are passionate about music and dedicated to helping you succeed.",
  },
  {
    title: "Flexible Learning",
    description:
      "Learn at your own pace. Whether you're a beginner or an advanced musician, our courses adapt to your schedule and preferences.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "From theory to performance, our courses cover a wide range of topics, ensuring a holistic learning experience.",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with fellow students, participate in live sessions, and get personalized feedback from instructors.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Quality music education shouldn't break the bank. Our courses offer great value at competitive prices.",
  },
];

function WhyChooseUs() {
  return <div>
    <StickyScroll content={content}/>
  </div>;
}

export default WhyChooseUs;
