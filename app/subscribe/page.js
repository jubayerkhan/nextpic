import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div className="container_fluid md:pb-20 pb-10 h-screen">
      <Navbar/>
      <div className="max-w-[993px] mx-auto">
        <h1 className="text-[100px] text-white font-bold text-center">
            Unlock Unlimited Entertainment with <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">NextPick</span>
        </h1>
        <p className="text-2xl text-[#7E8598] text-center pt-6 pb-20">Movies, Series & Books in one place. Personalized just for you. <a href="" className="text-[#6C3DF0]">Start Free Trial</a></p>
      </div>
      
    </div>
  );
}
