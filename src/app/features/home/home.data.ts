import { Article } from '../../shared/components/article-card/article-card';
import { FeatureCardData } from '../../shared/components/feature-card/feature-card';

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

export const HOME_FEATURE: FeatureCardData = {
  id: 'feature-1',
  title: 'Lorem ipsum',
  description: 'Lorem ipsum dolor sit amet consectetur.',
  label: 'Lorem ipsum',
  image: {
    src: '/images/destination_small.jpg',
    alt: 'Vista panoramica de una ciudad al atardecer.',
  },
};
