import { Button } from "./buttons/button";
import { ChevronRight } from "lucide-react";


export function Header() {
    
    return (
        <nav className="flex justify-between mx-6 border-b items-center border-red-600 ">
            <span className="text-[40px] font-bold mx-3 text-red-600 font-Knewave">E</span>
            <div className="flex gap-4 mx-3">
                <ChevronRight className="text-[#FF1D38]"/><Button anchor="sobre">Sobre</Button>
                <ChevronRight className="text-[#FF1D38]"/><Button anchor="formacao">Formação e certicações</Button>
            </div>
        </nav>
    )
}