"use client";

import React, { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
import { InlineWidget } from "react-calendly";
import Link from "next/link";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';


// Define validation schema using zod
const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name can't exceed 50 characters"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message can't exceed 500 characters"),
});
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        USER_ID,
      );
      reset(); // Refresh the form
      router.push("/"); // Redirect
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-[200px]">
      <div className="border border-[#1B3B57] backdrop-blur-[25px] rounded-[4px] flex flex-col p-8 gap-8 bg-[rgba(42,65,85,0.20)] w-full max-w-[650px]">
        <h1 className="text-white font-display text-[26px] leading-[32px] font-medium mb-4">
          Have an awesome project in mind?
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name and Email Fields */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Name Input */}
            <div className="w-full">
              <label
                htmlFor="name"
                className="text-[#738287] font-dmono text-[13px] leading-[20px] font-normal"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="w-full h-[48px] p-3 border border-[#1B3B57] rounded-[4px] bg-[#03090E] text-white focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-[#738287] font-dmono text-[13px] leading-[20px] font-normal"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full h-[48px] p-3 border border-[#1B3B57] rounded-[4px] bg-[#03090E] text-white focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="text-[#738287] font-dmono text-[13px] leading-[20px] font-normal"
            >
              Your Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className="w-full p-3 border border-[#1B3B57] rounded-[4px] bg-[#03090E] text-white focus:outline-none focus:border-blue-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full md:w-auto border border-[#3C454D] rounded-[4px] min-h-[24px] py-2 px-4 text-[16px] leading-[24px] text-white font-dmono hover:bg-[#1B3B57] transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Contact Me"}
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="pt-[64px] sm:pt-[80px] md:pt-[96px] pb-[80px] sm:pb-[96px] md:pb-[112px]">
        <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center border border-[#1B3B57] rounded-[4px] bg-[rgba(42,65,85,0.20)] p-6 sm:p-8">
          <div className="text-[36px] sm:text-[44px] md:text-[52px] text-white font-medium leading-[44px] sm:leading-[56px] md:leading-[64px] text-center font-dmono">
            Have an awesome project in mind?
          </div>
           <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="border border-[#3C454D] rounded-[4px] min-h-[24px] py-2 px-4 text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-white font-dmono hover:bg-[#3C454D]/20 transition">
            Contact me
          </button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-center text-lg sm:text-xl">Book a call with me</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            <InlineWidget
              url="https://calendly.com/varidhsrivastav"
              styles={{
                width: '1000px',
                height: '700px',
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
        </div>
      </div>
      </div>
        {/* <div className="App">
      <InlineWidget url="https://calendly.com/varidhsrivastav" styles={{
  width: '1000px'
}} />
    </div> */}
    
    </div>
  );
}
