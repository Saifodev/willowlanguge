// src/pages/ciclo.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ciclo = () => {
    return (
        <div>
            <NavigationBar />
            <main>
                <Hero
                    title="Como o aprendizado com a Willow Language School funciona"
                    text="Ciclo de aprendizado"
                    buttonLabel="faça um teste diagnostico"
                    buttonLink="sign-up"
                />

                {/* Description Section */}
                <section class="description-section py-5">
                    <div class="container">
                        <div class="row shadow-sm py-5 rounded">
                            <div class="col-md-6 d-none">
                                <img src="path-to-your-image.jpg" class="img-fluid" alt="Descrição do Teste de Idiomas" />
                            </div>
                            <div class="col-md">
                                <h2 class="description-title">Conheça o Ciclo de Aprendizado de um Idioma na Willow Language
                                    School!</h2>
                                <p class="description-text">Quando você perguntar sobre como desenvolver suas habilidades
                                    linguísticas e
                                    compreensão cultural com a Willow Language School, siga algumas etapas para nos ajudar a
                                    definir seu
                                    caminho de aprendizado, para garantir que você corresponda ao nível de proficiência correto
                                    e possa
                                    progredir rapidamente em direção aos seus objetivos.</p>
                                <a href="sign-up" class="btn btn-outline-dark">Aprenda um idioma agora mesmo!</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ciclo section */}
                <section class="learning-cycle-section">
                    <div class="container">
                        <h2 class="section-title">Ciclo de Aprendizado</h2>
                        <div class="row learning-cycle-list">
                            <div class="col-md-6 col-lg-4 step">
                                <div class="step-icon">1</div>
                                <div class="step-title">Conhecendo suas necessidades</div>
                                <p class="step-description">Depois que entendermos seus objetivos, explicaremos com clareza as
                                    opções de treinamento que melhor se adaptam a você, e como elas podem ajudá-lo a alcançar
                                    suas metas de idioma e compreensão cultural.</p>
                            </div>
                            <div class="col-md-6 col-lg-4 step">
                                <div class="step-icon">2</div>
                                <div class="step-title">Orientação</div>
                                <p class="step-description">Vamos explicar como tudo funciona e ajudar você a começar. Você
                                    conhecerá seus instrutores de idiomas, conhecerá o centro de aprendizagem, receberá os
                                    materiais do programa e aprenderá sobre nossas plataformas.</p>
                            </div>
                            <div class="col-md-6 col-lg-4 step">
                                <div class="step-icon">3</div>
                                <div class="step-title">Revendo seu progresso</div>
                                <p class="step-description">Verificamos se você está no caminho certo para atingir suas metas de
                                    aprendizado, mantendo com sucesso o que você aprende, e oferecendo a você mais suporte de
                                    aprendizado necessário para abraçar seu novo idioma e cultura com confiança.</p>
                            </div>
                            <div class="col-md-6 col-lg-4 step">
                                <div class="step-icon">4</div>
                                <div class="step-title">Testando suas conquistas</div>
                                <p class="step-description">Nós mediremos sua compreensão e suas habilidades para que você possa
                                    ver o quanto progrediu antes de passar para o próximo nível.</p>
                            </div>
                            <div class="col-md-6 col-lg-4 step">
                                <div class="step-icon">5</div>
                                <div class="step-title">Certificando suas conquistas</div>
                                <p class="step-description">Você receberá um certificado para comemorar suas conquistas!</p>
                            </div>
                            <div class="col-md-6 col-lg-4 step">
                                <div class="step-icon">6</div>
                                <div class="step-title">Progredindo para o próximo nível</div>
                                <p class="step-description">Verificamos se você está feliz com suas conquistas e avançamos para
                                    o próximo nível de proficiência no idioma.</p>
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

export default ciclo;