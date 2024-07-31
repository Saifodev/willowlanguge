// src/components/Hero.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = ({ title, text, buttonLabel, buttonLink }) => {
    return (
        <section className="hero-section_2 py-5 d-flex align-items-center justify-content-center text-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="">
                        <h1 className="hero-title mb-4">{title}</h1>
                        <h4 className="hero-text">{text}</h4>
                        <a href={buttonLink} className="btn btn-outline-light">{buttonLabel}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;