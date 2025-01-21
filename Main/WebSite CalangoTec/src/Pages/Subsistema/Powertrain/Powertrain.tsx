import bgpowertrain from "../Powertrain/bgpowertrain.png"
import foto1 from "../Gestao/foto1.png"
import foto2 from "../Gestao/foto2.png"
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
        <SubsistemaGenerico banner={bgpowertrain} foto1={foto1} foto2={foto2} texto1={"A Gestão da equipe no Baja é realizada para o bom andamento de todas as demais atividades dos outros subsistemas. Esse subsistema envolve a administração de diversas áreas e recursos necessários para garantir o funcionamento de forma integrada, atendendo aos objetivos e cronogramas estabelecidos. O processo de gestão no Baja engloba a coordenação das seguintes áreas: finanças, recursos humanos, marketing, patrocínios, logística e processos seletivos. No financeiro, o subsistema de Gestão administra o orçamento da equipe, incluindo a captação de recursos, controle de gastos e organização de investimentos, além de planejar e controlar o fluxo de caixa. Tudo com o intuito de garantir que o projeto tenha os recursos necessários para a execução das atividades, como compra de peças, materiais, equipamentos, entre outras situações correlatas. Na área de recursos humanos, é de responsabilidade do subsistema gerir a seleção, capacitação e manutenção dos integrantes da equipe (trainees, membros e gerentes). Isso inclui os processos seletivos, treinamento dos novos integrantes, acompanhamento do desempenho e motivação da equipe, além de cuidar da alocação de funções e responsabilidades."} texto2={"Outra atribuição importante do subsistema é o controle da luz de freio, um elemento obrigatório para a segurança do veículo. A luz de freio é posicionada na parte traseira do carro, a uma altura de 1,2 metros, conforme os regulamentos, e tem a função de alertar os competidores e observadores sobre as frenagens, reduzindo os riscos de colisões durante as provas.O objetivo central do subsistema de eletrônica é assegurar a integridade e a eficiência do carro, minimizando falhas e evitando contratempos ou gastos desnecessários. Combinando tecnologia de sensores e controle automatizado, a eletrônica do Baja é uma peça-chave para o sucesso da equipe em competições."} membros={membros} />
    )
}