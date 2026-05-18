import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCard, HeroCardData } from './hero-card';

describe('HeroCard', () => {
  let component: HeroCard;
  let fixture: ComponentFixture<HeroCard>;
  const hero: HeroCardData = {
    id: 'hero-1',
    category: 'Lorem ipsum dolor sit amet.',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
    ctaLabel: 'Lorem ipsum.',
    image: {
      alt: 'Cima de una montana nevada iluminada por la luz del amanecer.',
      smallSrc: '/images/hero_small.jpg',
      mediumSrc: '/images/hero_medium.jpg',
      largeSrc: '/images/hero_large.jpg',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCard],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroCard);
    fixture.componentRef.setInput('hero', hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
