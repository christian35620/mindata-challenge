import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface ArticleImage {
  alt: string;
  smallSrc: string;
  mediumSrc: string;
  largeSrc: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: ArticleImage;
}

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCard {
  readonly article = input.required<Article>();
}
