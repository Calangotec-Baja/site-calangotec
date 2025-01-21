import MembrosGenerico, { Membro } from "./MembrosGenerico";
import SobreGenerico from "./SobreGenerico";

export interface SubsistemaProps {
    banner: string;
    foto1: string;
    foto2: string;
    texto1: string;
    texto2: string;
    membros: Membro[];
}


export default function SubsistemaGenerico(props: SubsistemaProps) {
    return (
        <>
            <div className="flex flex-col gap-8 items-center">
                <img src={props.banner} alt="" className="w-full"/>
                <div className="w-full flex flex-col justify-start gap-8">    
                    <div className="flex flex-col text-yellow-300 justify-center text-end items-center bg-gray-800 py-2 sm:py-4 px-8 text-xl sm:text-2xl font-[Inter] font-bold min-w-fit w-1/4 rounded-r-full">
                        Sobre o susbistema:
                    </div>
                    <SobreGenerico foto1={props.foto1} foto2={props.foto2} texto1={props.texto1} texto2={props.texto2} />
                    <MembrosGenerico membros={props.membros} />
                </div>
            </div>
        </>
    )
}