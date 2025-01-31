import foto1 from "../Estrutura/foto1.png"
import foto2 from "../Estrutura/foto2.png"

export default function Sobre() {
    return (
        <div className="font-[Inter] flex flex-col items-center gap-16">
            <div className="w-4/5 md:w-2/3 flex flex-col items-center lg:flex-row gap-4">
                    <article className="text-justify lg:w-1/2 text-xl">
                    No subsistema de estrutura do Baja SAE, o objetivo principal é garantir que o projeto do
                    chassi e da gaiola ofereçam segurança, conforto e funcionalidade para o piloto, seguindo as
                    normas exigidas pela competição. A ideia é otimizar a interação entre o piloto e o veículo,
                    garantindo que a condução seja segura e eficiente, mesmo em terrenos difíceis e condições
                    extremas. Um dos pontos mais importantes é a posição do piloto, que precisa ser pensada
                    de forma a reduzir a fadiga durante as provas, permitindo que o piloto acesse rapidamente e
                    com facilidade os controles do veículo. Para isso, é necessário levar em conta as
                    características físicas do piloto, como altura, peso e mobilidade. Além disso, a estrutura do
                    cockpit deve ser feita para proteger o piloto em caso de impacto ou capotamento,
                    assegurando a segurança nessas situações, de acordo com as especificações de diâmetro
                    e espessura dos tubos exigidos pelo regulamento. Outro ponto relevante é a acessibilidade:
                    o piloto precisa ser capaz de entrar e sair do veículo rapidamente, especialmente em
                    situações de emergência. 
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
                    Por isso, são realizados testes práticos de entrada e saída
                    durante o desenvolvimento do projeto, para garantir que o design atenda aos requisitos de
                    segurança da SAE. Em termos de design, a estética e a funcionalidade precisam se
                    equilibrar, já que o veículo deve ser aerodinâmico e prático. A visibilidade também é uma
                    prioridade, sendo planejada para garantir que o piloto tenha uma boa visão, mesmo em
                    terrenos acidentados. Todo esse processo de desenvolvimento inclui testes de validação,
                    como simulações ergonômicas e ensaios práticos, para ajustar o projeto conforme o
                    feedback do piloto e os resultados obtidos. Esses ajustes garantem que o veículo esteja
                    conforme as normas da competição e proporcione a melhor experiência para o piloto
                    durante as provas. Em resumo, o subsistema de estrutura do Baja SAE é essencial para
                    criar um veículo que atenda aos requisitos técnicos e de segurança, mas que também seja
                    funcional e confortável para o piloto, garantindo desempenho e segurança em condições
                    extremas.
                    </article>
                </div>
        </div>
    )
}