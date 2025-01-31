import foto1 from "../Calculo/foto1.png"
import foto2 from "../Calculo/foto2.png"

export default function Sobre() {
    return (
        <div className="font-[Inter] flex flex-col items-center gap-16">
            <div className="w-4/5 md:w-2/3 flex flex-col items-center lg:flex-row gap-4">
                    <article className="text-justify lg:w-1/2 text-xl">
                    O cálculo estrutural no Baja SAE é uma etapa essencial para garantir que a estrutura do
                    veículo suporte às exigências mecânicas e de segurança impostas durante as competições.
                    Essa análise tem como objetivo prever o comportamento da estrutura sob diferentes tipos
                    de carregamentos, otimizando o peso e a rigidez do chassi sem comprometer sua
                    integridade. Para realizar essas análises, utiliza-se o software Ansys, que permite simular
                    situações reais de uso, como impactos, torções e vibrações. Com o auxílio dessa
                    ferramenta, é possível identificar pontos de alta concentração de tensões, otimizando o
                    projeto para evitar falhas estruturais. Os principais carregamentos considerados incluem
                    cargas estáticas, como o peso do piloto e dos componentes acoplados ao chassi, cargas
                    dinâmicas, resultantes de acelerações, frenagens e impactos durante as competições, e
                    cargas de impacto, simulando situações como capotamentos e colisões com obstáculos.
                    Além das simulações, são realizados testes experimentais, como ensaios de torção e
                    vibração, para validar os resultados teóricos e garantir que a estrutura atenda às normas
                    estabelecidas pela SAE.  
                    </article>
                    <div className="sm:w-1/2 flex justify-center">
                        <img src={foto1} alt="foto notebook" className="" />
                    </div>
                </div>
                <div className="w-4/5 md:w-2/3 flex flex-col items-center lg:flex-row gap-4">
                    <div className="sm:w-1/2 flex justify-center">
                        <img src={foto2} alt="foto competicao" className="" />
                    </div>
                    <article className="text-justify lg:w-1/2 text-xl">
                    Durante esses testes, os resultados são comparados às previsões
                    do software, permitindo ajustes no projeto. Outro aspecto importante é a seleção de
                    materiais. O chassi geralmente utiliza aços de alta resistência, que combinam leveza e
                    durabilidade. O dimensionamento desses materiais é feito considerando fatores de
                    segurança que assegurem a integridade estrutural mesmo em condições extremas. A
                    análise estrutural também considera o comportamento dinâmico do veículo. Por meio de
                    análises modais, são identificadas as frequências naturais da estrutura, garantindo que não
                    ocorram problemas de ressonância que comprometam o desempenho e a segurança do
                    veículo. Em conclusão, o cálculo estrutural no Baja SAE é um processo rigoroso que
                    combina análises computacionais realizadas no Ansys, testes experimentais e seleção de
                    materiais para desenvolver um chassi leve, resistente e seguro. Essa abordagem integrada
                    é fundamental para atender às demandas das competições e garantir o sucesso do veículo
                    em condições extremas de prova. 
                    </article>
                </div>
        </div>
    )
}