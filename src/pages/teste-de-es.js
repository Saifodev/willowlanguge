// src/pages/teste-de-en.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const teste_es = () => {
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
                    title="Teste de espanhol"
                    text="Faça um teste diagnóstico rápido, online."
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
                                <h2 class="description-title">Teste de proficiência em espanhol</h2>
                                <p class="description-text">Teste seu nível de espanhol hoje! Nosso teste de espanhol online lhe dará resultados que você pode usar para comparar sua habilidade actual e começar a planejar sua jornada de aprendizado.
                                    Nosso teste de espanhol avaliará sua habilidade linguística em vários critérios-chave e calculará seu nível de espanhol.</p>
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
                                    <p>Você está começando a aprender o idioma. Este nível é para familiarizar-se com os fundamentos básicos e estruturas simples.</p>
                                </div>
                                <div id="level-A1" class="level-info">
                                    <h3>Nível A1: <span class="text-succes">Elementar</span></h3>
                                    <p>Você consegue usar o idioma em situações cotidianas simples. Pode lidar com informações concretas e familiares.</p>
                                </div>
                                <div id="level-A2" class="level-info">
                                    <h3>Nível A2: <span class="text-succes">Elementar</span></h3>
                                    <p>Você consegue compreender frases e expressões usadas frequentemente relacionadas a áreas de importância imediata.</p>
                                </div>
                                <div id="level-B1" class="level-info">
                                    <h3>Nível B1: <span class="text-succes">Intermediário</span></h3>
                                    <p>Você consegue lidar com a maioria das situações encontradas enquanto viaja em uma região onde o idioma é falado.</p>
                                </div>
                                <div id="level-B2" class="level-info">
                                    <h3>Nível B2: <span class="text-succes">Intermediário Avançado</span></h3>
                                    <p>Você consegue entender as ideias principais de textos complexos sobre temas concretos e abstratos.</p>
                                </div>
                                <div id="level-C1" class="level-info">
                                    <h3>Nível C1: <span class="text-succes">Avançado</span></h3>
                                    <p>Você consegue compreender uma ampla gama de textos mais longos e exigentes, e reconhecer significados implícitos.</p>
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
                                    <div class="progress mb-3" onClick={() => showLevel('A1')}>
                                        <div class="progress-bar bg-succes" role="progressbar" style={{ width: "20%" }}>A1</div>
                                    </div>
                                    <div class="progress mb-3" onClick={() => showLevel('A2')}>
                                        <div class="progress-bar bg-succes" role="progressbar" style={{ width: "30%" }}>A2</div>
                                    </div>
                                    <div class="progress mb-3" onClick={() => showLevel('B1')}>
                                        <div class="progress-bar bg-succes" role="progressbar" style={{ width: "40%" }}>B1</div>
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
                                        Por que fazer um teste de nível de espanhol?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        <ul class="acordian-list">
                                            <li class="mb-2">Para encontrar o curso mais adequado para sua habilidade actual, você precisa saber qual é o seu nível de proficiência actual. Ao fazer o teste de espanhol, você será notificado sobre seu nível de idioma.</li>
                                            <li class="mb-2">O teste de espanhol online irá combiná-lo com precisão com os cursos mais apropriados para sua habilidade actual.</li>
                                            <li class="mb-2">Você pode usar suas classificações de teste de espanhol para compartilhar com empregadores e instituições acadêmicas para que eles entendam sua capacidade de falar espanhol.</li>
                                        </ul>
                                    </div>
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
                                    <div class="accordion-body">
                                        Após o teste de nivelamento, você pode se enquadrar em diferentes níveis de proficiência, que vão desde o nível de iniciação até o nível avançado. Cada nível reflecte suas habilidades e conhecimentos atuais no idioma:

                                        <ul class="acordian-list">
                                            <li class="mt-2"><strong>Iniciação, Nível 0:</strong> Você está começando a aprender o idioma. Este nível é para familiarizar-se com os fundamentos básicos e estruturas simples.</li>
                                            <li class="mt-2"><strong>Elementar, Níveis A1 e A2:</strong> Você pode acompanhar o significado geral das conversas e pode lidar com uma comunicação descomplicada em situações sociais e de trabalho.</li>
                                            <li class="mt-2"><strong>Intermediário Superior, Níveis 5 e 6:</strong> Você pode
                                                manter uma conversa geral no trabalho e em situações sociais.</li>
                                            <li class="mt-2"><strong>Intermediário, Nível B1:</strong> Você consegue lidar com a maioria das situações encontradas enquanto viaja em uma região onde o idioma é falado.</li>
                                            <li class="mt-2"><strong>Intermediário avançado, Nível B2:</strong> Você tem uma compreensão mais complexa do idioma e pode acompanhar conversas técnicas e exigentes.</li>
                                            <li class="mt-2"><strong>Avançado, Nível C1:</strong> Você tem uma compreensão livre e natural do idioma e se sente à vontade para se comunicar em qualquer ambiente, incluindo falar em público e situações acadêmicas.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        O que acontece depois de concluir o teste de nivelamento de espanhol?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#faqAccordion">
                                    <div class="accordion-body">
                                        Depois de concluir o teste de nivelamento de espanhol , você receberá um relatório detalhado sobre seu nível actual de proficiência. Com base nesse relatório, será possível recomendar o curso e os materiais mais adequados para o seu nível, ajudando você a alcançar seus objectivos de aprendizado.
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

export default teste_es;