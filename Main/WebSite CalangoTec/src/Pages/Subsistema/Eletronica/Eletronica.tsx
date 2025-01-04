import bgeletronica from "../Eletronica/bgeltronica.png"
import Sobre from "./Sobre"
import Membros from "./Membros"

export default function Eletronica() {
    return (
        <>
            <div className="flex flex-col gap-16 items-center">
                <img src={bgeletronica} alt="" className="w-full"/>
                <div className="w-full flex flex-row justify-start">    
                    <div className="flex flex-col text-white justify-center items-center bg-gray-800 py-2 sm:py-4 px-8 rounded-r-full text-xl sm:text-2xl font-[Inter] font-bold">
                        Sobre o susbistema:
                    </div>
                </div>
                <Sobre/>
                <Membros/>
            </div>
        </>
    )
}