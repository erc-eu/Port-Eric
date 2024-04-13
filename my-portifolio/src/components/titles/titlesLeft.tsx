import { ComponentProps } from "react";


interface TitleLeftProps extends ComponentProps<'h2'> {
    title: string;
}

export function TitlesLeft(props: TitleLeftProps) {
    return (
        <h2 className="flex items-center relative my-10 md:my-0 w-full text-xl md:text-2xl lg:text-3xl xl:text-4xl font-Inconsolata font-bold text-gray-300">
            {props.title} <h2 className="block top-1 relative w-[500px] h-[1px] bg-gray-500 ml-5"></h2>
        </h2>
        // <div className="flex gap-4 items-center">
        //     <div className="flex border-b w-[800px]">
        //         <img src={props.img} /><span className="font-bold text-gray-300 text-[35px] font-K2D p-5">{props.title}</span>
        //     </div>
        // </div>
    )
}