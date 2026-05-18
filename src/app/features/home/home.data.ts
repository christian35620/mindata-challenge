import { Article } from '../../shared/components/article-card/article-card';
import { FeatureCardData } from '../../shared/components/feature-card/feature-card';
import { HeroCardData } from '../../shared/components/hero-card/hero-card';

export const HOME_HERO: HeroCardData = {
  id: 'hero-1',
  category: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
  ctaLabel: 'Lorem ipsum.',
  image: {
    alt: 'Cima de una montana nevada iluminada por la luz del amanecer.',
    smallSrc: '/images/hero_small.jpg',
    mediumSrc: '/images/hero_medium.jpg',
    largeSrc: '/images/hero_large.jpg',
  },
};

export const HOME_ARTICLE: Article = {
  id: 'article-1',
  category: 'Lorem ipsum dolor sit amet.',
  title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
  image: {
    alt: 'Carrusel iluminado durante la noche con banderines de colores.',
    smallSrc: '/images/sample-image_small.jpg',
    mediumSrc: '/images/sample-image_medium.jpg',
    largeSrc: '/images/sample-image_large.jpg',
  },
};

export const HOME_ARTICLES: Article[] = [
  HOME_ARTICLE,
  {
    ...HOME_ARTICLE,
    id: 'article-2',
    title: 'Lorem ipsum dolor sit amet.',
  },
  {
    ...HOME_ARTICLE,
    id: 'article-3',
  },
  {
    ...HOME_ARTICLE,
    id: 'article-4',
  },
];

export const HOME_FEATURES: FeatureCardData[] = [
  {
    id: 'feature-1',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    label: 'Lorem ipsum',
    image: {
      src: '/images/destination_small.jpg',
      alt: 'Vista panoramica de una ciudad al atardecer.',
    },
  },
  {
    id: 'feature-2',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    label: 'Lorem ipsum',
    image: {
      src: '/images/destination_small.jpg',
      alt: 'Vista panoramica de una ciudad al atardecer.',
    },
  },
  {
    id: 'feature-3',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    label: 'Lorem ipsum',
    image: {
      src: '/images/destination_small.jpg',
      alt: 'Vista panoramica de una ciudad al atardecer.',
    },
  },
  {
    id: 'feature-4',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    label: 'Lorem ipsum',
    image: {
      src: '/images/destination_small.jpg',
      alt: 'Vista panoramica de una ciudad al atardecer.',
    },
  },
];
