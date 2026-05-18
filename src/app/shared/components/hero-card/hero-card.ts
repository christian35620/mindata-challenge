import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';

export interface HeroCardImage {
  alt: string;
  smallSrc: string;
  mediumSrc: string;
  largeSrc: string;
}

export interface HeroCardData {
  id: string;
  category: string;
  title: string;
  description: string;
  ctaLabel: string;
  image?: HeroCardImage;
}

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroCard {
  readonly hero = input.required<HeroCardData>();
  private readonly imageLoadFailed = signal(false);
  readonly image = computed(() => {
    if (this.imageLoadFailed()) {
      return null;
    }

    return this.hero().image ?? null;
  });

  private readonly resetImageState = effect(() => {
    this.hero().image;
    this.imageLoadFailed.set(false);
  });

  onImageError(): void {
    this.imageLoadFailed.set(true);
  }
}
