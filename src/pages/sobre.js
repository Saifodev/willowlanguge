// src/pages/Sobre.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Sobre = () => {
    const navigate = useNavigate();

    return (
        <div>
            <NavigationBar />
            <main>
                <Hero
                    title="Hoje um leitor, amanhã um líder."
                    text=""
                    buttonLabel="faça um teste diagnostico"
                    buttonLink="sign-up"
                />

                {/* Mission Section */}
                <section className="our-story-section py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h2 className="story-title">Nossa Missão</h2>
                                <p className="story-description">
                                    A Willow Language School foi fundada com o objetivo de proporcionar aos moçambicanos a
                                    oportunidade de usar diversas línguas para dialogar com o mundo. Presente em todo o
                                    território nacional, nossa escola está comprometida em transformar sua paixão pelo
                                    aprendizado de idiomas em uma realidade tangível. Orgulhamo-nos de oferecer a melhor
                                    educação em idiomas, contando com uma equipe altamente especializada, métodos de ensino
                                    modernos e uma abordagem centrada no aluno. Na Willow Language School, acreditamos que o
                                    aprendizado de idiomas é uma porta aberta para novas oportunidades e conexões globais. Venha
                                    fazer parte desta jornada e descubra como podemos ajudá-lo a alcançar seus objetivos
                                    linguísticos.
                                </p>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <img src="mission.webp" alt="Parceiros" className="img-fluid"
                                    style={{ maxWidth: "350px", alignSelf: "center" }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Commitment Section */}
                <section className="commitment-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center">
                                <h2 className="commitment-title">Nosso compromisso</h2>
                                <p className="commitment-description">
                                    Descubra por que somos a escolha número um para aqueles que estão comprometidos em dominar
                                    novas línguas:
                                </p>
                                <ul className="commitment-list">
                                    <li><strong>Professores Experientes e Especializados:</strong> Nossa equipe é composta
                                        por educadores apaixonados e altamente qualificados, prontos para guiá-lo em cada etapa
                                        do caminho.</li>
                                    <li><strong>Programas Flexíveis e Opções Personalizadas:</strong> Reconhecemos que cada
                                        aluno é único, por isso oferecemos programas adaptados às suas necessidades e objetivos
                                        individuais.</li>
                                    <li><strong>Ambiente de Sala de Aula Interativo e Divertido:</strong> Aprender não
                                        precisa ser chato! Na Willow Language School, combinamos tecnologia moderna e métodos de
                                        ensino inovadores para tornar suas aulas envolventes e dinâmicas.</li>
                                    <li><strong>Experiências Enriquecidas com Atividades Sociais e Culturais:</strong> Não se
                                        trata apenas de aprender o idioma, mas também de mergulhar na cultura e na vida
                                        cotidiana dos falantes nativos. Oferecemos uma variedade de atividades sociais e
                                        culturais para enriquecer sua experiência de aprendizado.</li>
                                    <li><strong>Nossos Programas:</strong> Escolha entre uma variedade de cursos, incluindo
                                        Cursos Gerais de Idiomas, Inglês para Negócios, Cursos de Preparação para Exames e
                                        Habilidades de Conversação e Comunicação.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Serving the World Through Learning Section */}
                <section className="learning-section py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mb-4">
                                <h2 className="learning-title">Servindo o mundo através da aprendizagem</h2>
                                <p className="learning-description">Veja alguns dos nossos vídeos de aulas e apresentações dos
                                    alunos.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-4">
                                <div className="video-wrapper">
                                    <iframe src="https://www.youtube.com/embed/q_rAb_2xEwQ" title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="video-wrapper">
                                    <iframe src="https://www.youtube.com/embed/YZs0ajC7pzA?si=bmaJTIbBGIzCs9mZ"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="video-wrapper">
                                    <iframe src="https://www.youtube.com/embed/XFhiNnf4IUg?si=EV0EPgqpesIiXlbk"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="partners-section py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h2 className="partners-title">Nossos Parceiros</h2>
                                <p className="partners-description">Temos o orgulho de trabalhar com parceiros excepcionais que
                                    compartilham nossa visão e valores. Juntos, construímos um futuro melhor.</p>
                            </div>
                            <div className="col-lg-6">
                                <img src="parceiros.webp" alt="Parceiros" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* How Learning Works at Willow Section */}
                <section class="how-it-works-section py-5">
                    <div class="container">
                        <div class="row text-center mb-4">
                            <div class="col mb-5">
                                <h2 class="how-it-works-title">Como Funciona o Aprendizado com a Willow</h2>
                                <p class="mb-0">Está pronto para começar sua jornada de aprendizado de idiomas de uma maneira
                                    divertida e eficaz?</p>
                                <p class="mb-0">Descubra como isso funciona e porquê somos educadores globais confiáveis ​​há
                                    tantos anos.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 mb-4">
                                <div class="card how-it-works-step">
                                    <img src="metodos.webp" class="card-img-top" alt="Método da Willow" />
                                        <div class="card-header">
                                            <h3 class="card-title">O Método da Willow</h3>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Nosso método é baseado em técnicas de ensino modernas e
                                                comprovadas, que combinam teoria e prática para garantir que você aprenda de forma
                                                eficiente e divertida. Utilizamos recursos tecnológicos e métodos interativos para
                                                manter você engajado e motivado durante todo o processo de aprendizado.</p>
                                        </div>
                                        <div class="card-footer"><a href="../metodo" onClick={() => navigate('/metodo')} class="btn btn-outline-dark">Saiba mais</a></div>
                                </div>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <div class="card how-it-works-step">
                                    <img src="proficiencia.webp" class="card-img-top" alt="Níveis de Proficiência" />
                                        <div class="card-header">
                                            <h3 class="card-title">Níveis de Proficiência</h3>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Oferecemos cursos que abrangem todos os níveis de proficiência,
                                                desde iniciantes até avançados. Avaliamos seu nível atual e ajustamos nosso ensino
                                                para atender às suas necessidades específicas, garantindo que você progrida de
                                                maneira constante e eficaz.</p>
                                        </div>
                                        <div class="card-footer"><a href="../proficiencia"
                                            class="btn btn-outline-dark">Saiba mais</a></div>
                                </div>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <div class="card how-it-works-step">
                                    <img src="ciclo.webp" class="card-img-top" alt="Ciclo de Aprendizado" />
                                        <div class="card-header">
                                            <h3 class="card-title">Ciclo de Aprendizado</h3>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">Nosso ciclo de aprendizado é projetado para ser contínuo e
                                                progressivo. Começamos com uma avaliação inicial, seguida por aulas estruturadas e
                                                atividades práticas. Realizamos avaliações periódicas para monitorar seu progresso e
                                                ajustar nosso ensino conforme necessário para garantir que você atinja seus
                                                objetivos linguísticos.</p>
                                        </div>
                                        <div class="card-footer"><a href="../ciclo" onClick={() => navigate('/ciclo')} class="btn btn-outline-dark">Saiba mais</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default Sobre;