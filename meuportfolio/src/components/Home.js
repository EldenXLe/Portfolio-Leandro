import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
function Home({ togglePopup, showPopup }) {
  return (
    <>
      {/* Minha foto */}
      <div className="flex flex-col items-center mt-7 md:mt-0 md:absolute md:top-[75px] md:right-[80px]">
        {/* Foto */}
        <div className='hover:scale-105 duration-300 rounded-full md:shadow-[0_0_13px_5px_rgba(24,150,203,0.8)]'>
          <img src="https://github.com/EldenXLe.png" alt="Minha foto" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full object-cover border-[3px] border-blue-500" />
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center space-x-4 mt-5">
          <Link to="https://www.linkedin.com/in/leandro-rodrigues-3852781b8" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl hover:text-blue-400" aria-label="LinkedIn" /> </Link>
          <Link to="https://github.com/EldenXLe" target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl hover:text-blue-400" aria-label="GitHub" /></Link>
          <Link to="https://www.instagram.com/xle115x/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-2xl hover:text-blue-400" aria-label="Instagram" /></Link>
          <Link to="https://wa.me/5511942394442" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-2xl hover:text-blue-400" aria-label="WhatsApp" /> </Link>
        </div>
      </div>

      {/* Apresentação */}
      <div className="mt-5 p-4 md:p-0 md:flex md:justify-start md:mt-[80px] md:ml-[80px]">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="md:text-left md:text-[18px] md:w-[450px]">
            <Typewriter
              words={[
                "Olá, Eu sou Leandro Rodrigues! Sou desenvolvedor front-end com prazer em criar interfaces interativas e funcionais. Adoro transformar ideias em experiências digitais intuitivas e responsivas.",
              ]}
              typeSpeed={20}
              cursor
              cursorStyle="|"
              loop={1}
            />
          </h1>
          <p className='text-[15px] mt-[25px]'>Veja algumas de minhas habilidades:</p>
          <button onClick={togglePopup} className="mt-[10px] w-[120px] h-[35px] bg-gradient-to-r from-[#2540c5] to-[#9397ac] hover:bg-gradient-to-r hover:from-[#9397ac] hover:to-[#2540c5] hover:scale-105 duration-300 rounded-[8px]">
            Tecnologias
          </button>
        </div>
      </div>

      {/* minhas experiências */}
      <div className=" mt-6 p-4  md:p-0 md:flex md:flex-col md:ml-[80px] md:mt-[130px] space-y-2 gap-4">
        <h2 className="text-[20px] ">Um pouco sobre minhas experiências:</h2>

        <div className='space-y-4 md:space-y-0 md:flex md:space-x-4  md:mr-[80px]'>
          <div className='md:hover:scale-105 md:duration-300 p-4 border-2 border-[#2540c5] md:w-1/3 bg-gradient-to-r from-[#231d1d94] to-[#8a8a8abd]'>
            <h1 className='text-[18px] font-bold'>Analista de suporte técnico</h1>
            <h2>Oficina Inteligente</h2>
            <p>10/2023 - 10/2024</p>
            <p className='mt-3'>Suporte ao cliente que utilizava um sistema ERP para gerenciamento de vendas,
              ordem de serviço, contas a pagar e a receber, emissão de notas, controle de DRE e etc. Fazia a tratativa de erros e prestava auxílio em dúvidas.</p>
          </div>

          <div className='md:hover:scale-105 md:duration-300 p-4 border-2 border-[#2540c5] md:w-1/3 bg-gradient-to-r from-[#231d1d94] to-[#8a8a8abd]'>
            <h1 className='text-[18px] font-bold'>Atendente Multitarefas</h1>
            <h2>Poupatempo</h2>
            <p>11/2022 - 07/2023</p>
            <p className='mt-3'>Atendimento ao cidadão que buscava ajuda nos processos de renovação de CNH, RG.
              Execução de processos de transferencia vehicular e validação de documentos.</p>
          </div>

          <div className='md:hover:scale-105 md:duration-300 p-4 border-2 border-[#2540c5] md:w-1/3 bg-gradient-to-r from-[#231d1d94] to-[#8a8a8abd]'>
            <h1 className='text-[18px] font-bold'>Suporte Técnico N1 e N2</h1>
            <h2>Concentrix</h2>
            <p>05/2022 - 11/2022</p>
            <p className='mt-3'>Atendia clientes com duvidas e problemas nos celulares, computadores, smartwatchs e outros aparelhos
              da empresa que prestavamos suporte. Executávamos testes de desempenho e investigavamos problemas para melhores tratativas.</p>
          </div>
        </div>
      </div>

      {/* Formações */}
      <div className="p-4 md:flex justify-center items-center md:mt-[60px] md:p-5">
        <div className="md:flex md:flex-col md:items-center space-y-2 gap-4">
          <h2 className="hidden md:block md:text-2xl font-bold">------------------------- Formações -------------------------</h2>
          <h2 className="md:hidden text-center text-[20px] font-bold">Formações</h2>

          {/* Formação ADS */}
          <div className="md:hover:scale-105 md:duration-300 border-2 border-[#2540c5] md:w-[800px] md:h-[150px] p-4 bg-gradient-to-r from-[#1d1e23] to-[#595f94] rounded-[15px]">
            <div className='justify-center text-center md:flex md:justify-between'>
              <h1 className="font-bold text-[18px]">Analise e Desenvolvimento de Sistemas</h1>
              <h2 className="md:font-bold text-[15px]">Cruzeiro do Sul</h2>
            </div>
            <p className='text-center md:text-left md:text-[14px]'>02/2020 - 02/2022</p>
            <p className='text- mt-3 md:mt-0'>Desenvolvimento de diversos projetos envolvendo diferentes tipos de metodologias e linguagens de programação.</p>
          </div>

          {/* Formação GTI */}
          <div className="md:hover:scale-105 md:duration-300 border-2 border-[#2540c5] md:w-[800px] md:h-[150px] p-4 bg-gradient-to-r from-[#1d1e23] to-[#595f94] rounded-[15px]">
            <div className='justify-center text-center md:flex md:justify-between'>
              <h1 className="font-bold text-[18px]">Gestão da Tecnologia da Informação</h1>
              <h2 className="md:font-bold text-[15px]">UNINTER</h2>
            </div>
            <p className='text-center md:text-left md:text-[14px]'>09/2023 - 03/2026</p>
            <p></p>
          </div>

        </div>
      </div>

      {/* Popup de Tecnologias*/}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out ${showPopup ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className=" md:w-[300px] p-6 md:p-4 bg-gradient-to-b from-blue-900 via-blue-700 to-purple-900 rounded-lg  text-white relative">
          <div className='flex flex-col justify-center items-center'>
            <h3 className="text-lg font-bold mb-4">Tecnologias</h3>
            <ul className="space-y-2">
              <li><FaHtml5 className="inline size-[30px]" /> HTML5</li>
              <li><FaCss3Alt className="inline size-[30px]" /> CSS3</li>
              <li><FaJs className="inline size-[30px]" /> JavaScript</li>
              <li><FaReact className="inline size-[30px]" /> ReactJS</li>
              <li><SiTypescript className="inline size-[30px]" /> TypeScript</li>
              <li><FaGithub className="inline size-[30px]" /> Git&Github</li>
              <li><SiTailwindcss className="inline size-[30px]" /> Tailwind CSS</li>
            </ul>
            <button onClick={togglePopup} className="absolute top-2 right-2 bg-[#b44747c9] rounded-full w-6 h-6 flex items-center justify-center">
              X
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;