import { Github } from "lucide-react"
import { Linkedin } from "lucide-react"
export function LinksIcons() {
    return (
        <div className="w-[30px] left-10 right-auto z-10 bottom-0 fixed">
            <div className='flex flex-col justify-center items-center'>
                <a href="https://www.linkedin.com/in/eric-albuquerque-b08087218/" target="_blank" className='my-2 text-gray-400 hover:text-red-500 hover:transition duration-200 cursor-pointer' ><Linkedin /></a>
                <a href="https://github.com/erc-eu" target="_blank" className='my-2 text-gray-400 hover:text-red-500 hover:transition duration-200 cursor-pointer'><Github /></a>
                <div className='w-[0.1px] h-[150px] bg-gray-600 m-auto'></div>
            </div>
        </div>
    )
}