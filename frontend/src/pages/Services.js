// src/pages/Services.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Services.css'; // Importe o arquivo CSS

const services = [
    { id: 1, src: '/images/clareamento.jpg', title: 'Clareamento Dental', description: 'Clareamento para deixar seu sorriso mais brilhante e saudável.' },
    { id: 2, src: '/images/Logo.png', title: 'Preventiva', description: 'Agende sua consulta preventiva.' },
    { id: 3, src: '/images/Tratamento_1.png', title: 'Ortodontia', description: 'Tratamentos ortodônticos para alinhar e corrigir os dentes.' },
    // Adicione mais serviços conforme necessário
];

function Services() {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Nossos Serviços</h2>
            <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={600}
                stopOnHover={true}
            >
                {services.map((service) => (
                    <div key={service.id} className="slide" style={styles.slide}>
                        <img src={service.src} alt={service.title} style={styles.image} />
                        <div className="overlay" style={styles.overlay}>
                            <h3 style={styles.title}>{service.title}</h3>
                            <p style={styles.description}>{service.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '10px',
        maxWidth: '600px',
        margin: '0 auto',
        marginTop: '40px', // Adiciona margem para evitar sobreposição do Navbar
    },
    heading: {
        fontSize: '2rem',
        color: '#674f5f',
        marginBottom: '20px',
    },
    slide: {
        // Adicione estilos aqui, se necessário
    },
    image: {
        borderRadius: '8px',
        objectFit: 'cover', // A imagem vai cobrir o espaço sem distorcer
        width: '100%', // A imagem ocupa toda a largura disponível
        height: '400px', // Altura fixa para todas as imagens
    },
    overlay: {
        // Adicione estilos aqui, se necessário
    },
    title: {
        fontSize: '1.5rem',
        margin: '0',
    },
    description: {
        fontSize: '1rem',
        padding: '10px',
        textAlign: 'center',
    },
    servicesContainer: {
        display: 'flex',
        justifyContent: 'center', // Centraliza o conteúdo horizontalmente
        alignItems: 'center', // Alinha o conteúdo verticalmente
        marginTop: '20px', // Espaço para evitar sobreposição com o Navbar
    },
};

export default Services;
