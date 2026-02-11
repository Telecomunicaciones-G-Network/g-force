import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const getImageSrc = () => {
  if (typeof window === 'undefined') return '/images/gnet.webp';

  const width = window.innerWidth;
  if (width < 768) {
    return '/images/gnet-mobile.webp';
  }
  if (width >= 768 && width <= 1024) {
    return '/images/gnet-tablet.webp';
  }
  return '/images/gnet.webp';
};

export const useLoginCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [imageSrc, setImageSrc] = useState(getImageSrc());

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setImageSrc(getImageSrc());
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

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(getImageSrc());
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    emblaApi,
    emblaRef,
    imageSrc,
    selectedIndex,
  };
};
