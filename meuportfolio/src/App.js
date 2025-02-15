import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Projetos from './projetos'; // Importando o componente Projetos
import Home from './components/Home'; // Importando o componente Home

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV Leandro Rodrigues.pdf';
    link.download = 'Curriculo Leandro.pdf';
    link.click();
  };

  return (
    <Router>
      <div className="bg-gradient-to-r from-[#1C1C1D] via-[#2A2A2B] via-70% to-[#1E1E1F] text-white font-mono min-h-screen relative">

        {/* Menu */}
        <nav className="flex md:justify-end text-white">
          <div className=" p-[10px] text-nowrap h-[40px] w-full flex justify-center md:mt-0 md:flex space-x-4 md:w-[310px] md:h-[35px] md:p-[8px] md:pr-2.5 md:justify-end md:gap-2 rounded-tl-[20px] rounded-bl-[20px] border-b-2 border-blue-500">
            <Link to="/" className="hover:text-blue-400">Sobre mim</Link>
            <Link to="/projetos" className="hover:text-blue-400">Projetos</Link>
            <button onClick={downloadCV} className="hover:text-blue-400">Currículo</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home togglePopup={togglePopup} showPopup={showPopup} />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;