import React from 'react';
import Projeto from './components/projeto';

function Projetos() {
    return (
        <div className="text-center mt-[30px]">
            <h1 className="text-2xl md:text-3xl font-bold">Projetos</h1>
            <p>Veja abaixo alguns dos meus principais projetos:</p>
            <div className="p-4 flex flex-col items-center space-y-2 gap-4">
                <Projeto
                    titulo="Controle de gastos residenciais"
                    descricao="Uma aplicação que permite o usuário controlar seus gastos, cadastrando pessoas, registrando transações de receitas e despesas, e visualizando um resumo financeiro detalhado."
                    tecnologias="ReactJS, React Router, CSS, local storage"
                    imagem="/imgs/gastos.png"
                    linkProjeto="https://gastos-residenciais.vercel.app"
                    linkRepositorio="https://github.com/EldenXLe/Gastos-residenciais"
                />
                <Projeto
                    titulo="Consulta de Clima"
                    descricao="Uma pagina que exibe o clima da sua região quando permitido obter a localidade e também permite pesquisar o clima de qualquer cidade do mundo!"
                    tecnologias="ReactJS, TailwindCSS, fetch API"
                    imagem="/imgs/consulClima.png"
                    linkProjeto="https://consulta-clima-ten.vercel.app"
                    linkRepositorio="https://github.com/EldenXLe/Consulta-Clima"
                />

                <Projeto
                    titulo="Pokedex"
                    descricao="Este é um projeto de Pokedex desenvolvido como parte do Bootcamp Dio Fullstack. 
                        O objetivo deste projeto é criar uma aplicação web que exibe uma lista de Pokémons 
                        e permite visualizar detalhes de cada Pokémon."
                    tecnologias="HTML5, CSS3, JavaScript, Fetch API"
                    imagem="/imgs/pokedex.png"
                    linkProjeto="https://pokedex-rho-khaki-63.vercel.app"
                    linkRepositorio="https://github.com/EldenXLe/Pokedex.git"
                />

                <Projeto
                    titulo="Wallpaper Gallery"
                    descricao="Uma pagina de exibição de wallpapers, contendo o genero de animes e games, exibidos de forma dinamica por api."
                    tecnologias="HTML5, CSS3, JavaScript, Fetch API"
                    imagem="/imgs/wallpaperGallery.png"
                    linkProjeto="https://wallpapergallery.netlify.app"
                    linkRepositorio="https://github.com/EldenXLe/wallpaperGallery.git"
                />
            </div>
        </div>
    );
}

export default Projetos;
