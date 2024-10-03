import Link from "next/link"
 export default function Navbar(){
    
    return(
        <>
    
        <nav className=" bg-blue-950 flex h-16  text-lg justify-center items-center">
        <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/aboutus">AboutUs</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/socialmedia">SocialMedia</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/continents">Continents</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        
        </nav>
        </>
    )
}