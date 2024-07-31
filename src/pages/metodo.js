// src/pages/metodo.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const metodo = () => {
    return (
        <div>
            <NavigationBar />
            <main>
                <Hero
                    title="Método da Willow Language School"
                    text=""
                    buttonLabel="faça um teste diagnostico"
                    buttonLink="sign-up"
                />

                {/* Description Section */}
                <section class="description-section py-5">
                    <div class="container">
                        <div class="row py-5 shadow-sm rounded">
                            <h2 class="description-title">Como o aprendizado com a Willow Language School funciona?</h2>
                            <p class="description-text">Quando você perguntar sobre como desenvolver suas habilidades
                                linguísticas e
                                compreensão cultural com a Willow Language School, siga algumas etapas para nos ajudar a definir
                                seu
                                caminho de aprendizado, para garantir que você corresponda ao nível de proficiência correto e
                                possa
                                progredir rapidamente em direção aos seus objetivos.</p>
                        </div>
                    </div>
                </section>

                {/* Our method today */}
                <section class="commitment-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col text-start">
                                <h2 class="commitment-title d-none">Our Commitment</h2>
                                <h3 class="commitment-description text-center">
                                    O nosso método é uma maneira eficaz de aprender um idioma. Os principais elementos do método
                                    são:
                                </h3>
                                <ul class="commitment-list px-4">
                                    <li class="mb-3">
                                        <strong>Professores Experientes e Especializados:</strong>
                                        Nossa equipe é composta por educadores apaixonados e altamente qualificados, prontos
                                        para guiá-lo em cada etapa do caminho.
                                    </li>
                                    <li class="mb-3">
                                        <strong>Programas Flexíveis e Opções Personalizadas:</strong>
                                        Reconhecemos que cada aluno é único, por isso oferecemos programas adaptados às suas
                                        necessidades e objetivos individuais.
                                    </li>
                                    <li class="mb-3">
                                        <strong>Ambiente de Sala de Aula Interativo e Divertido:</strong>
                                        Aprender não precisa ser chato! Na Willow Language School, combinamos tecnologia moderna
                                        e métodos de ensino inovadores para tornar suas aulas envolventes e dinâmicas.
                                    </li>
                                    <li class="mb-3">
                                        <strong>Experiências Enriquecidas com Atividades Sociais e Culturais:</strong>
                                        Não se trata apenas de aprender o idioma, mas também de mergulhar na cultura e na vida
                                        cotidiana dos falantes nativos. Oferecemos uma variedade de atividades sociais e
                                        culturais para enriquecer sua experiência de aprendizado.
                                    </li>
                                    <li class="mb-3">
                                        <strong>Nossos Programas:</strong>
                                        Escolha entre uma variedade de cursos, incluindo Cursos Gerais de Idiomas, Inglês para
                                        Negócios, Cursos de Preparação para Exames e Habilidades de Conversação e Comunicação.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* how-it-works-section */}
                <section class="how-it-works-section">
                    <div class="container">
                        <h2 class="section-title">Veja como funciona:</h2>
                        <ol class="how-it-works-list">
                            <li>
                                <strong>Conhecendo suas necessidades:</strong> Depois que entendermos seus objetivos,
                                explicaremos com clareza as opções de treinamento que melhor se adaptam a você, e como elas
                                podem ajudá-lo a alcançar suas metas de idioma e compreensão cultural.
                            </li>
                            <li>
                                <strong>Orientação:</strong> Vamos explicar como tudo funciona e ajudar você a começar. Você
                                conhecerá seus instrutores de idiomas, conhecerá o centro de aprendizagem, receberá os materiais
                                do programa e aprenderá sobre nossas plataformas.
                            </li>
                            <li>
                                <strong>Revendo seu progresso:</strong> Verificamos se você está no caminho certo para atingir
                                suas metas de aprendizado, mantendo com sucesso o que você aprende, e oferecendo a você mais
                                suporte de aprendizado necessário para abraçar seu novo idioma e cultura com confiança.
                            </li>
                            <li>
                                <strong>Testando suas conquistas:</strong> Nós mediremos sua compreensão e suas habilidades para
                                que você possa ver o quanto progrediu antes de passar para o próximo nível.
                            </li>
                            <li>
                                <strong>Certificando suas conquistas:</strong> Você receberá um certificado para comemorar suas
                                conquistas!
                            </li>
                            <li>
                                <strong>Progredindo para o próximo nível:</strong> Verificamos se você está feliz com suas
                                conquistas e avançamos para o próximo nível de proficiência no idioma.
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Contact Section */}
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default metodo;