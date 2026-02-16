'use client';

import type { LoginCarouselProps } from './login-carousel.props';

import Image from 'next/image';

import styles from './login-carousel.module.css';
import { useLoginCarousel } from './login-carousel.hook';

export const LoginCarousel = ({ slides = [] }: LoginCarouselProps) => {
  const { emblaApi, emblaRef, imageSrc, selectedIndex } = useLoginCarousel();

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__viewport} ref={emblaRef}>
        <div className={styles.carousel__container}>
          {slides.length > 0 ? (
            slides.map((slide) => (
              <div key={slide.id} className={styles.carousel__slide}>
                <Image
                  src={imageSrc}
                  alt={slide.title}
                  fill
                  priority
                  className={styles.carousel__image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
                />
                <div className={styles.carousel__content}>
                  <h2 className={styles.carousel__title}>{slide.title}</h2>
                  <p className={styles.carousel__description}>
                    {slide.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.carousel__slide}>
              <Image
                src={imageSrc}
                alt="G-Network"
                fill
                priority
                className={styles.carousel__image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
      <div className={styles.carousel__dots}>
        {slides.map((slide, index) => (
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
