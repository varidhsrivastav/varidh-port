import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742234290/logos_typescript-icon_jgwkp1.png",
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742234290/logos_typescript-icon_jgwkp1.png",
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://res.cloudinary.com/dsalsyu0z/image/upload/v1742234290/logos_typescript-icon_jgwkp1.png",
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
