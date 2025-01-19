import capaContato from '../../assets/capaContato.png'
import Header2 from "../../Elements/Header2";
import timeContato from '../../assets/timeContato.png'
import engrenagem from '../../assets/engrenagem.png'
import eng2 from '../../assets/eng2.png'
import carroContato from '../../assets/carroContato.png'
import timeSobre2 from '../../assets/timeSobre2.png'

export default function Contato() {
    return (
        <>
            <Header2/>
            <main>
                <img src={capaContato} alt="PatrocineCalangoTec" className="w-full "/>
            </main>

           
            <div className="flex flex-col items-center bg-white py-8 px-4 md:px-16 lg:px-32">
              
            {/* Título */}
            <h1 className="mb-10 text-center text-4xl md:text-4xl font-['knewave'] tracking-wide shadow-x">
              PATROCINE A NOSSA EQUIPE!
            </h1>

            <div className='w-3/4 h-auto flex '>
              <img src={timeSobre2} alt="Equipe 2024" className='rounded-md'/>
            </div>

            <div className=' '>
              {/* Descrição e chamadas */}
            <div className="flex flex-col lg:flex-row gap-8 items-center ">
            {/* Texto à esquerda */}
            <div className="mt-5 text-center w-full flex flex-col items-center lg:items-start text-lg md:text-xl lg:text-2xl">
            <p className="mb-8">
              Potencialize o futuro com a nossa equipe! Seja o impulso que
              transforma a inovação e engenharia em realidade. Patrocine a <span className="font-bold">CALANGOTEC BAJA</span> e
              acelere sua marca junto aos talentos de amanhã!
            </p>
            <div className="flex flex-col md:flex-row md:justify-center gap-4 w-full">
              <a href="https://www.youtube.com/" target='_blank'>
                <button className="font-[knewave] bg-gray-300 border-2 border-black text-black text-lg lg:text-xl w-full md:w-[400px] h-[60px] py-2 px-4 rounded-md hover:bg-gray-400 transition">
                  CONTATO PROFISSIONAL
                </button>
              </a>
              <a href="" target='_blank'>
                <button className="font-[knewave] bg-gray-300 border-2 border-black text-black text-lg lg:text-xl w-full md:w-[400px] h-[60px] py-2 px-4 rounded-md hover:bg-gray-400 transition">
                  PLANO DE PATROCÍNIO
                </button>
              </a>
            </div>

           </div>


            


            
              </div>
            </div>

            {/* Decorações laterais */}
            <img
              className="hidden md:block w-[270px] h-[130px] absolute left-[-0px] mt-[-32px] rotate-[0deg] -[-1]"
              src={engrenagem}
              alt="engrenagem"
            />

            <img
              className="hidden md:block w-[270px] h-[130px] absolute right-[-0px] mt-[-32px]"
              src={eng2}
              alt="engrenagem"
            />
          </div>
              


        </>
    )
}