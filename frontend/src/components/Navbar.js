// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={styles.nav}>
            <div style={styles.navContent}>
                <div style={styles.logoContainer}>
                    <Link to="/"> {/* Tornando o logo clicável para a home */}
                        <img src="/images/cartão.jpg" alt="Logo" style={styles.logo} />
                    </Link>
                </div>
                <ul style={styles.ul}>
                    <li style={styles.li}><Link to="/" style={styles.link}>Home</Link></li>
                    <li style={styles.li}><Link to="/about" style={styles.link}>Sobre</Link></li>
                    <li style={styles.li}><Link to="/services" style={styles.link}>Serviços</Link></li>
                    <li style={styles.li}><Link to="/contact" style={styles.link}>Contato</Link></li>
                </ul>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        position: 'fixed',
        top: '0px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#674f5f',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    },
    navContent: {
        maxWidth: '880px', // Define a mesma largura máxima do Gallery
        width: '100%', // Para que o conteúdo ocupe toda a largura do contêiner até o limite
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        fontFamily: 'Garamond, serif', // Aplica a fonte Garamond no Navbar
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '30px',
    },
    logo: {
        height: '65px',
        width: 'auto',
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        gap: '15px',
        margin: '0',
        padding: '0',
        alignItems: 'center',
    },
    li: {
        display: 'inline',
    },
    link: {
        textDecoration: 'none',
        color: '#dfd3cf',
        fontWeight: 'bold',
        padding: '10px 15px',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontFamily: 'Garamond, serif', // Aplica a fonte Garamond aos links do Navbar
        transition: 'background-color 0.3s, transform 0.2s',
    },
};

export default Navbar;
