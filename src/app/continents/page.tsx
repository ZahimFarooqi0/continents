import Link from "next/link"
export default function Continents(){
    return(
        <>
        
        <h1 className="  text-center text-5xl mb-10 mt-4 underline decoration-yellow-300 underline-offset-8"> Continents : </h1>
        <div className="flex  flex-col items-center justify-center  ">
        <div className="  bg-gray-800 rounded-lg p-20">
         <li className="mb-3  underline text-lg decoration-amber-600 decoration-2 hover:decoration-red-700"><Link href="/continents/antartica">ANTARTICA</Link></li>
         <li className="mb-3 underline text-lg decoration-amber-600 decoration-2 hover:decoration-red-700"><Link href="/continents/asia/">ASIA</Link></li>
         <li className="mb-3 underline text-lg decoration-amber-600 decoration-2 hover:decoration-red-700"><Link href="/continents/europe">EUROPE</Link></li>
         <li className="mb-3 underline text-lg decoration-amber-600 decoration-2 hover:decoration-red-700"><Link href="/continents/africa">AFRICA</Link></li>
         <li className="mb-3 underline text-lg decoration-amber-600 decoration-2 hover:decoration-red-700"><Link href="/continents/southamerica">SOUTH AMERICA</Link></li>
         <li className="mb-3 underline text-lg decoration-amber-600 decoration-2 hover:decoration-red-700"><Link href="/continents/northamerica">NORTH AMERICA</Link></li>
         <li className="mb-3 underline text-lg decoration-amber-600 decoration-2 hover:decoration-red-700"><Link href="/continents/oceania">OCEANIA</Link></li>
        </div>
        </div>
    
        </>
        
    )
    
}