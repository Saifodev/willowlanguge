// src/pages/unidades.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import cursosData from '../cursos.json';

const Promo = () => {
    const [cursosPromocao, setCursosPromocao] = useState([]);

    useEffect(() => {
        // Fetch the cursos.json file
        //fetch('cursos.json')
            //.then(response => response.json())
            //.then(data => {
                renderPromotions(cursosData);
            //});

        function renderPromotions(data) {
            const discountRate = 0.3; // 30% discount
            const cursos = [...data.cursosOnline, ...data.cursosPresencial, ...data.cursosNegocios];
            const discountedCourses = cursos.filter(course => course.promocao === true);

            const promoCards = discountedCourses.map(course => {
                const originalPrice = parseFloat(course.precoUnitario.replace('.', '').replace(',', '.'));
                const discountedPrice = (originalPrice * (1 - discountRate)).toFixed(2).replace('.', ',');

                return (
                    <div className="card promo-card shadow" key={course.id}>
                        <div className="row no-gutters">
                            <div className="col-md-6 promo-image d-none">
                                <img src="src/images/p1.png" alt={course.nome} />
                            </div>
                            <div className="col-md">
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title">{course.nome} - {course.regime}</h3>
                                    <table className="table promo-table">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Antes:</th>
                                                <td><span className="original-price">{course.precoUnitario} Mt</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Agora:</th>
                                                <td><span className="discount-price">{discountedPrice} Mt</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Desconto:</th>
                                                <td>30%</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Duração:</th>
                                                <td>{course.duracao}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Carga Horária:</th>
                                                <td>{course.cargaHoraria}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });

            setCursosPromocao(promoCards);
        }
    }, []);
    return (
        <div>
            <NavigationBar />
            <main>
                <Hero
                    title="Promoções na Willow Language School"
                    text=""
                    buttonLabel="faça um teste diagnostico"
                    buttonLink="sign-up"
                />
                <section className="promo-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <h2 className="text-center mb-5">Promoções Especiais</h2>
                                <div id="promo-cards-container">
                                    {cursosPromocao.length > 0 ? (
                                        cursosPromocao
                                    ) : (
                                        <p>Carregando promoções...</p>
                                    )}
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

export default Promo;