import Navbar from "@/components/navbar";
import MainContent from "@/components/main-content";
import Footer from "@/components/footer";

export default function Contacts() {
    
    return (
        <>
            <Navbar/>
            <MainContent
                content={
                    <main className="flex flex-col items-center justify-center flex-grow bg-gray-100 py-20 pt-1">
                        <div className="bg-white shadow-lg rounded-lg p-12 w-[300%] max-w-screen-xl">
                            <h1 className="text-4xl font-bold text-center mb-8">Контакти</h1>
                            
                            <ul className="text-xl space-y-4">
                                <li>Имейл: petiopetkov20a@gmail.com</li>
                                <li>Телефон: +359 88 55 615 85</li>
                            </ul>
                        </div>
                    </main>
                }/>
            <Footer/>
        </>
    )
}