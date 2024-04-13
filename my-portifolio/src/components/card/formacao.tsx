


interface FormacaoProps {
    img: string;
    titulo: string;
    localizacao?: string;
    data: string;
    link?: string;
    plataforma?: string;
    cl?: string;
}

export function Formacao(props: FormacaoProps) {
    return (
        <div className="p-5 pt-10 flex ">
            <img className='w-52 h-32' src={props.img} alt="" />
            <div className="flex flex-col">
                <h2 className="text-gray-300 text-[30px] mx-12 font-Inconsolata">{props.titulo}</h2>
                <h3 className="text-gray-400 text-[15px] mx-12 font-Inconsolata">{props.localizacao}</h3>
                <h3 className="text-gray-400 text-[15px] mx-12 font-Inconsolata">{props.data}</h3>
                <h3 className="text-gray-400 text-[15px] mx-12 font-Inconsolata">{props.plataforma}</h3>
                <a href={props.link} target="_blank" className="text-red-400 text-[15px] mx-12 font-Inconsolata">{props.link}</a>
            </div>
        </div>
    )
}