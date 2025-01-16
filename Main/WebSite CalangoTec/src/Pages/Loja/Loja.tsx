import loja from '../../assets/loja.png'
import Header2 from "../../Elements/Header2";
import cardLoja from "../../assets/cardLoja.png"

export default function Loja() {
    return (
        <>
            <Header2/>
            <main>
                <img src={loja} alt="fotoLoja" className="w-full"/>
            </main>
            <div className="w-full px-4 lg:px-20 flex flex-col justify-center items-center h-fit">
                <div className="flex flex-col text-center text-black text-4xl font-semibold font-['Inter'] pt-16 mb-4 tracking-wide mb-10 gap-4">
                    <p className="text-black font-semibold text-4xl mb-[-15px]">PRODUTOS DO CALANGUINHO</p>
                    <p className="text-[#666666] font-normal text-lg pb-8">Venha dar uma olhada nos nossos produtos!</p>

                    <div className="flex flex-wrap justify-center items-center gap-16">
                        <img src={cardLoja} alt="cardLoja"/>
                        <img src={cardLoja} alt="cardLoja"/>
                        <img src={cardLoja} alt="cardLoja"/>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-16">
                        <img src={cardLoja} alt="cardLoja"/>
                        <img src={cardLoja} alt="cardLoja"/>
                        <img src={cardLoja} alt="cardLoja"/>
                    </div>
                    
                </div>
            </div>

            <div className='w-[348px] h-[383px] border-[3px] border-black'>
                <div className="w-[348px] h-[62px] border-[3px] border-black "> </div>
            </div>
        </>
    )
}