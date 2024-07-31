import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ subUrl }) => {
  const navigate = useNavigate();

  return (
    <div>
      {subUrl ? (
        <>
          <header>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-blue">
              <div className="container-fluid">
                <a className="navbar-brand ms-0 ms-lg-5" onClick={() => navigate('/')}>
                  <img src="../logo.ico" alt="Bootstrap" width="30" height="24" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" onClick={() => navigate('/')} href="">Início</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate('/promo')} href="">Promoções</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate('/sobre')} href="">Sobre nós</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate('/online')} href="">Online</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Idiomas
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={() => navigate('/teste-de-en')} href="">Inglês</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/teste-de-pt')} href="">Português</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/teste-de-fr')} href="">Francês</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/teste-de-es')} href="">Espanhol</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Preços
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={() => navigate('/presencial')} href="">Presencial</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/online')} href="">Online</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/negocios')} href="">Inglês para negócios</a></li>
                      </ul>
                    </li>
                  </ul>
                  <a onClick={() => navigate('/sign-up')} href="" className="btn btn-primary bc-or mt-4 mt-lg-0" type="button">Inscrever-se</a>
                </div>
              </div>
            </nav>
          </header>
        </>
      ) : (
        <>
          <header>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-blue">
              <div className="container-fluid">
                <a className="navbar-brand ms-0 ms-lg-5" onClick={() => navigate('/')}>
                  <img src="logo.ico" alt="Bootstrap" width="30" height="24" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" onClick={() => navigate('/')} href="">Início</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate('/promo')} href="">Promoções</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate('/sobre')} href="">Sobre nós</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate('/online')} href="">Online</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Idiomas
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={() => navigate('/teste-de-en')} href="">Inglês</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/teste-de-pt')} href="">Português</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/teste-de-fr')} href="">Francês</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/teste-de-es')} href="">Espanhol</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Preços
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={() => navigate('/presencial')} href="">Presencial</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/online')} href="">Online</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/negocios')} href="">Inglês para negócios</a></li>
                      </ul>
                    </li>
                  </ul>
                  <a onClick={() => navigate('/sign-up')} href="" className="btn btn-primary bc-or mt-4 mt-lg-0" type="button">Inscrever-se</a>
                </div>
              </div>
            </nav>
          </header>
        </>
      )}
    </div>
  );
}

export default Navbar;
