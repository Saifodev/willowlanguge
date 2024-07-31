// src/pages/unidades.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const politica_privacidade = () => {
    return (
        <div>
            <NavigationBar />
            <main>

                <section class="privacy-policy-section py-5 mt-5">
                    <div class="container">
                        <h2 class="text-center mb-4 text-dark">Política de Privacidade</h2>
                        <p class="text-muted">A sua privacidade é importante para nós. É política do Willow Language School
                            respeitar a sua privacidade em relação a qualquer informação sua que possamos colectar no site <a
                                href="https://willowlanguage.com" class="text-decoration-none">Willow Language School</a>, e
                            outros sites que possuímos e operamos.</p>

                        <p class="text-muted">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe
                            fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
                        </p>

                        <p class="text-muted">Apenas retemos as informações colectadas pelo tempo necessário para fornecer o
                            serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis
                            para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                        </p>

                        <p class="text-muted">Não compartilhamos informações de identificação pessoal publicamente ou com
                            terceiros, exceto quando exigido por lei.</p>

                        <p class="text-muted">Você é livre para recusar a nossa solicitação de informações pessoais, entendendo
                            que talvez não possamos fornecer alguns dos serviços desejados.</p>

                        <p class="text-muted">O uso continuado de nosso site será considerado como aceitação de nossas práticas
                            em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com
                            dados do usuário e informações pessoais, entre em contacto conosco.</p>

                        <h3 class="text-dark mt-5">Compromisso do Usuário</h3>
                        <p class="text-muted">O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o
                            Willow Language School oferece no site e com caráter enunciativo, mas não limitativo:</p>
                        <ul class="text-muted">
                            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;
                            </li>
                            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou qualquer tipo de
                                pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Willow Language
                                School, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou
                                quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos
                                anteriormente mencionados.</li>
                        </ul>

                        <h3 class="text-dark mt-5">Mais Informações</h3>
                        <p class="text-muted">Esperamos que esta política esteja esclarecida e, como mencionado anteriormente,
                            se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os
                            cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
                        <p class="text-muted">Esta política é efetiva a partir de 24 de julho de 2024.</p>
                    </div>
                </section>

                {/* Contact Section */}
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default politica_privacidade;