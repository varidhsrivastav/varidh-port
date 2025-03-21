import type { Metadata } from "next";
import { DM_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import {
  ContactIcon,
  Facebook,
  Github,
  HomeIcon,
  Instagram,
  LinkedinIcon,
  Mail,
  Projector,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Varidh Portfolio",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${firaCode.variable} antialiased relative  `}>
        <div className=" hidden fixed z-[100] backdrop-blur-[25px]    border border-[#3C454D] left-2 top-2   py-4 px-16 right-2 md:flex flex-row justify-between">
          <div className="min-w-[140px] min-h-[24px] flex flex-row justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1742223121/Varidh_logo_ll6tye.png"
              alt="Varidh Logo"
              width={140}
              height={24}
            />
          </div>
          <div>
            <Link
              href="/contactme"
              className="border border-[#3C454D] rounded-[4px] min-h-[24px] py-2 px-4 text-[16px] leading-[24px] text-white font-dmono "
            >
              Contact me{" "}
            </Link>
          </div>
        </div>
        <div className="fixed z-[100] backdrop-blur-[25px] bg-transparent gap-8 px-4 border left-2 top-2 border-[#3C454D] bottom-2 hidden md:flex flex-col justify-center items-center">
          <Link href="/">
            <HomeIcon className="w-6 h-6 text-white" />
          </Link>
          <Link href="/projects">
            <Projector className="w-6 h-6 text-white" />
          </Link>
          <Link href="/contactme">
            <ContactIcon className="w-6 h-6 text-white" />
          </Link>
          <div className="w-full border-[#3C454D] border-t-[1px] absolute top-[59px]"></div>
        </div>
        <div className="fixed z-[100] backdrop-blur-[25px]  border px-16 gap-8 py-4 text-white hidden md:flex flex-row justify-center items-center left-2 bottom-2 border-[#3C454D]  right-2">
          <Link href="https://github.com/varidhsrivastav" target="_blank">
            <Github className="w-6 h-6 text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/varidhsrivastav1/"
            target="_blank"
          >
            <LinkedinIcon className="w-6 h-6 text-white" />
          </Link>
          <Link href="https://instagram.com/varidh_srivastav" target="_blank">
            <Instagram className="w-6 h-6 text-white" />
          </Link>
          <Link href="https://facebook.com/varidhsrivastav" target="_blank">
            <Facebook className="w-6 h-6 text-white" />
          </Link>
          <Link href="mailto:varidhsrivastava19145@gmail.com" target="_blank">
            <Mail className="w-6 h-6 text-white" />
          </Link>
          <div className="h-full w-[1px] border-[#3C454D] border-l-[1px] absolute bottom-0 left-[56px]">
            {" "}
          </div>
        </div>
        <div className="fixed z-[100] backdrop-blur-[25px] hidden md:flex text-white justify-center items-center border right-2 top-2 border-[#3C454D] bottom-2 px-4 w-[56px]">
          {/* <HomeIcon className="w-6 h-6" /> */}

          <div className="w-full border-[#3C454D] border-t-[1px] absolute top-[59px]"></div>
          <div className="w-full  border-[#3C454D] border-t-[1px] absolute bottom-[56px] right-0 ">
            {" "}
          </div>
        </div>
        <div className="fixed  top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden w-full ">
          <Image
            src="https://res.cloudinary.com/dsalsyu0z/image/upload/v1742158271/Landing_page_c6jclu.png"
            alt="Varidh Logo"
            width={100}
            height={100}
            className="w-full h-full -z-10"
          />
          <video
            className="w-screen h-screen absolute top-0 bottom-0 object-cover left-0 opacity-5 "
            controls
            autoPlay
            loop
            muted
          >
            <source
              src="https://res.cloudinary.com/dsalsyu0z/video/upload/v1742208321/0_Code_Computer_Code_3840x2160_yuqfyt.mp4"
              type="video/mp4"
              className="w-screen h-screen aspect-video absolute  border-8 "
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-white ">{children}</div>
      </body>
    </html>
  );
}
