import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdRocketLaunch } from "react-icons/md";

function Projetos() {
    return (
        <div className="text-center mt-[30px]">
            <h1 className="text-2xl md:text-3xl font-bold">Projetos</h1>
            <p>Veja abaixo alguns dos meus principais projetos:</p>
            <div className="p-4 flex flex-col items-center space-y-2 gap-4">
                {/* Projeto 1 */}
                <div className="hover:scale-[1.03] duration-300 md:w-[480px] border-2 border-[#2540c5] bg-gradient-to-r from-[#231d1d] to-[#9d9d9d] rounded-[15px]">
                    <div>
                        <img src='/climaCon.png' className='border-b-2 border-[white] w-full h-[200px] md:h-[300px] rounded-tl-[15px] rounded-tr-[15px]'></img>
                    </div>
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">Consulta de Clima</h1>
                        <p className="text-[15px]">Uma pagina que exibe o clima da sua região quando permitido obter a localidade e também permite pesquisar o clima de qualquer cidade do mundo!</p>
                        <div className='p-4'>
                            <p className='text-[15px] font-italic pb-3'>Tecnologias: ReactJS, TailwindCSS, fetch API</p>
                            <a href="https://consulta-clima-ten.vercel.app" target="_blank" rel="noopener noreferrer" className='p-2'><MdRocketLaunch className="inline size-[25px]" /></a>
                            <a href="https://github.com/EldenXLe/Consulta-Clima" target="_blank" rel="noopener noreferrer"><FaGithub className="inline size-[25px]" /></a>
                        </div>
                    </div>
                </div>

                {/* Projeto 2 */}
                <div className="hover:scale-[1.03] duration-300 md:w-[480px] border-2 border-[#2540c5] bg-gradient-to-r from-[#231d1d] to-[#9d9d9d] rounded-[15px]">
                    <div>
                        <img src='/wallpaperGallery.png' className='border-b-2 border-[white] w-full h-[200px] md:h-[300px] rounded-tl-[15px] rounded-tr-[15px]'></img>
                    </div>
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">Wallpaper Gallery</h1>
                        <p className="text-[15px]">Uma pagina de wallpapers que possui uma divisão por categorias.</p>
                        <div className='p-4'>
                            <p className='text-[15px] font-italic pb-3'>Tecnologias: HTML5, CSS3, JavaScript</p>
                            <a href="https://wallpapergallery.netlify.app" target="_blank" rel="noopener noreferrer" className='p-2'><MdRocketLaunch className="inline size-[25px]" /></a>
                            <a href="https://github.com/EldenXLe/wallpaperGallery.git" target="_blank" rel="noopener noreferrer"><FaGithub className="inline size-[25px]" /></a>
                        </div>
                    </div>
                </div>

                {/* Projeto 3 */}
                <div className="hover:scale-[1.03] duration-300 md:w-[480px] border-2 border-[#2540c5] bg-gradient-to-r from-[#231d1d] to-[#9d9d9d] rounded-[15px]">
                    <div>
                        <img src='/organoGame.png' className='border-b-2 border-[white] w-full h-[200px] md:h-[300px] rounded-tl-[15px] rounded-tr-[15px]'></img>
                    </div>
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">Organo Games</h1>
                        <p className="text-[15px]">Uma pagina de criação de lista de jogos separado por categorias de acordo com o jogo.</p>
                        <div className='p-4'>
                            <p className='text-[15px] font-italic pb-3'>Tecnologias: React, JavaScript</p>
                            <a href="https://organogames.netlify.app" target="_blank" rel="noopener noreferrer" className='p-2'><MdRocketLaunch className="inline size-[25px]" /></a>
                            <a href="https://github.com/EldenXLe/OrganoGames" target="_blank" rel="noopener noreferrer"><FaGithub className="inline size-[25px]" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projetos;
