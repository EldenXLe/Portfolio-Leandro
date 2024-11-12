import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdRocketLaunch } from "react-icons/md";

function Projeto({ titulo, descricao, tecnologias, imagem, linkProjeto, linkRepositorio }) {
    return (
        <div className="hover:scale-[1.03] duration-300 md:w-[480px] border-2 border-[#2540c5] bg-gradient-to-r from-[#231d1d] to-[#9d9d9d] rounded-[15px]">
            <div>
                <img src={imagem} className='border-b-2 border-[white] w-full h-[200px] md:h-[300px] rounded-tl-[15px] rounded-tr-[15px]' alt={`${titulo} imagem`} />
            </div>
            <div className="p-4">
                <h1 className="text-2xl font-bold">{titulo}</h1>
                <p className="text-[15px]">{descricao}</p>
                <div className='p-4'>
                    <p className='text-[15px] font-italic pb-3'>Tecnologias: {tecnologias}</p>
                    <a href={linkProjeto} target="_blank" rel="noopener noreferrer" className='p-2'><MdRocketLaunch className="inline size-[25px]" /></a>
                    <a href={linkRepositorio} target="_blank" rel="noopener noreferrer"><FaGithub className="inline size-[25px]" /></a>
                </div>
            </div>
        </div>
    );
}

export default Projeto;
