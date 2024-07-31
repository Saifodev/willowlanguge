// src/pages/unidades.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const termos_uso = () => {
    return (
        <div>
            <NavigationBar />
            <main>
                <section class="terms-of-use-section py-5 mt-5">
                    <div class="container">
                        <h2 class="text-center mb-4 text-dark">Termos de Uso</h2>

                        <p class="text-muted">Bem-vindo ao site da Willow Language School. Ao acessar e usar este site, você
                            concorda em cumprir e estar vinculado aos seguintes termos e condições de uso:</p>

                        <h3 class="text-dark mt-4">Uso do Site</h3>
                        <p class="text-muted">Você deve usar este site apenas para fins legais e de uma maneira que não infrinja
                            os direitos de, ou restrinja ou iniba o uso e aproveitamento deste site por qualquer terceiro. Ações
                            proibidas incluem assédio ou causar angústia ou inconveniência a qualquer usuário, transmissão de
                            conteúdo obsceno ou ofensivo ou interrupção do fluxo normal de diálogo no site.</p>

                        <h3 class="text-dark mt-4">Propriedade Intelectual</h3>
                        <p class="text-muted">Todos os direitos autorais, marcas registradas, direitos de design, patentes e
                            outros direitos de propriedade intelectual (registrados e não registrados) neste site e todo o
                            conteúdo (incluindo todas as aplicações) localizados no site permanecerão pertencentes à Willow
                            Language School ou seus licenciadores.</p>
                        <p class="text-muted">Você não deve copiar, reproduzir, republicar, desmontar, fazer engenharia reversa,
                            baixar, postar, transmitir, disponibilizar ao público ou usar de qualquer outra forma o conteúdo do
                            site da Willow Language School de qualquer forma, exceto para seu uso pessoal e não comercial.</p>

                        <h3 class="text-dark mt-4">Limitação de Responsabilidade</h3>
                        <p class="text-muted">O conteúdo deste site é fornecido "como está", sem quaisquer representações ou
                            garantias, expressas ou implícitas. Willow Language School não faz representações ou garantias em
                            relação a este site ou às informações e materiais fornecidos neste site.</p>
                        <p class="text-muted">Willow Language School não garante que:</p>
                        <ul class="text-muted">
                            <li>Este site estará constantemente disponível, ou disponível de todo;</li>
                            <li>As informações neste site são completas, verdadeiras, precisas ou não enganosas.</li>
                        </ul>

                        <h3 class="text-dark mt-4">Alterações nos Termos</h3>
                        <p class="text-muted">Willow Language School pode revisar estes termos de uso para seu site a qualquer
                            momento sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes
                            termos de uso.</p> <h3 class="text-dark mt-4">Lei Aplicável</h3>
                        <p class="text-muted">Estes termos e condições são regidos e interpretados de acordo com as leis locais
                            e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais em cada local ou país.</p>
                    </div>
                </section>

                {/* Contact Section */}
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default termos_uso;