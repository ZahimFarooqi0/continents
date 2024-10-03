import Link from "next/link"
export default function Algeria(){
    const obj ={
        population: " 46,700,000",
        capital: 'Algiers',
        language: 'Tamazight' }
    return(
        <>
      <div className="flex flex-col items-center justify-center mt-10"> 

            <h1 className="text-4xl font-bold text-center mb-8">ALGERIA</h1>
            <div className="bg-gray-800 rounded-lg shadow-lg p-16 text-center">
            <p className="mb-3">  Population:{obj.population}</p>
            <p className="mb-3">  Capital :{obj.capital}</p>
            <p className="mb-3">  Language:{obj.language}</p>
            <button 
            
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          ><Link href="/continents/africa">GO BACK TO COUNTRIES</Link></button>
            </div>
        </div>
        </>
    )
}
