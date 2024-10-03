import Link from "next/link"
export default function  App() {
  return (
    <>
    <div className=" flex flex-col text-center">
    <div className=" mt-10 mb-4 text text-5xl font-extrabold">
    <h1>
    About Continents : 
    </h1></div>
    <p className=" mt-4 mb-4 text-sky-100"> The world is divided into seven continents, each unique in its geography, culture, and biodiversity. These continents are Africa, Antarctica, Asia, Europe, North America, Oceania (Australia), and South America. Africa is known for its vast deserts, rainforests, and rich cultural diversity, while the continent also features the Sahara, the largest hot desert, and the Nile River, the longest river on Earth. It is home to some of the planets most iconic wildlife, such as lions, elephants, and giraffes. Asia, the largest continent, is home to the world's highest mountains, the Himalayan range, and the most populous countries, China and India. Its geography and climate are incredibly diverse, spanning icy Siberian tundras to tropical rainforests in Southeast Asia.

Europe, though smaller, has significantly influenced world history, culture, art, and economics. It is home to ancient landmarks, renowned philosophers, and political systems that have shaped the modern world. North America boasts a mix of modern cities, technological hubs, and vast wilderness, ranging from Canadas arctic tundra to the tropical beaches of the Caribbean. South America is renowned for its rainforests, particularly the Amazon, often referred to as the "lungs of the Earth" due to its critical role in absorbing carbon dioxide. It also has a rich cultural history with ancient civilizations like the Incas. 

Oceania is a region of islands and coastal nations, with Australia being the largest landmass. This continent is notable for its marine biodiversity, including the Great Barrier Reef, the worlds largest coral reef system. Lastly, Antarctica, the coldest continent, remains mostly uninhabited except for scientific research stations, yet it plays a crucial role in regulating the Earths climate and is a focal point in studying global warming. Together, these continents form the diverse and dynamic world we live in, each contributing uniquely to global cultural and ecological richness.
</p>
<div className="flex justify-center">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mb-4 ml-5 "><Link href="/continents">Explore Continents</Link></button></div>
</div>
    </>

  )
}