import Link from "next/link"
import Button from "../../button/page"
export default function Countries2(){
    return(
        <>
        
        <h1 className=" text-center text-5xl mb-4 mt-4 underline decoration-yellow-300"> COUNTRIES : </h1>
        <div className="flex  flex-col items-center justify-center text-center  ">
        <div className="  bg-gray-800 rounded-lg p-20 mt-10">
         <li className="mb-3  text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/algeria">Algeria</Link></li>
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/nigeria">Nigeria</Link></li>
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/southafrica">South Africa</Link></li>
         <li className="mb-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/uganda">Uganda</Link></li>
         <li className="mb-10 mt-3 text-lg underline decoration-green-500 decoration-2 hover:decoration-red-700"><Link href="/countries/zambia">Zambia</Link></li>
        <Button/>
        </div>
        </div>
    
        </>
        
    )
    
}