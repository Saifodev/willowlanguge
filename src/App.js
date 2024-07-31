// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Ciclo from './pages/ciclo';
import Metodo from './pages/metodo';
import Testes from './pages/testes';
import Teste_en from './pages/teste-de-en';
import Teste_pt from './pages/teste-de-pt';
import Teste_fr from './pages/teste-de-fr';
import Teste_es from './pages/teste-de-es';
import Cursos from './pages/Cursos';
import Unidades from './pages/unidades';
import Politica_privacidade from './pages/politica-privacidade';
import Termos_uso from './pages/termos-uso';
import Promo from './pages/promo';
import Sign_up from './pages/sign-up';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/ciclo" element={<Ciclo />} />
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/testes" element={<Testes />} />
        <Route path="/teste-de-en" element={<Teste_en />} />
        <Route path="/teste-de-pt" element={<Teste_pt />} />
        <Route path="/teste-de-es" element={<Teste_es />} />
        <Route path="/teste-de-fr" element={<Teste_fr />} />
        <Route path="/:categoria" element={<Cursos />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/politica-privacidade" element={<Politica_privacidade />} />
        <Route path="/termos-uso" element={<Termos_uso />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/sign-up/:courseId?" element={<Sign_up />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </div>
  );
}

export default App;
