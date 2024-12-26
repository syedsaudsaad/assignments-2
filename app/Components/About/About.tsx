import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div>
         <h1 className="flex justify-center items-center font-bold bg-slate-500">ABOUT</h1>
<div className="w-full flex flex-col md:flex-row justify-center items-center bg-white mt-10 p-10 rounded-xl shadow-lg">
            <div className="w-[90%] md:w-[30%]  flex justify-center items-center ">
              <Image src="/images/p2.jpg"
              width={100}
              height={100}
              className="w-[300px] rounded-xl"
              alt="logo"></Image>
            </div>
            <div className="w-[100%] md:w-[40%]  space-y-4 mt-4 md:mt-0">
              <h1 className="text-2xl font-bold">ABOUT</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Tempora pariatur asperiores molestiae temporibus officiis expedita. 
                 Obcaecati doloremque fugiat omnis illo. Odio atque quos sequi.
                  Quo sequi magnam natus cum autem!</p>
                  </div>
                  </div>
    </div>
  )
}

export default About;