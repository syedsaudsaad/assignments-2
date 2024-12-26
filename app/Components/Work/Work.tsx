import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from "react-icons/fa";

const work = () => {
  return (
    <div>
<main className="w-full h-full md:h-full flex justify-center items-start mb-12">
        <div className="w-full md:w-{80%} flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
<div className="bg-red-200 w-[100px] h-10 justify-center items-center text-xl rounded-xl text-pink-600">WORK</div>
                <p className="mt-3 text=center text-xs md:text-lg  bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat, eaque modi obcaecati at facilis iusto recusandae officia minima autem accusantium excepturi error earum ex unde magni! Nemo, doloremque excepturi?</p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center bg-white mt-10 p-10 rounded-xl shadow-lg">
            <div className="w-[90%] md:w-[30%]  flex justify-center items-center ">
              <Link href={"/https://themeselection.com/next-js-ecommerce-template//"}></Link>
              <Image src={"/images/p3.jpg"}
              width={100}
              height={100}
              className="w-[300px] rounded-xl"
              alt="logo"></Image>
            </div>
            <div className="w-[100%] md:w-[40%]  space-y-4 mt-4 md:mt-0">
              <h1 className="text-2xl font-bold">E-COMMERCE WEBSITE</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Tempora pariatur asperiores molestiae temporibus officiis expedita. 
                 Obcaecati doloremque fugiat omnis illo. Odio atque quos sequi.
                  Quo sequi magnam natus cum autem!</p>
                  <div className="flex gap-3 flex-wrap space-x-10">
                  <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2 gap-3 space-y-3">HTML</div>
                  <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2 gap-3 space-y-3">CSS</div>
                  <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2 gap-3 space-y-3">TYPESCRIPT</div>
                  <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2 gap-3 space-y-3">NEXT.JS</div>
                  </div>
                  </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center bg-white mt-10 p-10 rounded-xl shadow-lg">
            <div className="w-[90%] md:w-[30%]  flex justify-center items-center "></div>
            < Link href={"/https://themeselection.com/next-js-ecommerce-template//"}><FaExternalLinkAlt /></Link>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center bg-white mt-10 p-10 rounded-xl shadow-lg">
            <div className="w-[90%] md:w-[30%]  flex justify-center items-center ">
              <Link href={"/https://themeselection.com/next-js-ecommerce-template//"}></Link>
              <Image src={"/images/p3.jpg"}
              width={100}
              height={100}
              className="w-[300px] rounded-xl"
              alt="logo"></Image>
            </div>
            <div className="w-[100%] md:w-[40%]  space-y-4 mt-4 md:mt-0">
              <h1 className="text-2xl font-bold">E-COMMERCE WEBSITE</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Tempora pariatur asperiores molestiae temporibus officiis expedita. 
                 Obcaecati doloremque fugiat omnis illo. Odio atque quos sequi.
                  Quo sequi magnam natus cum autem!</p>
                  <div className="flex gap-3 flex-wrap space-x-10">
                  <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2 gap-3 space-y-3">HTML</div>
                  <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2 gap-3 space-y-3">CSS</div>
                  <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2 gap-3 space-y-3">TYPESCRIPT</div>
                  <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2 gap-3 space-y-3">NEXT.JS</div>
                  </div>
                  </div>
            </div>
            <div>
            < Link href={"/https://themeselection.com/next-js-ecommerce-template//"}><FaExternalLinkAlt  /></Link>
            </div>

        </div>
    </main>
    </div>
  )
}

export default work;