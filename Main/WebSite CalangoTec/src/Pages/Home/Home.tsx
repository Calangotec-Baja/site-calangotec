//import Header from "../../Elements/Header";
import timePrincipal2 from '../../assets/timePrincipal2.png'
import Sobre from "../../Elements/Sobre";
import Patrocinadores from "../../Elements/Patrocinadores";
import teamRegi2 from '../../assets/timeRegi2.png';
import Card from '../../Elements/Card';
import eletronicaIcone from '../../assets/eletronicaIcone.png'
import eletronicaCard from '../../assets/eletronicaCard.png'
import Carrosel from "../../Elements/Carrosel";

export default function Home() {
    return (
        <>
            {/* <Header/> */}
            <main>
                <img src={timePrincipal2} alt="fotoEquipe" className="w-full"/>
            </main>

            <Sobre/>

            {/* SUBSISTEMAS */}
            <div className="flex flex-col text-center text-black text-4xl font-semibold font-['Inter'] pt-16 mb-4 tracking-wide mb-10 gap-4">
                <p className="text-black font-semibold text-4xl mb-[-15px] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">SUBSISTEMAS</p>
                <p className="text-[#666666] font-normal text-lg">Fique por dentro dos nossos subsistemas!</p>
            </div>
            <Carrosel/>
           


            <Patrocinadores/>
            {/* <Footer/> */}
        </>
    )
}