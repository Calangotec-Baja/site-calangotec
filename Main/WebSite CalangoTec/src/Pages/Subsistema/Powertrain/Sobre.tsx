import foto1 from "../Powertrain/foto1.png"
import foto2 from "../Powertrain/foto2.png"

export default function Sobre() {
    return (
        <div className="font-[Inter] flex flex-col items-center gap-16">
            <div className="w-4/5 md:w-2/3 flex flex-col items-center lg:flex-row gap-4">
                    <article className="text-justify lg:w-1/2 text-xl">
                    , assegurando eficiência, robustez e adequação para enfrentar as exigências severas das competições off-road. Este processo envolve desde a seleção e dimensionamento de componentes até a sua integração, sempre visando potência, durabilidade e eficiência.
                    O motor, como principal fonte de energia, deve atender às normas impostas pela competição. Os modelos permitidos são escolhidos com base em critérios como potência, torque e eficiência de combustível, assegurando igualdade entre as equipes para que o foco esteja na engenharia de cada projeto. A integração do motor com os demais componentes do powertrain é uma etapa crucial, pois influencia diretamente o desempenho e a eficiência do veículo.
                    A transmissão é responsável por transferir a potência gerada pelo motor para as rodas, proporcionando controle e eficiência ao movimento do veículo. No contexto do Baja SAE, o uso da transmissão continuamente variável (CVT) é amplamente adotado, sendo necessário considerar aspectos como a relação de transmissão e a robustez dos componentes. Além disso, o diferencial e os eixos de tração desempenham papéis essenciais. O diferencial dianteiro distribui a potência entre as rodas, permitindo que elas girem a diferentes velocidades, algo indispensável para manobras em curvas. Já o diferencial traseiro assegura que ambas as rodas traseiras girem com a mesma velocidade, evitando situações de perda de tração, como em terrenos arenosos ou atolamentos. Os eixos de tração, por sua vez, precisam ser cuidadosamente dimensionados para suportar as forças e torques gerados, garantindo a durabilidade e a segurança do sistema.
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
                    A integração de todos os componentes do powertrain requer atenção meticulosa para assegurar um funcionamento coordenado. Testes e simulações são etapas indispensáveis no processo de otimização, permitindo validar o desempenho do sistema e identificar oportunidades de melhoria. Após a montagem, realiza-se uma série de testes práticos para avaliar a eficiência e a capacidade do powertrain em condições reais de competição. Entre os ensaios realizados estão aqueles que verificam a aceleração, resistência, consumo de combustível e o comportamento do veículo em diferentes tipos de terreno.
                    Por fim, a manutenção contínua do sistema de powertrain durante as competições é essencial para preservar seu desempenho e prevenir falhas. A equipe deve estar sempre preparada para realizar ajustes e reparos rápidos, garantindo que o veículo se mantenha em condições ideais para competir. Dessa forma, o desenvolvimento do powertrain no Baja SAE não se limita ao projeto inicial, mas se estende ao longo de toda a vida útil do veículo, em um processo constante de aprendizado e aprimoramento.
                    </article>
                </div>
        </div>
    )
}