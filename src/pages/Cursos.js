// Cursos.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import cursosData from '../cursos.json';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Cursos = () => {
  const { categoria } = useParams();
  const [cursos, setCursos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (categoria === 'online') {
      setCursos(cursosData.cursosOnline);
      setTitle('Cursos Online');
    } else if (categoria === 'presencial') {
      setCursos(cursosData.cursosPresencial);
      setTitle('Cursos Presenciais');
    } else if (categoria === 'negocios') {
      setCursos(cursosData.cursosNegocios);
      setTitle('Cursos de Inglês para Negócios');
    }
  }, [categoria]);

  return (
    <div>
      <NavigationBar />
      <main>
        <Hero
          title="Willow Language School"
          text=""
          buttonLabel="faça um teste diagnostico"
          buttonLink="sign-up"
        />
        <section className="courses-section py-5">
          <div className="container">
            <h2 className="text-center mb-5" id="modalidadeTitle">{title}</h2>
            <div className="row" id="cursos">
              {cursos.map(curso => (
                <div key={curso.id} className="col-md-4">
                  <div className="card course-card" id={`curso-${curso.id}`}>
                    <img
                      src="../icone.webp"
                      style={{ maxWidth: '80px', maxHeight: '80px', margin: '1rem' }}
                      className="card-img-top"
                      alt={curso.nome}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{curso.nome}</h5>
                      <p className="card-text"><strong>Regime:</strong> {curso.regime}</p>
                      <p className="card-text"><strong>Duração:</strong> {curso.duracao}</p>
                      <p className="card-text"><strong>Carga Horária:</strong> {curso.cargaHoraria}</p>
                      <p className="card-text"><strong>Preço Unitário:</strong> {curso.precoUnitario}</p>
                      {curso.promocao && (
                        <p className="card-text"><strong>Promoção:</strong> {curso.precoPromocional}</p>
                      )}
                    </div>
                    <div className="card-footer">
                      <Link to={`/sign-up/${curso.id}`} className="btn btn-outline-dark">Inscrever-se</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Cursos;