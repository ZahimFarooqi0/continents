function countriesName({params}:{
    params:{
        countries_name:string
    }
}){
    if (params.countries_name==="0"){
     }
    
    else{

 
    return(
        <div>
                   <h1 className=" text-4xl uppercase font-bold text-center mt-10 mb-10">COUNTRIES: {params.countries_name}</h1>      
            <div className="flex flex-col  justify-center items-center ">             
            <div className="bg-gray-800 rounded-lg p-16"> 
            <h1 className=" text-red-500">Country does not exist</h1>
        </div>
        </div>
        </div>

    )
}
}
export default countriesName