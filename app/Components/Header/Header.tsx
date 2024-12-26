import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

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
        
       <Sheet>
  <SheetTrigger className="text-xl md:hidden">
    <Menu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>SYED SAUD SAAD</SheetTitle>
      <SheetDescription>
      <ul>
            <li className="space-x-5 pr-4 flex flex-col">
               <Link href={"/"}>home</Link>
               <Link href={"/"}>about</Link>
               <Link href={"/"}>contant</Link>
               <Link href={"/"}>project</Link>
               <button className="bg-purple-800 text-white py-2 px-4 rounded-lg font-bold">ON</button>
            </li>
        </ul>


      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet> 

    
    </header>
  )
}

export default header;