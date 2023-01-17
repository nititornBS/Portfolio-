import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className='fixe w-full h-20 shadow-xl shadow-gray-400  z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2:px-16'>
        <Image src="/../public/assets/navLogo.png" alt="" width='125' height='50' />
        <div>
            <ul>  
              <Link href='/'>
                  <li className='ml-10 text-sm uppercase hover:border-b'></li>
              </Link>
              <Link href='/'>
                  <li className='ml-10 text-sm uppercase hover:border-b'></li>
              </Link>
              <Link href='/'>
                  <li className='ml-10 text-sm uppercase hover:border-b'></li>
              </Link>
              <Link href='/'>
                  <li className='ml-10 text-sm uppercase hover:border-b'></li>
              </Link>
              <Link href='/'>
                  <li className='ml-10 text-sm uppercase hover:border-b'></li>
              </Link>
            </ul>
        </div>
      </div>

    </div>
  )
}