import Link from "next/link"
import Button from "../../button/page"
export default function Countries(){
    return(
        <>
        
        <h1 className="  text-center text-6xl mb-4 mt-4 underline decoration-yellow-300"> Countries : </h1>
        <div className="flex  flex-col items-center justify-center text-center  ">
        <div className="  bg-gray-800 rounded-lg p-16 mt-10 ">
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/pakistan">Pakistan</Link></li>
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/india">India</Link></li>
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/bangladesh">Bangladesh</Link></li>
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/japan">Japan</Link></li>
         <li className="mb-10 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/china">China</Link></li>
        <Button/>
        </div>
        </div>
    
        </>
        
    )
    
}