import React from 'react';
import Image from 'next/image';

const skill = () => {
  return (
    <main className="w-full h-full md:h-[300px] flex justify-center items-start mt-20">
        <div className="w-full md:w-{80%} flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
<div className="bg-red-200 w-[100px] h-10 justify-center items-center text-xl rounded-xl text-pink-600">SKILL</div>
                <p className="mt-3 text=center text-xs md:text-lg  bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat, eaque modi obcaecati at facilis iusto recusandae officia minima autem accusantium excepturi error earum ex unde magni! Nemo, doloremque excepturi?</p>
            </div>
            <div className="w-full md:w-{90%} flex flex-wrap justify-center items-center gap-4 mt-10 ">
            <Image src="/images/p2.jpg" alt='logo' className="w-[90px] md:w[90px]" width={100} height={100}></Image>
            </div>
            <div>
            <Image src="/images/p2.jpg" alt='logo'className="w-[90px] md:w[90px]"  width={100} height={100}></Image>
            </div>
            <div>
            <Image src="/images/p2.jpg" alt='logo' className="w-[90px] md:w[90px]"width={100} height={100}></Image>
            </div>
            <div>
            </div>
        </div>
    </main>
  )
};

export default skill;