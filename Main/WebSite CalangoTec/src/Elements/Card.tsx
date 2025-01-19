import { NavLink } from "react-router-dom";

export interface CardGenericoProps {
    titulo: string;
    descricao: string;
    imagem: string;
    id: string;
    link: string;
    icone?: string; // Caminho opcional para um ícone
}

function CardGenerico(props: CardGenericoProps) {
    return (
        <div
            className="relative w-[288px] h-[500px] rounded-lg shadow-lg overflow-hidden bg-gray-900 group"
            style={{
                backgroundImage: `url(${props.imagem})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Camada escura para contraste */}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300 ease-in-out"></div>

            {/* Conteúdo do card */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-yellow-300 z-10">
                <h3 className="text-2xl font-bold mb-2 uppercase">{props.titulo}</h3>
                <p className="text-sm mb-4 leading-relaxed line-clamp-3">{props.descricao}</p>

                {/* Botão de ação */}
                <NavLink
                    to={props.link}
                    className="inline-block self-start bg-yellow-500 text-gray-900 mb-6 py-2 px-4 rounded-md text-sm font-semibold hover:bg-yellow-600 transition-transform transform hover:scale-105"
                >
                    Saber mais
                </NavLink>
            </div>
        </div>
    );
}

export default CardGenerico;
