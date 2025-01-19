import { useEffect, useState } from "react";
import Carousel, { ArrowProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardGenerico from "./Card";
import eletronicaCard from '../assets/imgCards/eletronicaCard.png'
import estrutCard from '../assets/imgCards/estrutCard.png'
import suspCard from '../assets/imgCards/suspCard.png'
import freioCard from '../assets/imgCards/freioCard.png'
import pwtCard from '../assets/imgCards/pwtCard.png'
import gestaoCard from '../assets/imgCards/gestaoCard.png'
import calcCard from '../assets/imgCards/calcCard.png'

// Configuração do carrossel
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 3,
        slidesToSlide: 1, // Quantidade de slides por rolagem
    },
    tablet: {
        breakpoint: { max: 1300, min: 925 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 925, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};




export default function CarroselGenerico() {
    const [cards, setCards] = useState<any[]>([]);

    useEffect(() => {
        const cardsExemplo = [
            { id: "1", titulo: "ELETRÔNICA", descricao: "O subsistema de eletrônica desempenha um papel crucial no desempenho e na segurança do veículo Baja, sendo responsável pelo monitoramento em tempo real de diversas condições operacionais do carro...", imagem: eletronicaCard, link: "#"},
            { id: "2", titulo: "POWERTRAIN", descricao: "O subsistema de powertrain em um veículo Baja SAE desempenha um papel fundamental no projeto, desenvolvimento e otimização do sistema de transmissão e tração", imagem: pwtCard, link: "/manutencao/2", icone: "/icone2.svg" },
            { id: "3", titulo: "ESTRUTURA", descricao: "Adicionar descrição", imagem: estrutCard, link: "/eficiencia/3", icone: "/icone3.svg" },
            { id: "4", titulo: "SUSPENSÃO", descricao: "O subsistema de suspensão e direção é a área responsável pela dinâmica do veículo, consistindo em buscar a melhor resposta do carro frente às inconformidades", imagem: suspCard, link: "/eletronica/4", icone: "/icone4.svg" },
            { id: "5", titulo: "GESTÃO", descricao: "A Gestão da equipe no Baja é realizada para o bom andamento de todas as demais atividades dos outros subsistemas. Esse subsistema", imagem:gestaoCard , link: "/sustentabilidade/5", icone: "/icone5.svg" },
            { id: "6", titulo: "FREIOS", descricao: "No subsistema de freios de um veículo Baja SAE, o foco está no projeto, desenvolvimento e validação de um sistema de frenagem eficiente,", imagem: freioCard, link: "/inovacao/6", icone: "/icone6.svg" },
            { id: "6", titulo: "CÁLCULO ESTRUTURAL", descricao: "Adicionar descrição.", imagem: calcCard, link: "/inovacao/6", icone: "/icone6.svg" },

        ];
        setCards(cardsExemplo);
    }, []);

    return (
        <div className="relative w-[80%] mx-auto">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={false}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="px-10" // Espaçamento igual entre os cards
                
            >
                {cards.map((card) => (
                    <CardGenerico
                        key={card.id}
                        titulo={card.titulo}
                        descricao={card.descricao}
                        imagem={card.imagem}
                        link={card.link}
                        icone={card.icone}
                        id={card.id}
                    />
                ))}
            </Carousel>
        </div>
    );
}
