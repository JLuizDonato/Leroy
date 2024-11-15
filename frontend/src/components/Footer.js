// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>Consultório Odontológico Paula Leroy - Todos os direitos reservados © {new Date().getFullYear()}</p>
            <div style={styles.socialLinks}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaLinkedinIn />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaTwitter />
                </a>
                <a href="https://wa.me/5521998768397?text=Olá!%20Drª%20Paula%20Leroy!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaWhatsapp />
                </a>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        textAlign: 'center',
        padding: '0 20px',
        backgroundColor: '#674f5f',
        color: '#dfd3cf',
        zIndex: '1000',
        height: '60px',
        fontFamily: 'Garamond, serif', // Define a fonte Garamond para o rodapé
    },
    text: {
        marginBottom: '15px',
        fontSize: '0.7rem',
        fontFamily: 'Garamond, serif', // Define a fonte Garamond para o texto do rodapé
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },
    icon: {
        color: '#dfd3cf',
        fontSize: '0.7rem',
        transition: 'color 0.3s',
    },
};

export default Footer;
