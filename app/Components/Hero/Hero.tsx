import React from 'react';
import {Dot, Github, Linkedin ,Youtube, LocateIcon, LocateOffIcon, MapPinCheckInside} from'lucide-react'
import Image from 'next/image';
import Link from "next/link";

const Hero = () => {
  return (
    <main className="w-full h-[300px] flex justify-center items-center bg-white">
    <div className="flex w-full md:w--[80%] h-full flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-[400] flex justify-center items-center">
          <Image src="/images/p1.jpg" alt='logo' width={300} height={300} className="w-[300px]"></Image>
        </div>
        <div className="w-full p-5 md:w[60%] space-y=5">
<h1 className="text-3xl">HI, I'M SYED SAUD SAAD</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias
natus dolorem? Tempora vitae amet quo aliquam quam delectus, obcaecati praesentium! 
Eius iste ex libero, ipsam unde corporis consequuntur quibusdam!</p>
        <div>
            <p className="flex"><MapPinCheckInside /> karachi, pakistan</p>
            <p className="flex"><Dot className="text-green-500"/>Available for new projects</p>
            </div>
            <div className="flex">
          <Link href={"https://github.com/"}><Github  className="text-gray-800"/></Link>
           <Link href={"https:www.linkedin.com/feed/"}> <Linkedin className="text-blue-500"/> </Link>
           <Link href={"https://www.youtube.com/"}> <Youtube className="text-red-500"/></Link>
            <div/>
            </div>
        </div>
    </div>
    </main>
  )
}

export default Hero;