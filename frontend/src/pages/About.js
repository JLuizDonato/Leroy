// src/pages/About.js
import React from 'react';
import './About.css'; // Certifique-se de criar esse arquivo para o estilo


function About() {
    return (
        <div className="about-container">
            <div className="about-text">
                <h2>Sobre a Drª Paula Leroy</h2>
                <p>A Dra. Paula Leroy é odontóloga com pós-graduação em Ortodontia e especializada no atendimento infantil, prevenção e estética. Com um olhar atento para o bem-estar de seus pacientes, ela busca sempre oferecer tratamentos personalizados e humanizados, criando um ambiente acolhedor, principalmente para as crianças.</p>
                <p>Com técnicas modernas, Dra. Paula trabalha para transformar sorrisos, prezando pela harmonia estética e funcionalidade. Seu objetivo é proporcionar um sorriso saudável e bonito, promovendo a autoestima e o conforto de cada paciente.</p>
            </div>
            <div className="about-image">
                <img src="/images/Drª Paula Leroy.png" alt="Drª Paula Leroy" />

            </div>
        </div>
    );
}

export default About;

