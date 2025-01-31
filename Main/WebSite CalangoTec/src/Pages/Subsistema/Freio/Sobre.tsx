import foto1 from "../Freio/foto1.png"
import foto2 from "../Freio/foto2.png"

export default function Sobre() {
    return (
        <div className="font-[Inter] flex flex-col items-center gap-16">
            <div className="w-4/5 md:w-2/3 flex flex-col items-center lg:flex-row gap-4">
                    <article className="text-justify lg:w-1/2 text-xl">
                    No subsistema de freios de um veículo Baja SAE, o foco está no projeto, desenvolvimento e validação de um sistema de frenagem eficiente, seguro e capaz de atender às exigências específicas das competições. Esse sistema deve garantir a segurança do piloto, proporcionando uma frenagem eficaz em diversas condições de terreno e de velocidade, ao mesmo tempo que contribui para o desempenho geral do veículo. O subsistema de freios envolve a seleção, dimensionamento e integração de componentes fundamentais que devem ser otimizados para suportar as altas exigências das competições.
                    Os discos de freio desempenham um papel crucial na dissipação do calor gerado durante o processo de frenagem, sendo essenciais para evitar o superaquecimento do sistema. Sua escolha leva em conta fatores como material, resistência ao desgaste e capacidade de dissipação térmica. Já as pastilhas de freio convertem a energia cinética do veículo em calor por meio do atrito, sendo projetadas para suportar temperaturas elevadas e garantir um desempenho constante durante a prova.
                    As pinças de freio aplicam pressão nas pastilhas, promovendo o contato necessário para que a frenagem ocorra de maneira eficiente e controlada. A escolha das pinças envolve a consideração de seu peso, resistência e distribuição de força, com o objetivo de obter uma frenagem equilibrada em todas as rodas. O cilindro mestre, por sua vez, transforma a força aplicada pelo piloto no pedal de freio em pressão hidráulica, que é transmitida através do fluido de freio até as pinças. A utilização de fluido de freio adequado e de alta qualidade é fundamental para garantir uma resposta rápida e precisa durante o processo de frenagem.

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
                    Além disso, a precisão do sistema é garantida por meio de cálculos de dimensionamento que asseguram que o veículo possa ser parado de maneira eficaz em diversas condições, como diferentes tipos de terreno (areia, lama, pedras, etc.) e variações de velocidade. Para isso, é necessário considerar a massa do veículo, a distribuição de peso, as características dos pneus e o tipo de suspensão, de modo a otimizar a performance do sistema de freios.
                    Em resumo, o subsistema de freios de um veículo Baja SAE é uma parte crítica da segurança e desempenho do veículo, e seu projeto envolve uma série de considerações técnicas, testes e validações rigorosas. A constante evolução do design e a otimização dos componentes são essenciais para garantir não apenas a conformidade com as exigências da competição, mas também a segurança do piloto em condições extremas de prova.
                    </article>
                </div>
        </div>
    )
}