// src/pages/testes.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Testes = () => {
    const navigate = useNavigate();

    function showLevel(level) {
        const levelInfos = document.querySelectorAll('.level-info');
        levelInfos.forEach(info => {
            info.classList.remove('active');
        });
        document.getElementById('level-' + level).classList.add('active');
    }

    /* document.addEventListener('DOMContentLoaded', function () {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }); */
    return (
        <div>
            <NavigationBar />
            <main>
                <Hero
                    title="Teste de Idiomas"
                    text="Faça um teste diagnóstico para avaliar seu nível de proficiência."
                    buttonLabel="faça um teste diagnostico"
                    buttonLink="sign-up"
                />
                {/* Description Section */}
                <section class="description-section py-5">
                    <div class="container">
                        <div class="row shadow-sm py-5">
                            <div class="col-md-6 d-none">
                                <img src="path-to-your-image.jpg" class="img-fluid" alt="Descrição do Teste de Idiomas" />
                            </div>
                            <div class="col-md">
                                <h2 class="description-title">Teste de proficiência</h2>
                                <p class="description-text">A Willow Language School oferece testes para ajudar a avaliar seu nível de proficiência. Nossos testes são abrangentes e adaptados para fornecer uma avaliação precisa de suas habilidades linguísticas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Proficiency Levels Section */}
                <section class="proficiency-levels" id="proficiency-levels">
                    <div class="container">
                        <div class="row shadow-sm rounded py-5 bg-light">
                            {/* Lado esquerdo */}
                            <div class="col-md-6">
                                <div id="level-0" class="level-info active">
                                    <h3>Nível 0: <span class="text-succes">Iniciação</span></h3>
                                    <p>Você está começando a aprender o idioma. Este nível é para familiarizar-se com os
                                        fundamentos básicos e estruturas simples.</p>
                                </div>
                                <div id="level-A1" class="level-info">
                                    <h3>Nível A1: <span class="text-succes">Elementar</span></h3>
                                    <p>Você consegue usar o idioma em situações cotidianas simples. Pode lidar com informações
                                        concretas e familiares.</p>
                                </div>
                                <div id="level-A2" class="level-info">
                                    <h3>Nível A2: <span class="text-succes">Elementar</span></h3>
                                    <p>Você consegue compreender frases e expressões usadas frequentemente relacionadas a áreas
                                        de importância imediata.</p>
                                </div>
                                <div id="level-B1" class="level-info">
                                    <h3>Nível B1: <span class="text-succes">Intermediário</span></h3>
                                    <p>Você consegue lidar com a maioria das situações encontradas enquanto viaja em uma região
                                        onde o idioma é falado.</p>
                                </div>
                                <div id="level-B2" class="level-info">
                                    <h3>Nível B2: <span class="text-succes">Intermediário Avançado</span></h3>
                                    <p>Você consegue entender as ideias principais de textos complexos sobre temas concretos e
                                        abstratos.</p>
                                </div>
                                <div id="level-C1" class="level-info">
                                    <h3>Nível C1: <span class="text-succes">Avançado</span></h3>
                                    <p>Você consegue compreender uma ampla gama de textos mais longos e exigentes, e reconhecer
                                        significados implícitos.</p>
                                </div>
                            </div>

                            {/* Lado direito */}
                            <div class="col-md-6">
                                <div class="d-flex flex-row align-items-center mb-3">
                                    <i class="fas fa-info-circle me-2" data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Clique em um nível para ver mais informações."></i>
                                    <p class="m-0">Clique em um nível para ver mais informações.</p>
                                </div>
                                <div class="progress-container">
                                    <div class="progress mb-3" onClick={ () => showLevel(0)}>
                                        <div class="progress-bar bg-succes" role="progressbar" style={{width: "10%"}}>Iniciação
                                        </div>
                                    </div>
                                    <div class="progress mb-3" onClick={ () => showLevel('A1')}>
                                        <div class="progress-bar bg-succes" role="progressbar" style={{width: "20%"}}>A1</div>
                                    </div>
                                    <div class="progress mb-3" onClick={ () => showLevel('A2')}>
                                        <div class="progress-bar bg-succes" role="progressbar" style={{width: "30%"}}>A2</div>
                                    </div>
                                    <div class="progress mb-3" onClick={ () => showLevel('B1')}>
                                        <div class="progress-bar bg-succes" role="progressbar" style={{width: "40%"}}>B1</div>
                                    </div>
                                    <div class="progress mb-3" onClick={ () => showLevel('B2')}>
                                        <div class="progress-bar bg-succes" role="progressbar" style={{width: "60%"}}>B2</div>
                                    </div>
                                    <div class="progress mb-3" onClick={ () => showLevel('C1')}>
                                        <div class="progress-bar bg-succes" role="progressbar" style={{width: "80%"}}>C1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                {/* Pra quem sao os Nossos cursos */}
                <section class="programs-section">
                    <div class="container">
                        <h1 class="text-center">Testes de nivelamento de idiomas</h1>
                        <p class="text-center">Escolha um dos idiomas abaixo para realizar seu teste:</p>
                        <div class="row">
                            {/* Card 1 */}
                            <div class="col-md-3 mb-4">
                                <div class="card program-card">
                                    <img src="i2.png" alt="Adultos" />
                                        <div class="card-body program-card-body">
                                            <h5 class="program-title">Teste de nível de inglês</h5>
                                            <div class="program-feature_2 d-none">
                                                <span>Teste de nível de Inglês</span>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <a onClick={() => navigate('/teste-de-en')} href="" class="btn btn-primary bc-blue">Saiba mais</a>
                                        </div>
                                </div>
                            </div>

                            {/* Card 2  */}
                            <div class="col-md-3 mb-4">
                                <div class="card program-card">
                                    <img src="i3.png" alt="Crianças e Adolescentes" />
                                        <div class="card-body program-card-body">
                                            <h5 class="program-title">Teste de nível de Português</h5>
                                            <div class="program-feature_2 d-none">
                                                <span>Teste de nível de Português</span>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <a onClick={() => navigate('/teste-de-pt')} href="" class="btn btn-primary bc-blue">Saiba mais</a>
                                        </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div class="col-md-3 mb-4">
                                <div class="card program-card">
                                    <img src="i4.png" alt="Empresas" />
                                        <div class="card-body program-card-body">
                                            <h5 class="program-title">Teste de nível de Francês</h5>
                                            <div class="program-feature_2 d-none">
                                                <span>Teste de nível de Francês</span>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <a onClick={() => navigate('/teste-de-fr')} href="" class="btn btn-primary bc-blue">Saiba mais</a>
                                        </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div class="col-md-3 mb-4">
                                <div class="card program-card">
                                    <img src="i5.png" alt="Instituições Educativas" />
                                        <div class="card-body program-card-body">
                                            <h5 class="program-title">Teste de nível de Espanhol</h5>
                                            <div class="program-feature_2 d-none">
                                                <span>Teste de nível de Espanhol</span>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <a onClick={() => navigate('/teste-de-es')} href="" class="btn btn-primary bc-blue">Saiba mais</a>
                                        </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" class="py-5">
                    <div class="container">
                        <h2 class="text-center mb-4">Perguntas Frequentes</h2>
                        <div class="accordion" id="faqAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Por que fazer um teste de nivelamento de idioma?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">Realizar um teste de nivelamento de idioma é essencial para determinar o seu nível actual de proficiência. Isso nos permite personalizar o ensino de acordo com suas necessidades e objectivos, garantindo um aprendizado mais eficiente e direcionado.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Em quais níveis de proficiência no idioma posso me enquadrar?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">Após o teste de nivelamento, você pode se enquadrar em diferentes níveis de proficiência, que vão desde o nível Funcional até o nível Profissional. Cada nível reflecte suas habilidades e conhecimentos atuais no idioma.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        O que acontece depois de concluir o teste de nivelamento de idiomas?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                    Depois de concluir o teste de nivelamento de idiomas, você receberá um relatório detalhado sobre seu nível actual de proficiência. Com base nesse relatório, será possível recomendar o curso e os materiais mais adequados para o seu nível, ajudando você a alcançar seus objectivos de aprendizado.
                                    </div>
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

export default Testes;