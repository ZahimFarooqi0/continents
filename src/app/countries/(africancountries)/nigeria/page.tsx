import Link from "next/link"
 export default function Nigera(){
    const obj ={
        population: " 230,842,743",
        capital: 'Abuja',
        language: 'Hausa, Igbo, Yoruba' }
    return(
        <>
          <div className="flex flex-col items-center justify-center mt-10"> 

          <h1 className="text-4xl font-bold text-center mb-8">NIGERIA</h1>
          <div className="bg-gray-800 rounded-lg shadow-lg p-16 text-center text-lg">
      
            <p className="mb-3 mt-3">Population:{obj.population}</p>
            <p className="mb-3">Capital :{obj.capital}</p>
            <p className="mb-3 mt-3">Language:{obj.language}</p>
            <button 
            
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          ><Link href="/continents/africa">GO BACK TO COUNTRIES</Link></button>
        </div>
        </div>
        </>
    )
}
