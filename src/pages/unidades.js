// src/pages/unidades.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const unidades = () => {
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

                <section class="units-section py-5">
                    <div class="container">
                        <h3 class="text-center mb-4">Onde pode nos encontrar?</h3>
                        <div class="row g-4">
                            {/* Card 1 */}
                            <div class="col-md-4">
                                <div class="card">
                                    <img src="https://via.placeholder.com/380x240" class="card-img-top" alt="Centro 1"/>
                                        <div class="card-header">
                                            <h5>Centro de Idiomas Maputo</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>743, 743 Av. Ahmed Sekou Touré, Maputo</p>
                                        </div>
                                        <div class="card-footer">
                                            <p><i class="fas fa-phone-alt"></i> +258 84 699 6917</p>
                                        </div>
                                </div>
                            </div>

                            {/*  Card 2  */}
                            <div class="col-md-4">
                                <div class="card">
                                    <img src="https://via.placeholder.com/380x240" class="card-img-top" alt="Centro 2"/>
                                        <div class="card-header">
                                            <h5>Centro de Idiomas Beira</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>743, 743 Av. Ahmed Sekou Touré, Maputo</p>
                                        </div>
                                        <div class="card-footer">
                                            <p><i class="fas fa-phone-alt"></i> +258 84 699 6917</p>
                                        </div>
                                </div>
                            </div>

                             {/* Card 3  */}
                            <div class="col-md-4">
                                <div class="card">
                                    <img src="https://via.placeholder.com/380x240" class="card-img-top" alt="Centro 3"/>
                                        <div class="card-header">
                                            <h5>Centro de Idiomas Nampula</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>743, 743 Av. Ahmed Sekou Touré, Maputo</p>
                                        </div>
                                        <div class="card-footer">
                                            <p><i class="fas fa-phone-alt"></i> +258 84 699 6917</p>
                                        </div>
                                </div>
                            </div>

                            {/* Adicione mais cards conforme necessário */}
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

export default unidades;