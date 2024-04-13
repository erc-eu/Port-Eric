import { TitlesLeft } from "./titles/titlesLeft";
import { TecnologiasCard } from "./card/tecnologiasCard";
import LogoUFC from '../assets/logoUFC.png'
import LogoRocket from '../assets/rocketseat.png'
import LogoEEEP from '../assets/eeep.png'
import Myphoto from '../assets/myphoto.png'
import { Formacao } from "./card/formacao";

export function Content() {
    return (
        <main className="w-[100%] w-max-[1600px] min-h-[100vh] px-[100px] py-0 m-auto">

            <section className='flex flex-col max-w-[1000px] m-auto justify-center items-start min-h-80 '>
                <div className="text-[#FF1D38] font-Inconsolata">
                    <h1 className="pb-[30px] pl-2">Oi, meu nome é</h1>
                </div>
                <div>
                    <h1 className="text-gray-300 text-8xl mx-0 font-K2D">Eric Albuquerque</h1>
                </div>
            </section>

            <section className='flex flex-col max-w-[1000px] m-auto pt-[300px] justify-center items-start min-h-80 '>
                <div className="pt-16" id="sobre">
                    <TitlesLeft title="Sobre Mim" id="sobremim" />
                    <div className='flex mt-[50px] items-center'>
                        <div className='flex bg-red-700 hover:bg-transparent transition duration-200'>
                            <div className=' opacity-[0.6] hover:scale-105 hover:opacity-[1] transition duration-200'>
                                <img className="w-[250px] h-[250px] " src={Myphoto} alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='w-[650px] text-justify m-auto ml-12 text-[20px] font-K2D text-gray-400'>
                                Meu nome é Eric, Estudante universitário cursando ciência da computação, gosto muito de
                                desenvolvimento web. meu começo na área de desenvolvimento começou em 2017, quando adentrei no ensino médio
                                em um curso de tecnico em informática, onde aprendi muito sobre HTML e CSS. Desde então venho me aprimorando,
                                desenvolvendo e buscando novas habilidades. </p>
                        </div>
                    </div>
                    <div className='flex flex-col mt-[50px]'>
                        <h2 className="text-[20px] text-gray-400 font-K2D">Tecnologias que venho estudando e utilizando recentemente</h2>
                        <TecnologiasCard />
                    </div>
                </div>
                <div className="pt-16" id="formacao">
                    <TitlesLeft title="Formação e Certificações" />
                    <Formacao img={LogoUFC} titulo={"Universidade Federal do Ceará"} localizacao={"Campus Crateús ( CE )"} data={" 2021.1  - em andamento..."} />
                    <Formacao img={LogoEEEP} titulo={"EEEP Deputado José Maria Melo - Ensino médio"} localizacao={"Guaraciaba do Norte ( CE )"} data={" 2017  -  2019 "} />
                    <Formacao img={LogoRocket} titulo={"NLW Unite - Nodejs"} data={" Data de emissão: 06/04/2024 "} plataforma="Plataforma: RocketSeat" link="https://app.rocketseat.com.br/certificates/b607be34-28e8-4887-a4c2-635dbf7a1175" />
                    <Formacao img={LogoRocket} titulo={"NLW Unite - Reactjs"} data={" Data de emissão: 06/04/2024 "} plataforma="Plataforma: RocketSeat" link="https://app.rocketseat.com.br/certificates/a97b7d68-9480-46f5-809e-8d8b7e129cd5" />
                    <Formacao img={LogoRocket} titulo={"NLW Unite - DevOps"} data={" Data de emissão: 07/04/2024 "} plataforma="Plataforma: RocketSeat" link="https://app.rocketseat.com.br/certificates/2bcfa83f-14b2-4290-b251-871a6a2daa4b" />

                </div>
            </section>

        </main>
    )
}