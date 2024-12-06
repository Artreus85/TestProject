import Navbar from "@/components/navbar";
import MainContent from "@/components/main-content";
import Footer from "@/components/footer";
import Link from "next/link";

export default function AboutUs() {
    return (
        <>
            <Navbar/>
            <MainContent
                content={
                    <div className="bg-white shadow-2xl rounded-lg p-16 max-w-5xl w-full">
                        <h1 className="text-4xl font-bold text-center mb-8">За нас</h1>


                        <p className="text-gray-700 text-xl text-center mb-12 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>

                        <div className="flex justify-center">
                            <Link href="/game" className="bg-[#457B9D] text-white py-4 px-10 text-lg rounded-lg hover:bg-[#356486]"> Играй </Link> 
                        </div>
                    </div>
                }/>
            <Footer/>
        </>
    );
}