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
                    imagem="/gastos.png" 
                    linkProjeto="https://gastos-residenciais.vercel.app" 
                    linkRepositorio="https://github.com/EldenXLe/Gastos-residenciais" 
                />
                <Projeto 
                    titulo="Consulta de Clima" 
                    descricao="Uma pagina que exibe o clima da sua região quando permitido obter a localidade e também permite pesquisar o clima de qualquer cidade do mundo!" 
                    tecnologias="ReactJS, TailwindCSS, fetch API" 
                    imagem="/consulClima.png" 
                    linkProjeto="https://consulta-clima-ten.vercel.app" 
                    linkRepositorio="https://github.com/EldenXLe/Consulta-Clima" 
                />
                
                <Projeto 
                    titulo="Wallpaper Gallery" 
                    descricao="Uma pagina de wallpapers que possui uma divisão por categorias." 
                    tecnologias="HTML5, CSS3, JavaScript" 
                    imagem="/wallpaperGallery.png" 
                    linkProjeto="https://wallpapergallery.netlify.app" 
                    linkRepositorio="https://github.com/EldenXLe/wallpaperGallery.git" 
                />
                
                <Projeto 
                    titulo="Organo Games" 
                    descricao="Uma pagina de criação de lista de jogos separado por categorias de acordo com o jogo." 
                    tecnologias="React, JavaScript" 
                    imagem="/organoGame.png" 
                    linkProjeto="https://organogames.netlify.app" 
                    linkRepositorio="https://github.com/EldenXLe/OrganoGames" 
                />
            </div>
        </div>
    );
}

export default Projetos;
