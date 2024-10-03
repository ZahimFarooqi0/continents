import Link from "next/link"
export default function Uganda(){
    const obj ={
        population: " 49,283,041",
        capital: 'Kampala',
        language: ' Swahili' }
    return(
        <>
         <div className="flex flex-col items-center justify-center mt-10"> 

          <h1 className="text-4xl font-bold text-center mb-8">UGANDA</h1>
            <div className="bg-gray-800 rounded-lg shadow-lg p-16 text-center text-lg">

            <p>Population:{obj.population}</p>
            <p>Capital :{obj.capital}</p>
            <p>Language:{obj.language}</p>
            <button 
            
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          ><Link href="/continents/africa">GO BACK TO COUNTRIES</Link></button>
        
            </div>
        </div>
        </>
    )
}
