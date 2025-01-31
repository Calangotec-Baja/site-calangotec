import bgpowertrain from "../Powertrain/bgpowertrain.png"
import foto1 from "../Powertrain/foto1.png"
import foto2 from "../Powertrain/foto2.png"
import SubsistemaGenerico from "../SubsistemaGenerico"
import fotoyan from "../Eletronica/yan.png"
import fotodanilo from "../Eletronica/danilo.png"
import fotorafa from "../Eletronica/rafa.png"
import fotopedro from "../Eletronica/pedro.png"
import fotovini from "../Eletronica/vini.png"

const membros = [
    {nome: "Yan", cargo: "Membro", foto: fotoyan},
    {nome: "Danilo", cargo: "Membro", foto: fotodanilo},
    {nome: "Rafael", cargo: "Membro", foto: fotorafa},
    {nome: "Pedro", cargo: "Gerente", foto: fotopedro},
    {nome: "Vinícius", cargo: "Membro", foto: fotovini},
]

export default function Gestao() {
    return (
        <SubsistemaGenerico banner={bgpowertrain} foto1={foto1} foto2={foto2} texto1={", assegurando eficiência, robustez e adequação para enfrentar as exigências severas das competições off-road. Este processo envolve desde a seleção e dimensionamento de componentes até a sua integração, sempre visando potência, durabilidade e eficiência. O motor, como principal fonte de energia, deve atender às normas impostas pela competição. Os modelos permitidos são escolhidos com base em critérios como potência, torque e eficiência de combustível, assegurando igualdade entre as equipes para que o foco esteja na engenharia de cada projeto. A integração do motor com os demais componentes do powertrain é uma etapa crucial, pois influencia diretamente o desempenho e a eficiência do veículo. A transmissão é responsável por transferir a potência gerada pelo motor para as rodas, proporcionando controle e eficiência ao movimento do veículo. No contexto do Baja SAE, o uso da transmissão continuamente variável (CVT) é amplamente adotado, sendo necessário considerar aspectos como a relação de transmissão e a robustez dos componentes. Além disso, o diferencial e os eixos de tração desempenham papéis essenciais. O diferencial dianteiro distribui a potência entre as rodas, permitindo que elas girem a diferentes velocidades, algo indispensável para manobras em curvas. Já o diferencial traseiro assegura que ambas as rodas traseiras girem com a mesma velocidade, evitando situações de perda de tração, como em terrenos arenosos ou atolamentos. Os eixos de tração, por sua vez, precisam ser cuidadosamente dimensionados para suportar as forças e torques gerados, garantindo a durabilidade e a segurança do sistema."} 
        texto2={"A integração de todos os componentes do powertrain requer atenção meticulosa para assegurar um funcionamento coordenado. Testes e simulações são etapas indispensáveis no processo de otimização, permitindo validar o desempenho do sistema e identificar oportunidades de melhoria. Após a montagem, realiza-se uma série de testes práticos para avaliar a eficiência e a capacidade do powertrain em condições reais de competição. Entre os ensaios realizados estão aqueles que verificam a aceleração, resistência, consumo de combustível e o comportamento do veículo em diferentes tipos de terreno. Por fim, a manutenção contínua do sistema de powertrain durante as competições é essencial para preservar seu desempenho e prevenir falhas. A equipe deve estar sempre preparada para realizar ajustes e reparos rápidos, garantindo que o veículo se mantenha em condições ideais para competir. Dessa forma, o desenvolvimento do powertrain no Baja SAE não se limita ao projeto inicial, mas se estende ao longo de toda a vida útil do veículo, em um processo constante de aprendizado e aprimoramento."} membros={membros} />
    )
}