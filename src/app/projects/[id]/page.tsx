"use client";
import Footer from "@/components/footer";
import Image from "next/image";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Project } from "@/utils/types";
import projectData from "@/api/project.json";
import Link from "next/link";
import TechUsed from "@/components/tech-used";
import { ParallaxBanner } from "react-scroll-parallax";
// @ts-ignore
const projects: Project[] = projectData;
import { ParallaxProvider } from 'react-scroll-parallax';
export default function ProjectDesc() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const id = parseInt(segments[segments.length - 1], 10);
  const project = projects.find((p) => p.id === id);

  const projectIndex = projects.findIndex((project) => project.id === id);
  const nextProject =
    projectIndex + 1 < projects.length ? projects[projectIndex + 1] : null;
  const previousProject =
    projectIndex - 1 >= 0 ? projects[projectIndex - 1] : null;

  if (!project) return <div>Project not found</div>;
  return (
    <>
    <ParallaxProvider>
      <div className="mx-2 md:mx-[112px] overflow-hidden">
        {/* intro */}
        <div className="mt-24 md:mt-36 mb-32">
          <h1 className="text-[48px] md:text-[64px] text-center font-dmono">
            {project.title}
          </h1>
          <h2 className="text-[18px] md:text-[20px] font-display text-center font-normal leading-[28px] md:leading-[32px]">
            {project.subtitle}
          </h2>
          <div className="mt-8 border border-blue-900 bg-[rgba(42,65,85,0.20)] backdrop-blur-lg p-3 md:p-8 rounded-lg">
            {/* <Image
              src={project.coverImage}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-full rounded-lg"
            /> */}
             <ParallaxBanner
            layers={[
              {
                image: project.coverImage,
                speed: -20,
                expanded: false,
                className: "w-full h-full ",
              },
            ]}
            className="aspect-[2/1.2] h-[300px] rounded-[24px] w-full md:w-[1240px] md:h-[620px]"
          />
          </div>
        </div>
        {/* project details */}
        <div className="flex flex-col pb-24 gap-8">
          {/* Overview and Project Details Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Overview Section */}
            <div className="md:w-2/3 flex flex-col gap-4">
              <h2 className="text-2xl md:text-[32px] leading-[40px] font-dmono font-medium">
                Overview
              </h2>
              <p className="mt-2 text-lg md:text-[20px] leading-[32px] font-normal font-dmono">
                {project.description}
              </p>
            </div>

            {/* Project Type & Functionalities Section */}
            <div className="md:w-1/3 flex flex-col gap-8">
              {/* Project Type */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-[32px] leading-[40px] font-dmono font-medium">
                  Project type
                </h2>
                <ul className="list-disc pl-6 text-lg md:text-[20px] leading-[32px] font-normal font-dmono">
                  <li>{project.projectType}</li>
                </ul>
              </div>

              {/* Functionalities */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-[32px] leading-[40px] font-dmono font-medium">
                  Functionalities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {project.functionality.map((func, index) => (
                    <span
                      className="flex items-center justify-center rounded-full border border-[#1B3B57] px-3 py-1 text-[14px] leading-[20px] font-dmono text-center"
                      key={index}
                    >
                      {func}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Visit Website Button */}
          <div>
            <Link
              href={project.links.repo}
              className="border border-[#3C454D] rounded-md py-2 px-4 text-[16px] leading-[24px] text-white font-dmono inline-block"
            >
              Visit Website
            </Link>
          </div>
        </div>

        {/* tools and technologies */}
        <div className="py-24 md:py-32">
          <div className="flex flex-col gap-16 justify-center items-center">
            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl font-medium max-w-[960px] text-white leading-[64px] text-center font-dmono">
              Tools and skills used in this project
            </h2>

            {/* Technologies Used */}
            {project.techUsed?.length > 0 ? (
              <TechUsed technologies={project.techUsed} />
            ) : (
              <p className="text-lg text-gray-400 font-dmono">
                No technologies listed.
              </p>
            )}
          </div>
        </div>

        {/* photos */}
        <div className="py-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
            {/* First Column */}
            <div className="flex flex-col gap-2 md:gap-8">
              {project.images
                .filter((_, index) => index % 2 === 0)
                .map((image) => (
                  <div key={image}>
                    <div className="mt-2 md:mt-8 border bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] border-[#1B3B57] p-2 sm:p-8 rounded-[4px]">
                      
                      <Image
                        src={image}
                        alt={image}
                        width={1000}
                        height={1000}
                        className="w-full max-w-full rounded-[4px] h-auto"
                      />
                    </div>
                  </div>
                ))}
            </div>

            {/* Second Column */}
            <div className="md:pt-16 flex flex-col gap-2 md:gap-8">
              {project.images
                .filter((_, index) => index % 2 !== 0)
                .map((image) => (
                  <div key={image}>
                    <div className="mt-2 md:mt-8 border bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] border-[#1B3B57] p-2 md:p-6 sm:p-8 rounded-[4px]">
                      <Image
                        src={image}
                        alt={image}
                        width={1000}
                        height={1000}
                        className="w-full max-w-full rounded-[4px] h-auto"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* testimonials */}
        {/* <div className="py-[96px] flex flex-col gap-16 ">
          <div className="text-[52px] text-white font-medium text-wite leading-[64px] text-center font-dmono">
            Kind word from <span className="text-[#3899E8]">Satisfied</span>{" "}
            clients
          </div>
          <div className="justify-center items-center flex">
            <div className="w-[776px] h-[260px] flex flex-col gap-8 justify-center items-center border border-[#1B3B57] rounded-[4px] bg-[rgba(42,65,85,0.20)] p-8">
              <p>
                Collaborating with John was an absolute pleasure. His
                professionalism, promptness, and dedication to delivering
                exceptional results were evident throughout our project. John
                &apos;s enthusiasm for every facet of development truly stands
                out. If you &apos;re seeking to elevate your website and elevate
                your brand, John is the ideal partner.
              </p>
              <div className=" w-full">
                <div className="flex flex-row gap-2">
                  <div className="w-[44px] h-[44px] rounded-full border-2 border-white"></div>
                  <div className="flex flex-col">
                    <p>name</p>
                    <p>title</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="pt-24 px-4 sm:px-8">
          <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
            <div className="text-[42px] sm:text-[52px] font-medium max-w-[960px] text-white leading-[54px] sm:leading-[64px] text-center font-dmono">
              More Projects
            </div>
          </div>
          <section className="relative gap-10 items-start py-16 flex flex-col md:flex-row justify-center md:justify-between">
            {/* Previous Project Link */}
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.id}`}
                className="flex flex-1 flex-col text-gray-800 dark:text-gray-300 gap-6 aspect-square"
              >
                <Image
                  src={previousProject.coverImage}
                  alt={previousProject.title}
                  width={580}
                  height={300}
                  className="w-full h-[300px] sm:h-[400px] md:h-[444px] object-cover rounded-lg"
                />
                <div>
                  <h1 className="text-[20px] sm:text-[24px] md:text-[32px] font-Manrope leading-[28px] sm:leading-[32px] md:leading-[40px] font-semibold text-white">
                    {previousProject.title}
                  </h1>
                </div>
              </Link>
            ) : (
              <div className="hidden md:block flex-1"></div>
            )}

            {/* Next Project Link */}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="flex flex-1 flex-col text-gray-800 dark:text-gray-300 gap-6"
              >
                <Image
                  src={nextProject.coverImage}
                  alt={nextProject.title}
                  width={580}
                  height={300}
                  className="w-full h-[300px] sm:h-[400px] md:h-[444px] object-cover rounded-lg"
                />
                <div>
                  <h1 className="text-[20px] sm:text-[24px] md:text-[32px] font-Manrope leading-[28px] sm:leading-[32px] md:leading-[40px] font-semibold text-white">
                    {nextProject.title}
                  </h1>
                </div>
              </Link>
            ) : (
              <div className="hidden md:block flex-1"></div>
            )}
          </section>
        </div>

        <Footer />
      </div>
      </ParallaxProvider>
    </>
  );
}
