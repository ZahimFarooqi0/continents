 function continentsName({params}:{
    params:{
        continents_name:string
    }
}){
    return(
        <div>
            <h1 className="bg-white text-black">Continent: {params.continents_name}</h1>
        </div>
    )
}
export default continentsName