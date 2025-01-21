export interface SobreGenericoProps {
    foto1: string;
    foto2: string;
    texto1: string;
    texto2: string;
}

export default function SobreGenerico(props: SobreGenericoProps) {
    return (
        <div className="font-[Inter] flex flex-col items-center gap-16">
            <div className="w-4/5 flex flex-col items-center lg:flex-row gap-8">
                    <p className="text-justify lg:w-1/2 text-xl">
                    {props.texto1}
                    </p>
                    <div className="sm:w-1/2 flex justify-center">
                        <img src={props.foto1} alt="foto1" className="" />
                    </div>
                </div>
                <div className="w-4/5 md:w-2/3 flex flex-col items-center lg:flex-row gap-8">
                    <div className="sm:w-1/2 flex justify-center">
                        <img src={props.foto2} alt="foto2" className="" />
                    </div>
                    <p className="text-justify lg:w-1/2 text-xl">
                    {props.texto2}
                    </p>
                </div>
        </div>
    )
}