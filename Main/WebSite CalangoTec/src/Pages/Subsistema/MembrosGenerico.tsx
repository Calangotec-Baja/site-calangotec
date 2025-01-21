export interface Membro {
    nome: string;
    cargo: string;
    foto: string;
}

export default function MembrosGenerico(props: {membros: Membro[]}) {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="font-[Inter] flex flex-col w-4/5 items-center">
                <h1 className="text-2xl font-bold text-center">MEMBROS</h1>
                <p className="text-center text-xl">Conheça quem faz parte do nosso subsistema:</p>
                <div className="flex gap-16 flex-wrap justify-center py-4">
                    {props.membros.map((membro) => (
                        <div id={membro.nome} className="w-full md:w-1/4 flex flex-col items-center justify-end">
                            <img src={membro.foto} alt={membro.nome} className="w-full"/>
                            <p className="text-center text-xl">{membro.nome} - {membro.cargo}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}