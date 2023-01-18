import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutloneClose,AiOutlonemanu } from 'react-icon/ai';

export default function Home() {
  return (
    <div className='fixed w-full h-20 shadow-xl shadow-gray-400  z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src="/../public/assets/navLogo.png" alt="/" width='100' height='20' />
        <div>
          <ul className="hidden md:flex">
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skill</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>paojects</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>contact</li>
            </Link>
          </ul>
          <div className="md:hidden">
            {/* <AiOutlonemanu /> */}
          </div>
        </div>
      </div>

    </div>
  )
}