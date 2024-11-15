// src/pages/Home.js
import React from 'react';
import Gallery from '../../../frontend/src/components/Gallery';

function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Drª Paula Leroy - Ortodontia | Clínica Geral </h1>
            <h2><p style={styles.subheading}>Ajudo você a transformar o seu sorriso com dedicação e profissionalismo.</p></h2>
            <Gallery />
        </div>
    );
}

const styles = {
    container: {
        marginTop: '75px', // Espaço para evitar sobreposição com o Navbar
        textAlign: 'center', // Centraliza o conteúdo
        padding: '0 20px',
    },
    heading: {
        fontSize: '2.0rem',
        color: '#674f5f', // Cor do título

    },
    subheading: {
        fontSize: '1.0rem',
        color: '#674f5f', // Cor do subtítulo

    },

};

export default Home;

