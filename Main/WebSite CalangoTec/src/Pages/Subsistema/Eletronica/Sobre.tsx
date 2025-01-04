import foto1 from "../Eletronica/fotoELETRONICA.png"
import foto2 from "../Eletronica/foto2.png"

export default function Sobre() {
    return (
        <div className="font-[Inter] flex flex-col items-center gap-16">
            <div className="w-4/5 md:w-2/3 flex flex-col items-center lg:flex-row gap-4">
                    <article className="text-justify lg:w-1/2 text-xl">
                    O subsistema de eletrônica desempenha um papel crucial no desempenho e na segurança do veículo Baja, sendo responsável pelo monitoramento em tempo real de diversas condições operacionais do carro. Ele fornece ao piloto informações essenciais, como a velocidade do veículo, o nível de combustível armazenado no tanque e a temperatura da capa CVT. Esses dados são obtidos por meio de sensores de alta precisão, como sensores capacitivos, indutivos, ultrassônicos, termistores, entre outros. Todos os sensores estão conectados a um microcontrolador, que armazena o código responsável por processar as informações e garantir o correto funcionamento do sistema.
                    Além do monitoramento, o subsistema de eletrônica também é responsável por implementar sistemas de segurança, como as chaves gerais, popularmente conhecidas como "botão mata". Esses dispositivos têm a função de desativar a ignição do motor em situações de emergência, prevenindo acidentes. São instalados dois botões mata: um próximo ao piloto, de fácil acesso durante a operação, e outro na parte externa do veículo, permitindo a atuação rápida por membros da equipe ou fiscais durante a competição.
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
                    Outra atribuição importante do subsistema é o controle da luz de freio, um elemento obrigatório para a segurança do veículo. A luz de freio é posicionada na parte traseira do carro, a uma altura de 1,2 metros, conforme os regulamentos, e tem a função de alertar os competidores e observadores sobre as frenagens, reduzindo os riscos de colisões durante as provas.
                    O objetivo central do subsistema de eletrônica é assegurar a integridade e a eficiência do carro, minimizando falhas e evitando contratempos ou gastos desnecessários. Combinando tecnologia de sensores e controle automatizado, a eletrônica do Baja é uma peça-chave para o sucesso da equipe em competições.
                    </article>
                </div>
        </div>
    )
}