import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface FeatureCardImage {
  src: string;
  alt: string;
}

export interface FeatureCardData {
  id: string;
  title: string;
  description: string;
  label: string;
  image?: FeatureCardImage;
}

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCard {
  readonly feature = input.required<FeatureCardData>();
}
