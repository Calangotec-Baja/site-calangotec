import foto1 from "../Gestao/foto1.png"
import foto2 from "../Gestao/foto2.png"

export default function Sobre() {
    return (
        <div className="font-[Inter] flex flex-col items-center gap-16">
            <div className="w-4/5 md:w-2/3 flex flex-col items-center lg:flex-row gap-4">
                    <article className="text-justify lg:w-1/2 text-xl">
                    A Gestão da equipe no Baja é realizada para o bom andamento de todas as demais atividades dos outros subsistemas. Esse subsistema envolve a administração de diversas áreas e recursos necessários para garantir o funcionamento de forma integrada, atendendo aos objetivos e cronogramas estabelecidos. O processo de gestão no Baja engloba a coordenação das seguintes áreas: finanças, recursos humanos, marketing, patrocínios, logística e processos seletivos.
                    No financeiro, o subsistema de Gestão administra o orçamento da equipe, incluindo a captação de recursos, controle de gastos e organização de investimentos, além de planejar e controlar o fluxo de caixa. Tudo com o intuito de garantir que o projeto tenha os recursos necessários para a execução das atividades, como compra de peças, materiais, equipamentos, entre outras situações correlatas.
                    Na área de recursos humanos, é de responsabilidade do subsistema gerir a seleção, capacitação e manutenção dos integrantes da equipe (trainees, membros e gerentes). Isso inclui os processos seletivos, treinamento dos novos integrantes, acompanhamento do desempenho e motivação da equipe, além de cuidar da alocação de funções e responsabilidades. 
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
                    O marketing do projeto para o Baja é fundamental para promover a equipe e atrair patrocinadores e parceiros, além do público-alvo. Entre algumas funções estão a criação de campanhas de divulgação nas redes sociais, organização e participação de eventos e apresentação do time em competições e exposições. De maneira direta, a gestão dos patrocínios é essencial para que haja garantia do apoio financeiro de empresas e marcas que desejam associar a sua imagem ao projeto. Essa área está estreitamente responsável pela captação de patrocinadores, negociação de contratos, e ter constantemente contato direto com a empresa associada.
                    A logística abrange a organização e o transporte de materiais e equipamentos necessários para a equipe, seja para as competições, para os eventos ou para o desenvolvimento do veículo. Dentre as atividades estão a coordenação do transporte de peças, ferramentas ou até mesmo o veículo, além dos deslocamentos da equipe quando necessário
                    </article>
                </div>
        </div>
    )
}