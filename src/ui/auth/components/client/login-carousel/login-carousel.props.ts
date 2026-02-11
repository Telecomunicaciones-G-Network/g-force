export interface CarouselSlide {
  id: number;
  title: string;
  description: string;
}

export interface LoginCarouselProps {
  slides?: CarouselSlide[];
}
