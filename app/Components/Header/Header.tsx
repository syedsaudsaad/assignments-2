import Link from "next/link"


const header = () => {
  return (
    
        <header className="w-full h-14  flex justify-between items-center bg-white">
        <h1 className="text-3xl font-bold pl-3">{"<syed saud saad/>"}</h1>
        <ul className="hidden md:block">
            <li className="space-x-5 pr-4 ">
               <Link href={"/"}>home</Link>
               <Link href={"/"}>about</Link>
               <Link href={"/"}>contant</Link>
               <Link href={"/"}>project</Link>
               <button className="bg-slate-600 hover:bg-gray-950 text-white py-2 px-4 rounded-xl font-bold">ON</button>
            </li>
        </ul>
        
       
      <ul>
            <li className="space-x-5 pr-4 flex flex-col">
               <Link href={"/"}>home</Link>
               <Link href={"/"}>about</Link>
               <Link href={"/"}>contant</Link>
               <Link href={"/"}>project</Link>
               <button className="bg-purple-800 text-white py-2 px-4 rounded-lg font-bold">ON</button>
            </li>
        </ul>


      

    
    </header>
  )
}

export default header;