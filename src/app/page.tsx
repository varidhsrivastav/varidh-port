import TechGrid from "@/components/Skills";
import { HyperText } from "@/components/magicui/hyper-text";
import { Project } from "@/utils/types";
import {
  ArrowBigDown,
  ArrowRight,
  ChevronRight,
  Heart,
  MoveUpRight,
} from "lucide-react";
import projectData from "@/api/project.json";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Testimonials from "@/components/testimonial";
import { DragCards } from "@/components/about-me";
import { About } from "@/components/about";

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
            {/* <HyperText>&#123;Varidh Srivastav &#125;</HyperText> */}
            <HyperText> &#123; Varidh Srivastav &#125;</HyperText>
          </span>
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] max-w-[700px] text-center leading-[28px] sm:leading-[30px] md:leading-[32px] font-display">
          Web developer specializing in Next.js, React, and scalable system
          design, crafting high-performance applications with seamless backend
          integration.
        </p>
      </div>

      {/* /about */}
      <div className="py-[64px] sm:py-[80px] md:py-[96px] min-h-screen flex flex-col gap-6 sm:gap-16 text-center">
        <span className="text-[36px] sm:text-[44px] md:text-[52px] font-medium text-white leading-[44px] sm:leading-[56px] md:leading-[64px] font-display">
          All about me
        </span>
        <div className="">
          <About />
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
                    <>
                      <Link
                        href={`/projects/${project.id}`}
                        key={project.id}
                        className="relative text-[24px] sm:text-[28px] md:text-[32px] font-medium text-white leading-[32px] sm:leading-[36px] md:leading-[40px] font-display  group flex flex-col rounded-[4px] border-[1px] border-[#1B3B57] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px]"
                      >
                        <div className="w-full rounded-t-[4px]  h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300">
                          <Image
                            src={project.coverImage}
                            alt="shoes"
                            width={600}
                            height={600}
                            className="h-full w-full  scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300"
                          />
                        </div>
                        <article className="relative overflow-hidden  flex-grow">
                          <div className="info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
                            <p className="md:text-2xl font-semibold">
                              {project.title}
                            </p>
                            <p className="sm:text-base text-sm">
                              {project.subtitle}
                            </p>
                          </div>
                          <button className="absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3  text-3xl font-medium transition-all duration-300 w-full text-center">
                            {project.title}
                          </button>
                        </article>
                      </Link>
                    </>
                  ) : null,
                )}
            </div>

            {/* Second Column */}
            <div className="md:pt-16 flex flex-col gap-8">
              {projects
                .filter((_, index) => index % 2 !== 0)
                .map((project) =>
                  project.features ? (
                    <>
                      <Link
                        href={`/projects/${project.id}`}
                        key={project.id}
                        className="relative text-[24px] sm:text-[28px] md:text-[32px] font-medium text-white leading-[32px] sm:leading-[36px] md:leading-[40px] font-display  group flex flex-col rounded-[4px] border-[1px] border-[#1B3B57] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px]"
                      >
                        <div className="w-full rounded-t-[4px]  h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300">
                          <Image
                            src={project.coverImage}
                            alt="shoes"
                            width={600}
                            height={600}
                            className="h-full w-full   scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300"
                          />
                        </div>
                        <article className="relative overflow-hidden  flex-grow">
                          <div className="info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
                            <p className="md:text-2xl font-semibold">
                              {project.title}
                            </p>
                            <p className="sm:text-base text-sm">
                              {project.subtitle}
                            </p>
                          </div>
                          <button className="absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3  text-3xl font-medium transition-all duration-300 w-full text-center">
                            {project.title}
                          </button>
                        </article>
                      </Link>
                    </>
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
