import foto1 from "../Suspensao/foto1.png"
import foto2 from "../Suspensao/foto2.png"

export default function Sobre() {
    return (
        <div className="font-[Inter] flex flex-col items-center gap-16">
            <div className="w-4/5 md:w-2/3 flex flex-col items-center lg:flex-row gap-4">
                    <article className="text-justify lg:w-1/2 text-xl">
                    O subsistema de suspensão e direção é a área responsável pela dinâmica do veículo, consistindo em buscar a melhor resposta do carro frente às inconformidades, adversidades e obstáculos presentes no ambiente em que o mesmo está inserido, aliando conforto e performance. Enquanto tudo isso ocorre, o projeto do subsistema tem que estar o mais bem desenvolvido possível para fazer com que o veículo realize com excelência todos os comandos que o piloto exija. 
                    Além disso, o subsistema contribui significativamente para a durabilidade e integridade estrutural do veículo. Ao absorver impactos e distribuir forças de maneira eficiente, ele protege outros componentes contra falhas prematuras. Isso é especialmente crítico em competições BAJA SAE, onde o protótipo é submetido a testes rigorosos de resistência e funcionalidade. Para que este comportamento aconteça na prática, é necessário uma boa engenharia e aprimoramento constante dos componentes que fazem parte do conjunto, são eles: coluna de direção, caixa de direção, cremalheira, braços de direção, mangas de eixo, bandejas de suspensão, kit mola-amortecedor, rodas e pneus. 
                    A coluna de direção conecta o volante ao mecanismo de direção (geralmente a caixa de direção). Ela transmite os movimentos giratórios do volante para o sistema de direção. A caixa de direção é responsável por converter o movimento rotacional da coluna de direção em movimento linear, que será transmitido aos braços e às rodas, podendo fazer isso de forma mecânica ou de forma assistida (hidráulica/elétrica), reduzindo o esforço necessário para girar o volante.  
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
                    A cremalheira é parte do mecanismo da caixa de direção em sistemas de cremalheira e pinhão. Ela é uma barra dentada que trabalha em conjunto com o pinhão para converter o movimento rotacional em movimento linear, permitindo a movimentação lateral das rodas dianteiras. Os braços de direção são responsáveis por transferir o movimento linear gerado pela caixa de direção para as rodas. Eles conectam a cremalheira ou o setor da direção às mangas de eixo e garantem que o ângulo das rodas seja ajustado corretamente para executar as manobras. 
                    As mangas de eixo são componentes que suportam os cubos das rodas e permitem sua rotação. Elas também conectam os braços de direção ao sistema de suspensão. Sua função é proporcionar o movimento articulado necessário para a direção e suspensão. As bandejas de suspensão são componentes que conectam o chassi do veículo às rodas. Juntos, eles garantem a absorção de impactos, o controle da altura e a estabilidade dinâmica do veículo. Já as rodas estão inseridas nos pneus e transmitem a força gerada pelo motor em rotação, permitindo o movimento necessário para deslocar o veículo. Por fim, os pneus são a interface entre o veículo e o solo. Suas funções incluem tração, amortecimento e estabilidade. A escolha dos pneus afeta diretamente o desempenho, o consumo de combustível e o conforto do veículo.
                    Logo, tendo em vista todas as funcionalidades e o propósito do time de suspensão e direção, é notório que o subsistema é imprescindível para uma equipe de competição automotiva atingir um alto nível de performance e conquistar seus objetivos. 
                    </article>
                </div>
        </div>
    )
}