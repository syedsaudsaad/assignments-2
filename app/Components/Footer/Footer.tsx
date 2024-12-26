import React from 'react'
import Image from 'next/image';
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="w-full h-full md:h-[300px] flex justify-center items-start mt-20 pb-10">
        <div className="w-full md:w-{80%} flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
<div className="bg-red-200 w-[100px] h-10 justify-center items-center text-lg rounded-xl text-pink-600">Get in touch</div>
                <p className="mt-3 text=center text-xs md:text-lg  bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat, eaque modi obcaecati at facilis iusto recusandae officia minima autem accusantium excepturi error earum ex unde magni! Nemo, doloremque excepturi?</p>
            </div>
            <div className="mt-4 space-y-4">
                <h1 className="flex md:text-3xl justify-center items-center font-bold"><CiMail />SAUD@EMAIL.COM<GoCopy  /></h1>
                <h2 className="flex md:text-3xl justify-center items-center"><CiPhone  />03014564583<GoCopy  /></h2>
            </div>
            <p className="mt-2">you may also find me on these platformes!</p>
            <div className="flex justify-evenly items-center space-x-10 mt-2">
            <FaGithub />
            <FaLinkedin  />
            <FaFacebook />
            </div>
        </div>
    </main>
  )
};

export default Footer;
  
