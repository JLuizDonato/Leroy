import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.navContent}>
                <div style={styles.logoContainer}>
                    <Link to="/">
                        <img src="/images/cartão.jpg" alt="Logo" style={styles.logo} />
                    </Link>
                </div>
                {/* Botão de menu para telas pequenas */}
                <button style={styles.menuButton} onClick={toggleMenu}>
                    ☰
                </button>
                {/* Menu responsivo */}
                <ul
                    style={{
                        ...styles.ul,
                        ...(isMenuOpen || window.innerWidth > 768
                            ? styles.menuVisible
                            : styles.menuHidden),
                    }}
                >
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
        maxWidth: '880px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        fontFamily: 'Garamond, serif',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        height: '65px',
        width: 'auto',
    },
    menuButton: {
        display: 'none',
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        color: '#dfd3cf',
        cursor: 'pointer',
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        gap: '15px',
        margin: '0',
        padding: '0',
        alignItems: 'center',
        transition: 'all 0.3s ease-in-out',
    },
    menuVisible: {
        display: 'flex', // O menu fica visível em telas maiores ou quando aberto
        flexDirection: 'row', // Layout horizontal para telas maiores
    },
    menuHidden: {
        display: 'none', // Esconde o menu em telas pequenas quando fechado
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
        transition: 'background-color 0.3s, transform 0.2s',
    },
    '@media (max-width: 768px)': {
        menuButton: {
            display: 'block', // Exibe o botão em telas pequenas
        },
        ul: {
            position: 'absolute',
            top: '65px',
            right: '0',
            backgroundColor: '#674f5f',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
        },
    },
};

export default Navbar;
