'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import styles from './login-carousel.module.css';

const carouselSlides = [
  {
    id: 1,
    title: 'Tu contribución marca la diferencia',
    description:
      'Cada idea, cada esfuerzo y cada logro son parte de lo que nos hace únicos. Gracias por ser parte de este equipo excepcional.',
  },
  {
    id: 2,
    title: 'Innovación que transforma',
    description:
      'Juntos creamos soluciones que mejoran la vida de nuestros clientes. Tu trabajo hace la diferencia.',
  },
  {
    id: 3,
    title: 'Excelencia en cada detalle',
    description:
      'La calidad de nuestro servicio refleja el compromiso de cada miembro del equipo. Gracias por tu dedicación.',
  },
];

// Mover esta función FUERA del componente resuelve el problema de dependencia
// ya que no depende de ningún prop ni estado del componente.
const getImageSrc = () => {
  if (typeof window === 'undefined')
    return '/images/image-slider-desktop.png';

  const width = window.innerWidth;
  if (width < 768) {
    return '/images/image-slider-mobile.png';
  }
  if (width >= 768 && width < 1024) {
    return '/images/image-slider-tablet.png';
  }
  return '/images/image-slider-desktop.png';
};

export const LoginCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Inicializamos el estado lazy para evitar llamar a window en el servidor
  const [imageSrc, setImageSrc] = useState('/images/image-slider-desktop.png');

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // useEffect para el resize
  useEffect(() => {
    // Definimos la función de actualización aquí o usamos la externa
    const handleResize = () => {
      setImageSrc(getImageSrc());
    };

    // Llamada inicial para ajustar la imagen correcta al montar en cliente
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Ya no hay dependencias porque getImageSrc es externa y constante

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__viewport} ref={emblaRef}>
        <div className={styles.carousel__container}>
          {carouselSlides.map((slide) => (
            <div key={slide.id} className={styles.carousel__slide}>
              <Image
                src={imageSrc}
                alt={slide.title}
                fill
                priority
                className={styles.carousel__image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.carousel__content}>
                <h2 className={styles.carousel__title}>{slide.title}</h2>
                <p className={styles.carousel__description}>
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carousel__dots}>
        {/* Usamos slide.id como key en lugar del index */}
        {carouselSlides.map((slide, index) => (
          <button
            key={slide.id} 
            className={`${styles.carousel__dot} ${
              index === selectedIndex ? styles['carousel__dot--active'] : ''
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Ir a slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};