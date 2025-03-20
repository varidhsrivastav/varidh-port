import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="pt-[64px] sm:pt-[80px] md:pt-[96px] pb-[80px] sm:pb-[96px] md:pb-[112px]">
        <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center border border-[#1B3B57] rounded-[4px] bg-[rgba(42,65,85,0.20)] p-6 sm:p-8">
          <div className="text-[36px] sm:text-[44px] md:text-[52px] text-white font-medium leading-[44px] sm:leading-[56px] md:leading-[64px] text-center font-dmono">
            Have an awesome project in mind?
          </div>
          <div>
            <Link
              href="/contactme"
              className="border border-[#3C454D] rounded-[4px] min-h-[24px] py-2 px-4 text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-white font-dmono"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
