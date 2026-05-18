import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroCard } from '../../shared/components/hero-card/hero-card';
import { ArticleCard } from '../../shared/components/article-card/article-card';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { SearchInput } from '../../shared/components/search-input/search-input';
import { HOME_ARTICLES, HOME_FEATURE, HOME_HERO } from './home.data';

@Component({
  selector: 'app-home',
  imports: [HeroCard, ArticleCard, FeatureCard, SearchInput],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly hero = HOME_HERO;
  readonly articles = HOME_ARTICLES;
  readonly feature = HOME_FEATURE;
}
