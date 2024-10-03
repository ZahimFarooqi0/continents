import Link from "next/link"
export default function Button(){
    return( <button 
          
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      ><Link href="/continents">GO BACK TO CONTINENTS</Link></button>)
}