// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CoursesSection from '../components/CoursesSection';
import AudienceSection from '../components/AudienceSection';
import cursosData from '../cursos.json';
import axios from 'axios';

const Home = () => {
    const [cursosPromocao, setCursosPromocao] = useState([]);

    useEffect(() => {
        /* fetch('../cursos.json')
            .then(response => response.json())
            .then(data => { */
        const cursos = [...cursosData.cursosOnline, ...cursosData.cursosPresencial, ...cursosData.cursosNegocios];
        const filteredCursos = cursos.filter(curso => curso.promocao === true && curso.precoPromocional === "16.800,00 Mt" && curso.id === 12);
        setCursosPromocao(filteredCursos);
        /* })
        .catch(error => console.error('Erro ao carregar os dados:', error)); */
    }, []);

    const config = {
        headers: { 'Content-Type': 'application/json' }
    }

    function handleSubmit(event) {
        event.preventDefault();
        document.querySelector('.spinner-wrapper').classList.remove('d-none');
        document.querySelector('.btn-submit').disabled = true;
        const email = document.querySelector("input[name='newsletter_email']").value;
        const formData = { newsletter_email: email }

        axios.post('http://localhost:3001/subscribe-newsletter', formData, config)
            .then(response => {
                document.querySelector('.spinner-wrapper').classList.add('d-none');
                document.getElementById('alertSuccess').classList.remove('d-none');
                document.querySelector('.btn-submit').disabled = false;
                setTimeout(()=>{
                    document.getElementById('alertSuccess').classList.add('d-none');
                }, 5000)

                email = "";
            })
            .catch(error => {
                document.querySelector('.spinner-wrapper').classList.add('d-none');
                document.getElementById('alertError').classList.remove('d-none');
                document.querySelector('.btn-submit').disabled = false;
                setTimeout(()=>{
                    document.getElementById('alertError').classList.add('d-none');
                }, 5000)
            });
    }
   
    return (
        <div>
            <NavigationBar />
            {/* Hero */}
            <section className="hero-section-home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="hero-title">A Maneira Divertida de Aprender Idiomas!</h1>
                            <p className="hero-text">
                                A Willow Language School (Maputo, Matola & Nampula) pretende oferecer aos moçambicanos a oportunidade de usar diversas línguas para dialogar com o mundo.
                            </p>
                            <a href="#" className="btn btn-primary bc-blue">Inscreva-se</a>
                        </div>
                        <div className="col-md-6 hero-image">
                            <img src="i1.webp" alt="Imagem Hero" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="promo-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="card promo-card shadow">
                                <div className="row no-gutters">
                                    <div className="col-md-6 promo-image">
                                        <img src="p1.png" className="w-100" alt="Promoção" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body h-100 d-flex flex-column">
                                            <h2 className="card-title">Promoção Especial</h2>
                                            <ul className="promo-list flex-grow-1 d-flex flex-column justify-content-evenly p-2 p-lg-0">
                                                {cursosPromocao.length > 0 ? (
                                                    <>
                                                        <div>
                                                            <span className="text-muted">Antes: <span className="text-decoration-line-through">{cursosPromocao[0].precoUnitario}</span></span>
                                                            <br />
                                                            <span className="text-dark">Agora: {cursosPromocao[0].precoPromocional}</span>
                                                        </div>
                                                        <li>Desconto de 30%</li>
                                                        <li>{cursosPromocao[0].nome} Intensivo</li>
                                                        <li>Para adultos e crianças</li>
                                                        <li>Duração: 8 semanas</li>
                                                        <li>Aulas: 5/8/24 á 27/9/24</li>
                                                    </>
                                                ) : (
                                                    <li>Não há promoções disponíveis no momento.</li>
                                                )}
                                            </ul>
                                            <a href="promo" className="btn btn-primary mt-auto bc-blue">Ir para promoções</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CoursesSection />
            <AudienceSection />
            {/* Why choose us */}
            <section className="why-us-section py-5" id="why-us">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="text-center mb-5">Porque aprender com a Willow Language School?</h2>
                    <div className="row">
                        <div className="col-md-3 why-us-item">
                            <i className="fas fa-chalkboard-teacher why-us-icon"></i>
                            <h5>Professores Experientes e Especializados</h5>
                        </div>
                        <div className="col-md-3 why-us-item">
                            <i className="fas fa-calendar-alt why-us-icon"></i>
                            <h5>Programas Flexíveis e Opções Personalizadas</h5>
                        </div>
                        <div className="col-md-3 why-us-item">
                            <i className="fas fa-smile why-us-icon"></i>
                            <h5>Ambiente de Sala de Aula Interativo e Divertido</h5>
                        </div>
                        <div className="col-md-3 why-us-item">
                            <i className="fas fa-users why-us-icon"></i>
                            <h5>Experiências Enriquecidas com Atividades Sociais e Culturais</h5>
                        </div>
                    </div>
                    <div className="solicite-teste p-3 rounded">
                        <h3><span>Já sabe o que quer?</span><br />
                            <span>Inscreva-se para os cursos Willow Language School!</span>
                        </h3>
                        <a href="sign-up" className="btn btn-outline-light">Clique aqui para se Inscrever</a>
                    </div>
                </div>
            </section>

            <section class="logos py-5">
                <h2 class="text-center mb-5">Nossos Parceiros</h2>
                <div class="logo_items">
                    <img src="parc/1.png" />
                    <img src="parc/2.png" />
                    <img src="parc/3.png" />
                    <img src="parc/4.png" />
                    <img src="parc/5.png" />
                    <img src="parc/6.png" />
                    <img src="parc/7.png" />
                    <img src="parc/8.png" />
                    <img src="parc/9.png" />
                    <img src="parc/1.png" />
                    <img src="parc/2.png" />
                    <img src="parc/3.png" />
                    <img src="parc/4.png" />
                    <img src="parc/5.png" />
                    <img src="parc/6.png" />
                    <img src="parc/7.png" />
                    <img src="parc/8.png" />
                    <img src="parc/9.png" />
                    <img src="parc/1.png" />
                    <img src="parc/2.png" />
                    <img src="parc/3.png" />
                    <img src="parc/4.png" />
                    <img src="parc/5.png" />
                    <img src="parc/6.png" />
                    <img src="parc/7.png" />
                </div>
                <div class="logo_items">
                    <img src="parc/1.png" />
                    <img src="parc/2.png" />
                    <img src="parc/3.png" />
                    <img src="parc/4.png" />
                    <img src="parc/5.png" />
                    <img src="parc/6.png" />
                    <img src="parc/7.png" />
                    <img src="parc/8.png" />
                    <img src="parc/9.png" />
                    <img src="parc/1.png" />
                    <img src="parc/2.png" />
                    <img src="parc/3.png" />
                    <img src="parc/4.png" />
                    <img src="parc/5.png" />
                    <img src="parc/6.png" />
                    <img src="parc/7.png" />
                    <img src="parc/8.png" />
                    <img src="parc/9.png" />
                    <img src="parc/1.png" />
                    <img src="parc/2.png" />
                    <img src="parc/3.png" />
                    <img src="parc/4.png" />
                    <img src="parc/5.png" />
                    <img src="parc/6.png" />
                    <img src="parc/7.png" />
                </div>
            </section>
            
            {/* pre-test */}
            <section className="pre-test-section py-5">
                <div className="container d-flex flex-column align-items-center">
                    <h3 className="text-center">Junte-se aos alunos da Willow Language School</h3>
                    <h3 className="text-center">Que quebram a barreira do idioma todos os dias.</h3>
                    <div className="row language-container">
                        <div className="language-item">
                            <div className="language-flag flag-pt"></div>
                            <div className="language-name">Português</div>
                        </div>
                        <div className="language-item">
                            <div className="language-flag flag-en"></div>
                            <div className="language-name">Inglês</div>
                        </div>
                        <div className="language-item">
                            <div className="language-flag flag-es"></div>
                            <div className="language-name">Espanhol</div>
                        </div>
                        <div className="language-item">
                            <div className="language-flag flag-fr"></div>
                            <div className="language-name">Francês</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Seção de Newsletter com Efeito Parallax */}
            <section className="newsletter-section">
                <div className="container">
                    <h2>Inscreva-se na nossa Newsletter</h2>
                    <p>Receba as últimas atualizações e ofertas diretamente em seu e-mail.</p>
                    {/* Alertas de sucesso e erro */}
                    <div id="alertSuccess" className="alert alert-success d-none" role="alert">
                        Inscrição na newsletter realizada com sucesso.
                    </div>
                    <div id="alertError" className="alert alert-danger d-none" role="alert">
                        Ocorreu um erro ao realizar a inscrição. Tente novamente.
                    </div>
                    <form className="newsletter-form" id="newsletterForm" onSubmit={handleSubmit}>
                        <input className="rounded-pill" type="email" name="newsletter_email" placeholder="Seu e-mail" required />
                        <button type="submit" className="btn btn-primary rounded-pill btn-submit">
                            <span class="btn-text">Inscreva-se</span>
                            <div class="spinner-border spinner-wrapper d-none ms-2" style={{width: "20px", height: "20px"}} role="status">
                                <span class="visually-hidden">...</span>
                            </div>
                        </button>
                    </form>
                </div>
            </section>
            <ContactSection />
            <Footer />
        </div>
    );
}

export default Home;