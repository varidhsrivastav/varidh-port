import Footer from "@/components/footer";
import Image from "next/image";
import { Project } from "@/utils/types";
import projectData from "@/api/project.json";
import Link from "next/link";
import Testimonials from "@/components/testimonial";

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
                      <div key={project.id}>
                        <Link
                          href={`/projects/${project.id}`}
                          className="relative text-[32px] font-medium text-white leading-[40px] font-display"
                        >
                          <Image
                            src={project.coverImage}
                            alt={project.title}
                            width={1000}
                            height={1000}
                            className="w-full rounded-[4px] aspect-[16/9] object-cover"
                          />
                          <div className="py-2 px-4 absolute bottom-0 left-0 right-0 text-[16px] bg-black/50 text-white max-w-[700px] leading-[24px] font-display">
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
                    project ? (
                      <div key={project.id}>
                        <Link
                          href={`/projects/${project.id}`}
                          className="relative text-[32px] font-medium text-white leading-[40px] font-display"
                        >
                          <Image
                            src={project.coverImage}
                            alt={project.title}
                            width={1000}
                            height={1000}
                            className="w-full rounded-[4px] aspect-[16/9] object-cover"
                          />
                          <div className="py-2 px-4 absolute bottom-0 left-0 right-0 text-[16px] bg-black/50 text-white max-w-[700px] leading-[24px] font-display">
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

        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
