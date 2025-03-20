"use client";
import React, { MutableRefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-[1svh] md:min-h-[150svh] w-full place-content-center overflow-hidden ">
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="relative hidden md:flex flex-col md:absolute md:inset-0 z-10 justify-center items-center gap-8 md:gap-0"
      ref={containerRef}
    >
      {/* Card 1 - Image */}
      <Card
        containerRef={containerRef}
        rotate="1.5deg"
        top="2%"
        left="6px"
        className="rounded-[4px] border-[1px] border-[#1B3B57] max-w-[90%] min-w-[90%] md:max-w-[588px] md:min-w-[588px] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] p-6 md:p-8"
      >
        <Image
          src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1741634245/test_mgg6tr.png"
          alt="Image Description"
          width={528}
          height={392}
          className="w-full max-h-[280px] md:max-h-[392px]"
        />
      </Card>

      {/* Card 2 - Work Experience */}
      <Card
        containerRef={containerRef}
        rotate="-5deg"
        top="47%"
        left="15px"
        className="max-w-[90%] min-w-[90%] md:max-w-[588px] md:min-w-[588px] rounded-[4px] border-[1px] border-[#1B3B57] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] p-6 md:p-8"
      >
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
      </Card>

      {/* Card 3 - Bio */}
      <Card
        containerRef={containerRef}
        rotate="-6deg"
        top="3%"
        left="650px"
        className="rounded-[4px] border-[1px] border-[#1B3B57] max-w-[90%] min-w-[90%] md:max-w-[588px] md:min-w-[588px] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] p-6 md:p-8"
      >
        <div className="text-white flex flex-col gap-2">
          <div className="text-left text-[#E2E4E9] font-display text-[20px] md:text-[23px] font-medium leading-[28px]">
            Bio
          </div>
          <div className="font-display text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-left">
            Led the design and implementation of scalable system architectures,
            managing a team of 8-10 developers using Next.js, Tailwind, and
            FastAPI. Managed project completion and task organization using
            Jira, improving workflow efficiency.
          </div>
        </div>
      </Card>

      {/* Card 4 - Something */}
      <Card
        containerRef={containerRef}
        rotate="-1.5deg"
        top="35%"
        left="700px"
        className="rounded-[4px] border-[1px] border-[#1B3B57] max-w-[90%] min-w-[90%] md:max-w-[588px] md:min-w-[588px] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] p-6 md:p-8"
      >
        <div className="text-white flex flex-col gap-4">
          <div className="text-left text-[#E2E4E9] font-display text-[20px] md:text-[23px] font-medium leading-[28px]">
            Something
          </div>
          <div className="font-display text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-left">
            Led the design and implementation of scalable system architectures,
            managing a team of 8-10 developers.
          </div>
        </div>
      </Card>

      {/* Card 5 - Hobbies */}
      <Card
        containerRef={containerRef}
        rotate="5deg"
        top="60%"
        left="650px"
        className="rounded-[4px] border-[1px] border-[#1B3B57] max-w-[90%] min-w-[90%] md:max-w-[588px] md:min-w-[588px] bg-[rgba(42,65,85,0.20)] backdrop-blur-[25px] p-6 md:p-8"
      >
        <div className="text-white flex flex-col gap-2">
          <div className="text-left text-[#E2E4E9] font-display text-[20px] md:text-[23px] font-medium leading-[28px]">
            Hobbies
          </div>
          <div className="font-display text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-left">
            Led the design and implementation of scalable system architectures,
            managing a team of 8-10 developers.
          </div>
        </div>
      </Card>
    </div>
  );
};

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  top: string;
  left: string;
  rotate: string;
  className?: string;
  children: React.ReactNode;
}

const Card = ({
  containerRef,
  top,
  left,
  rotate,
  className,
  children,
}: Props) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;
    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index"),
      );
      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });
    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{ top, left, rotate, zIndex }}
      className={twMerge(
        "drag-elements absolute bg-neutral-200 p-4 rounded-lg shadow-lg",
        className,
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    >
      {children}
    </motion.div>
  );
};
