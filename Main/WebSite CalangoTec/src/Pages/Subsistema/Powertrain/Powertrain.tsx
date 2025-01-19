import bgeletronica from "../Powertrain/bgpowertrain.png"
import Sobre from "./Sobre"
import Membros from "./Membros"

export default function Powertrain() {
    return (
        <>
            <div className="flex flex-col gap-16 items-center">
                <img src={bgeletronica} alt="" className="w-full"/>
                <div className="w-full flex flex-row justify-start">    
                    <div className="flex flex-col text-yellow-300 justify-center text-end items-center bg-gray-800 py-2 sm:py-4 px-8 rounded-br-full rounded-tr-2xl text-xl sm:text-2xl font-[Inter] font-bold w-1/4">
                        Sobre o susbistema:
                    </div>
                </div>
                <Sobre/>
                <Membros/>
            </div>
        </>
    )
}