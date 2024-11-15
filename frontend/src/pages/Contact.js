// src/pages/Contact.js
import React from 'react';
import ContactForm from '../../../frontend/src/components/ContactForm';

function Contact() {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Entre em Contato</h2>
            <p style={styles.subheading}>
                Preencha o formulário abaixo e entraremos em contato.
            </p>
            <ContactForm />
        </div>
    );
}

const styles = {
    container: {
        marginTop: '100px', // Espaçamento para evitar sobreposição com o Navbar fixo
        textAlign: 'center',
        padding: '0 20px',
    },
    heading: {
        fontSize: '2rem',
        color: '#674f5f',
        margin: '20px 0',
        fontFamily: 'Bodoni, serif',
    },
    subheading: {
        fontSize: '1.0rem',
        color: '#674f5f',
        marginBottom: '30px',
        fontFamily: 'Bodoni, serif',
    },
};

export default Contact;
