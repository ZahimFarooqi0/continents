import Link from "next/link"
import Button from "../../button/page"
export default function Countries4(){
    return(
        <>
        
        <h1 className="  text-center text-5xl mb-4 mt-4 underline decoration-yellow-300">Conuntries : </h1>
        <div className="flex  flex-col items-center justify-center  ">
        <div className="  bg-gray-800 rounded-lg p-20 mt-10">
         <li className="mb-3  text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/australia">AUSTRALIA</Link></li>
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/fuji">FIJI</Link></li>
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/newzealand">NEW ZEALAND</Link></li>
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/papuanewguinea">PAPUA NEW GUINEA</Link></li>
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/solomanislands">SOLOMANS ISLANDS</Link></li>
         <Button/>
        </div>
        </div>
    
        </>
        
    )
    
}