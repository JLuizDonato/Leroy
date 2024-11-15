// src/components/ContactForm.js
import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) alert('Mensagem enviada com sucesso!');
            else alert('Erro ao enviar mensagem.');
        } catch (error) {
            alert('Erro ao enviar mensagem.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
            />
            <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
            />
            <textarea
                name="message"
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textarea}
            />
            <button type="submit" style={styles.button}>Enviar</button>
        </form>
    );
}

const styles = {
    form: {
        maxWidth: '500px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        fontFamily: "'Bodoni', serif", // Fonte para o formulário
    },
    input: {
        padding: '10px',
        fontSize: '1rem',
        fontFamily: "'Bodoni', serif", // Fonte para os inputs
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        transition: 'border-color 0.3s',
    },
    textarea: {
        padding: '10px',
        fontSize: '1rem',
        fontFamily: "'Bodoni', serif", // Fonte para o textarea
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        resize: 'vertical',
        minHeight: '100px',
        transition: 'border-color 0.3s',
    },
    button: {
        padding: '12px',
        fontSize: '1rem',
        fontWeight: 'bold',
        fontFamily: "'Garamond', serif", // Fonte para o botão
        color: '#674f5f',
        backgroundColor: '#dfd3cf',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default ContactForm;
