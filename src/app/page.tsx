import TechGrid from "@/components/Skills";
import { Project } from "@/utils/types";
import projectData from "@/api/project.json";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Testimonials from "@/components/testimonial";
import { DragCards } from "@/components/about-me";
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
// @ts-ignore
const projects: Project[] = projectData;
export default function Home() {
  return (
    <div className="px-3 md:px-[112px]">
      {/* intor */}
      <div className="min-h-screen flex flex-col justify-center items-center gap-2 px-4">
        <h1 className="text-[40px] sm:text-[48px] md:text-[64px] leading-[50px] sm:leading-[64px] md:leading-[80px] font-display text-center font-semibold">
          Hello World! My name is <br />
          <span className="text-[40px] sm:text-[48px] md:text-[64px] text-[#3899E8] leading-[50px] sm:leading-[64px] md:leading-[80px] font-display text-center font-semibold">
            {"{"}Varidh Srivastav{"}"}
          </span>
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] max-w-[700px] text-center leading-[28px] sm:leading-[30px] md:leading-[32px] font-display">
          Circle is a development platform that gives innovators the speed and
          reliability they need to create at the speed of inspiration.
        </p>
      </div>

      {/* /about */}
      <div className="pt-[64px] sm:pt-[80px] md:pt-[96px] min-h-screen flex flex-col gap-6 sm:gap-8 text-center">
        <span className="text-[36px] sm:text-[44px] md:text-[52px] font-medium text-white leading-[44px] sm:leading-[56px] md:leading-[64px] font-display">
          All about me
        </span>
        <div className="md:hidden flex flex-col gap-3">
          {" "}
          {/* card 1 */}
          <div className="rounded-[4px] border-[1px] border-[#1B3B57] max-w-[100%] min-w-[90%] md:max-w-[588px] md:min-w-[588px] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] p-6 md:p-8">
            <Image
              src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1741634245/test_mgg6tr.png"
              alt="Image Description"
              width={528}
              height={392}
              className="w-full max-h-[280px] md:max-h-[392px]"
            />
          </div>
          {/* card 2 */}
          <div className="max-w-[90%] min-w-[100%] md:max-w-[588px] md:min-w-[588px] rounded-[4px] border-[1px] border-[#1B3B57] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] p-6 md:p-8">
            <div className="text-white flex flex-col gap-6">
              <div className="text-left text-[#E2E4E9] font-display text-[20px] md:text-[23px] font-medium leading-[28px]">
                Work Experience
              </div>
              <div className="flex text-white gap-4 flex-col">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="text-left">
                    <div className="font-display text-[18px] md:text-[23px] leading-[26px] md:leading-[28px] font-normal">
                      Job Title
                    </div>
                    <div className="font-display text-[14px] md:text-[16px] font-normal leading-[24px]">
                      Company Name (Year - Year)
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>{" "}
          {/* card 3 */}
          <div className="rounded-[4px] border-[1px] border-[#1B3B57] max-w-[100%] min-w-[90%] md:max-w-[588px] md:min-w-[588px] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] p-6 md:p-8">
            <div className="text-white flex flex-col gap-2">
              <div className="text-left text-[#E2E4E9] font-display text-[20px] md:text-[23px] font-medium leading-[28px]">
                Bio
              </div>
              <div className="font-display text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-left">
                Led the design and implementation of scalable system
                architectures, managing a team of 8-10 developers using Next.js,
                Tailwind, and FastAPI. Managed project completion and task
                organization using Jira, improving workflow efficiency.
              </div>
            </div>
          </div>
          {/* Card 4 - Something */}
          <div className="rounded-[4px] border-[1px] border-[#1B3B57] max-w-[100%] min-w-[90%] md:max-w-[588px] md:min-w-[588px] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] p-6 md:p-8">
            <div className="text-white flex flex-col gap-4">
              <div className="text-left text-[#E2E4E9] font-display text-[20px] md:text-[23px] font-medium leading-[28px]">
                Something
              </div>
              <div className="font-display text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-left">
                Led the design and implementation of scalable system
                architectures, managing a team of 8-10 developers.
              </div>
            </div>
          </div>
          <div className="rounded-[4px] border-[1px] border-[#1B3B57] max-w-[100%] min-w-[90%] md:max-w-[588px] md:min-w-[588px] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] p-6 md:p-8">
            <div className="text-white flex flex-col gap-2">
              <div className="text-left text-[#E2E4E9] font-display text-[20px] md:text-[23px] font-medium leading-[28px]">
                Hobbies
              </div>
              <div className="font-display text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-left">
                Led the design and implementation of scalable system
                architectures, managing a team of 8-10 developers.
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <DragCards />
        </div>
      </div>

      {/* selected works */}
      <div className="min-h-screen py-24 ">
        <div className="text-[36px] sm:text-[44px] md:text-[52px] font-medium text-white leading-[44px] sm:leading-[56px] md:leading-[64px] text-center font-dmono">
          Selected works
        </div>
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column */}
            <div className="flex flex-col gap-8">
              {projects
                .filter((_, index) => index % 2 === 0)
                .map((project) =>
                  project.features ? (
                    <div key={project.id}>
                      <Link
                        href={`/projects/${project.id}`}
                        className="relative text-[24px] sm:text-[28px] md:text-[32px] font-medium text-white leading-[32px] sm:leading-[36px] md:leading-[40px] font-display"
                      >
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          width={1000}
                          height={1000}
                          className="w-full rounded-[4px] h-auto"
                        />
                        <div className="py-2 px-4 absolute bottom-0 left-0 right-0 text-[14px] sm:text-[16px] max-w-[700px] leading-[22px] sm:leading-[24px] font-display bg-black bg-opacity-50">
                          {project.title} - {project.subtitle}
                        </div>
                      </Link>
                    </div>
                  ) : null,
                )}
            </div>

            {/* Second Column */}
            <div className="md:pt-16 flex flex-col gap-8">
              {projects
                .filter((_, index) => index % 2 !== 0)
                .map((project) =>
                  project.features ? (
                    <div key={project.id}>
                      <Link
                        href={`/projects/${project.id}`}
                        className="relative text-[24px] sm:text-[28px] md:text-[32px] font-medium text-white leading-[32px] sm:leading-[36px] md:leading-[40px] font-display"
                      >
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          width={1000}
                          height={1000}
                          className="w-full rounded-[4px] h-auto"
                        />
                        <div className="py-2 px-4 absolute bottom-0 left-0 right-0 text-[14px] sm:text-[16px] max-w-[700px] leading-[22px] sm:leading-[24px] font-display bg-black bg-opacity-50">
                          {project.title} - {project.subtitle}
                        </div>
                      </Link>
                    </div>
                  ) : null,
                )}
            </div>
          </div>
        </div>
      </div>
      {/* tools and skills */}
      <div className="py-16  flex flex-col gap-12 sm:gap-16">
        <div className="text-[36px] sm:text-[44px] md:text-[52px] font-medium text-white leading-[44px] sm:leading-[56px] md:leading-[64px] text-center font-dmono">
          Tools and Skills I know
        </div>
        {/* TechGrid */}
        <div>
          <TechGrid />
        </div>
      </div>
      {/* testimonials */}
      <Testimonials />
      <Footer />
    </div>
  );
}
