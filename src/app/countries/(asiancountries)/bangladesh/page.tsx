import Link from "next/link"
export default function bang(){
    const obj ={
        population : 183000000,
        capital: 'Dhaka',
        language: 'Bangla' }
    return(
        
    <div className="flex flex-col items-center justify-center mt-10"> 

<h1 className="text-4xl font-bold text-center mb-8">BANGLADESH</h1>
  <div className="bg-gray-800 rounded-lg shadow-lg p-16 text-center text-lg">

  <p className="mb-3">  Population:{obj.population}</p>
            <p className="mb-3">  Capital :{obj.capital}</p>
            <p className="mb-3">  Language:{obj.language}</p>
           
            <button 
   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
><Link href="/continents/asia">GO BACK TO COUNTRIES</Link></button>

        </div>
        </div>
        
    )
}
