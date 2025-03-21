"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
const experience = [
  {
    title: "FullStack developer intern",
    company: "Swafinix Technologies,",
    duration: "March 2025 - Present",
    description:
      "Led the design and implementation of scalable system architectures, managing a team of 8-10 developers using Next.js, Tailwind, and FastAPI. Managed project completion and task organization using Jira, improving workflow efficiency.",
  },
  {
    title: "Web developer intern",
    company: "Sarvatre int pvt ltd,",
    duration: "May 2023 - Nov 2023",
    description:
      "Developed responsive and interactive user interfaces using React and TypeScript. Collaborated with designers to implement design specifications and ensure cross-browser compatibility.",
  },

  {
    title: "Web developer Intern",
    company: "Rablo.in,",
    duration: "July 2022 - May 2023",
    description:
      "Developed responsive and interactive user interfaces using React and TypeScript. Collaborated with designers to implement design specifications and ensure cross-browser compatibility.",
  },
];
export function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
      <WobbleCard
        containerClassName="border rounded-[4px] border-[#1B3B57] col-span-1 lg:col-span-2 h-full bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] min-h[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-2xl">
          <h2 className="text-left text-balance font-dmono text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Bio
          </h2>
          <p className="mt-4 text-left text-[20px] font-display  text-base/6 text-neutral-200">
            I am a passionate web developer with expertise in Next.js, React,
            and backend integration. With a keen eye for system architecture and
            scalable design, I have led development teams, optimized workflows,
            and built high-performance applications. Currently pursuing a
            Master’s in Computer Application at PES University, I am eager to
            leverage my skills to develop innovative and efficient web
            solutions.
          </p>
        </div>
        <Image
          src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1742542867/code-editor_ymne21.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute  -right-90 lg:opacity-100 opacity-25 md:-right-[40%] lg:-right-[20%] -bottom-40 object-contain rounded-2xl -z-10"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[400px] border rounded-[4px] border-[#1B3B57] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] bg-[url('https://res.cloudinary.com/dsalsyu0z/image/upload/v1742542385/WhatsApp_Image_2025-03-21_at_13.01.31_rdcfls.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="hidden">c</div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 flex justify-center items-center  border rounded-[4px] border-[#1B3B57]   bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px]  ">
        <h1 className="text-[50px]">
          {'" '}वयं यत् स्मः तत् पश्यामः, वयं यत् पश्यामः
        </h1>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 border rounded-[4px] border-[#1B3B57]   bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] gap-4">
        <div className="flex flex-col gap-3">
          {experience.map((ex, i) => (
            <div key={i} className="text-left">
              <div className="font-display text-[18px] md:text-[23px] leading-[26px] md:leading-[28px] font-normal">
                {ex.title}
              </div>
              <div className="font-display text-[14px] md:text-[16px] font-normal leading-[24px]">
                {ex.company} {ex.duration}
              </div>
            </div>
          ))}
        </div>
        <Image
          src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1742542867/code-editor_ymne21.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-90 lg:opacity-100 opacity-25 md:-right-[40%] lg:-right-[20%] -bottom-40 object-contain rounded-2xl -z-10"
        />
      </WobbleCard>
    </div>
  );
}
