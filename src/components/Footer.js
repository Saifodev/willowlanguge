import React from 'react';
import { useNavigate, BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Footer = ({ subUrl }) => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {subUrl ? (
        <>
          <footer className="footer">
            <div className="container">
              <div className="row">
                {/* Coluna 1 */}
                <div className="col-md-3 footer-column">
                  <div className="footer-logo">
                    <img className="rounded" src="../logo.ico" alt="Willow Language School" />
                  </div>
                  <div className="footer-social-icons d-flex flex-row">
                    <a href="https://www.facebook.com/willowlanguageschool/" target="_blank" className="me-3">
                      <img src="../social icons/facebook.png" alt="facebook" width="30" height="30" />
                    </a>
                    <a href="https://www.instagram.com/willow_language_school" target="_blank" className="me-3">
                      <img src="../social icons/instagram.png" alt="instagram" width="30" height="30" />
                    </a>
                  </div>
                </div>
                {/* Coluna 2 */}
                <div className="col-md-3 footer-column">
                  <h5>Encontre um Curso</h5>
                  <a onClick={() => navigate('/testes')} href="">Teste de idiomas</a>
                  <a onClick={() => navigate('/teste-de-en')} href="">Teste de inglês</a>
                  <a onClick={() => handleNavigation('/online')} href="">Todos os cursos online</a>
                  <a onClick={() => handleNavigation('/presencial')} href="">Todos os cursos presencial</a>
                  <a onClick={() => handleNavigation('/negocios')} href="">Cursos de inglês para negócio</a>
                  <a to="/sign-up">Inscreva-se</a>
                </div>
                {/* Coluna 3 */}
                <div className="col-md-3 footer-column">
                  <h5>Sobre</h5>
                  <a onClick={() => navigate('/sobre')} href="">Sobre nós</a>
                  <a href="./#why-us" onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      window.scrollTo(0, document.getElementById('why-us'));
                    }, 0);
                  }}>Por que nós?</a>
                  <a onClick={() => navigate('/metodo')} href="">Método</a>
                  <a onClick={() => navigate('/ciclo')} href="ciclo">Ciclo de aprendizado</a>
                  <a href="/testes#proficiency-levels" onClick={() => {
                    navigate('/teste');
                    setTimeout(() => {
                      window.scrollTo(0, document.getElementById('proficiency-levels'));
                    }, 0);
                  }}>Níveis de proficiência</a>
                </div>
                {/* Coluna 4 */}
                <div className="col-md-3 footer-column">
                  <h5>Fale Conosco</h5>
                  <a href="#contact" onClick={() => window.scrollTo(0, document.getElementById('contact').offsetTop)}>Contato</a>
                  {/*  <a onClick={() => navigate('/unidades')} href="">Unidades</a> */}
                </div>
              </div>
              {/* Segunda linha do footer */}
              <div className="footer-bottom">
                <div className="container d-flex justify-content-between">
                  <div>&copy; <span className="year">2024</span> Rassul Mahando ™, Inc. Todos os direitos reservados.</div>
                  <div>
                    <a onClick={() => navigate('/politica-privacidade')} href="">Política de Privacidade</a> |
                    <a onClick={() => navigate('/termos-uso')} href="">Termos de uso</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>) : (
        <>
          <footer className="footer">
            <div className="container">
              <div className="row">
                {/* Coluna 1 */}
                <div className="col-md-3 footer-column">
                  <div className="footer-logo">
                    <img className="rounded" src="logo.ico" alt="Willow Language School" />
                  </div>
                  <div className="footer-social-icons d-flex flex-row">
                    <a href="https://www.facebook.com/willowlanguageschool/" target="_blank" className="me-3">
                      <img src="social icons/facebook.png" alt="facebook" width="30" height="30" />
                    </a>
                    <a href="https://www.instagram.com/willow_language_school" target="_blank" className="me-3">
                      <img src="social icons/instagram.png" alt="instagram" width="30" height="30" />
                    </a>
                  </div>
                </div>
                {/* Coluna 2 */}
                <div className="col-md-3 footer-column">
                  <h5>Encontre um Curso</h5>
                  <a onClick={() => navigate('/testes')} href="">Teste de idiomas</a>
                  <a onClick={() => navigate('/teste-de-en')} href="">Teste de inglês</a>
                  <a onClick={() => handleNavigation('/online')} href="">Todos os cursos online</a>
                  <a onClick={() => handleNavigation('/presencial')} href="">Todos os cursos presencial</a>
                  <a onClick={() => handleNavigation('/negocios')} href="">Cursos de inglês para negócio</a>
                  <a to="/sign-up">Inscreva-se</a>
                </div>
                {/* Coluna 3 */}
                <div className="col-md-3 footer-column">
                  <h5>Sobre</h5>
                  <a onClick={() => navigate('/sobre')} href="">Sobre nós</a>
                  <a href="./#why-us" onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      window.scrollTo(0, document.getElementById('why-us'));
                    }, 0);
                  }}>Por que nós?</a>
                  <a onClick={() => navigate('/metodo')} href="">Método</a>
                  <a onClick={() => navigate('/ciclo')} href="ciclo">Ciclo de aprendizado</a>
                  <a href="/testes#proficiency-levels" onClick={() => {
                    navigate('/teste');
                    setTimeout(() => {
                      window.scrollTo(0, document.getElementById('proficiency-levels'));
                    }, 0);
                  }}>Níveis de proficiência</a>
                </div>
                {/* Coluna 4 */}
                <div className="col-md-3 footer-column">
                  <h5>Fale Conosco</h5>
                  <a href="#contact" onClick={() => window.scrollTo(0, document.getElementById('contact').offsetTop)}>Contato</a>
                  {/* <a onClick={() => navigate('/unidades')} href="">Unidades</a> */}
                </div>
              </div>
              {/* Segunda linha do footer */}
              <div className="footer-bottom">
                <div className="container d-flex justify-content-between">
                  <div>&copy; <span className="year">2024</span> Rassul Mahando ™, Inc. Todos os direitos reservados.</div>
                  <div>
                    <a onClick={() => navigate('/politica-privacidade')} href="">Política de Privacidade</a> |
                    <a onClick={() => navigate('/termos-uso')} href="">Termos de uso</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Footer;
