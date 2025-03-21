import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Divyankit Singh",
    designation: "Director at Dezainahub",
    src: "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742234290/logos_typescript-icon_jgwkp1.png",
  },
  {
    quote:
      "Varidh's technical skills and leadership abilities are outstanding. He not only develops robust applications but also mentors teams, ensuring smooth project execution with top-notch code quality.",
    name: "Sorabh Jain",
    designation: "Director at Sarvmatre pvt int ltd.",
    src: "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742548368/sorabh_s9v8qn.jpg",
  },
];
export default function Testimonials() {
  return (
    <>
      <div className="py-[64px] sm:py-[80px] md:py-[96px]">
        <div className="text-[36px] sm:text-[44px] md:text-[52px] text-white font-medium leading-[44px] sm:leading-[56px] md:leading-[64px] text-center font-dmono">
          Kind words from <span className="text-[#3899E8]">Satisfied</span>{" "}
          clients
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </>
  );
}
// {
//   quote:
//     "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//   name: "Jai Gupta",
//   designation: "Director at Rablo.in",
//   src: "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742234290/logos_typescript-icon_jgwkp1.png",
// },
