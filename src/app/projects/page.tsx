import Footer from "@/components/footer";
import Image from "next/image";
import { Project } from "@/utils/types";
import projectData from "@/api/project.json";
import Link from "next/link";
import Testimonials from "@/components/testimonial";
// @ts-ignore
const projects: Project[] = projectData;
export default function Projects() {
  return (
    <>
      <div className="px-2 md:px-[112px]">
        <div className="min-h-[100svh] flex flex-col justify-center items-center gap-6 ">
          <h1 className="text-[48px] md:text-[64px] leading-[56px] md:leading-[80px] font-display text-center font-semibold">
            A collection of my <br />
            <span className="text-[48px] md:text-[64px] text-[#3899E8] leading-[56px] md:leading-[80px] font-display text-center font-semibold">
              {"{"}Best projects{"}"}
            </span>
          </h1>
          <p className="text-[18px] md:text-[20px] max-w-[700px] text-center leading-[28px] md:leading-[32px] font-display">
            With many years in web development, I acquired extensive experience
            working on projects across multiple industries and technologies. Let
            me show you my best creations.
          </p>
        </div>

        <div className="py-24">
          <div className="text-[52px] font-medium text-white leading-[64px] text-center font-dmono">
            Selected works
          </div>

          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Column */}
              <div className="flex flex-col gap-8">
                {projects
                  .filter((_, index) => index % 2 === 0)
                  .map((project) =>
                    project ? (
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
                    project ? (
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
            </div>
          </div>
        </div>

        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
