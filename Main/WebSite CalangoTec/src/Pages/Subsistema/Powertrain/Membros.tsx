import yan from "./yan.png"
import danilo from "./danilo.png"
import rafa from "./rafa.png"
import pedro from "./pedro.png"
import vini from "./vini.png"



export default function Membros() {
    return (
        <div className="font-[Inter] flex flex-col w-4/5 items-center">
            <h1 className="text-2xl font-bold text-center">MEMBROS</h1>
            <p className="text-center text-xl">Conheça quem faz parte do nosso subsistema:</p>
            <div className="flex gap-16 flex-wrap justify-center py-4">
                <div className="w-full md:w-1/4 flex flex-col items-center justify-end">
                    <img src={pedro} alt="Pedro" className="w-full"/>
                    <p className="text-center text-xl">Pedro Lima - Gerente</p>
                </div>
                <div className="w-full md:w-1/4 flex flex-col items-center justify-end">
                    <img src={danilo} alt="Danilo" className="w-full"/>
                    <p className="text-center text-xl">Danilo Santana - Membro</p>
                </div>
                <div className="w-full md:w-1/4 flex flex-col items-center justify-end">
                    <img src={yan} alt="Yan" className="w-full"/>
                    <p className="text-center text-xl">Yan Campêlo - Membro</p>
                </div>
                <div className="w-full md:w-1/4 flex flex-col items-center justify-end">
                    <img src={rafa} alt="Rafa" className="w-full"/>
                    <p className="text-center text-xl">Rafael Athaliba - Membro</p>
                </div>
                <div className="w-full md:w-1/4 flex flex-col items-center justify-end">
                    <img src={vini} alt="Vini" className="w-full"/>
                    <p className="text-center text-xl">Vinícius Oliveira - Membro</p>
                </div>
            </div>
        </div>
    )
}