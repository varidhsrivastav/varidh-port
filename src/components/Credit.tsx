import { ArrowBigUp, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Credit = () => {
  return (
   <>
   <div className="  pb-[80px] sm:pb-[96px] md:pb-[112px]">
        <div className="flex flex-row gap- sm:gap-2 justify-center items-center border border-[#1B3B57] rounded-[4px] bg-[rgba(42,65,85,0.20)] p-2">
            <div className='text-[16px] sm:text-[18px] md:text-[20px] text-white flex flex-row gap justify-center items-center gap-2 font-dmono'>
            Design by
            </div>
            <Link href="https://www.dezainahub.com/" target="_blank" className="text-[16px] sm:text-[18px] md:text-[20px] text-white flex flex-row gap justify-center items-center gap-2 font-dmono">Dezainahub <ArrowUpRight/></Link>
        
        </div>
      </div></>
  )
}

export default Credit
