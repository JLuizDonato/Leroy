import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const photos = [
    { id: 1, src: '/images/Consulta.jpg', alt: 'Imagem 1' },
    { id: 2, src: '/images/Pós Graduação.png', alt: 'Imagem 2' },
    { id: 3, src: '/images/Pós Graduação_2.png', alt: 'Imagem 3' },
];

function Gallery() {
    return (
        <div style={styles.galleryContainer}>
            <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={600}
            >
                {photos.map((photo) => (
                    <div key={photo.id}>
                        <img src={photo.src} alt={photo.alt} style={styles.image} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

const styles = {
    galleryContainer: {
        maxWidth: '800px', // Limita a largura da galeria
        width: '50%',
        margin: '5px auto 50px auto', // Define espaçamento superior e inferior para evitar sobreposição
        padding: '2px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        borderRadius: '8px',
        objectFit: 'cover',
        width: '90%',
        height: '60vh', // Ajusta a altura relativa à tela, mantendo proporção
        maxHeight: '500px', // Limita a altura máxima em telas grandes
    },
};

export default Gallery;
