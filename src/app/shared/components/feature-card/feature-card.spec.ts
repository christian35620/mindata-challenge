import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCard, FeatureCardData } from './feature-card';

describe('FeatureCard', () => {
  let component: FeatureCard;
  let fixture: ComponentFixture<FeatureCard>;
  const feature: FeatureCardData = {
    id: 'feature-1',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    label: 'Lorem ipsum',
    image: {
      src: '/images/destination_small.jpg',
      alt: 'Vista panoramica de una ciudad al atardecer.',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCard);
    fixture.componentRef.setInput('feature', feature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
