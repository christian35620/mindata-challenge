import { Component } from '@angular/core';
import { HeroCard } from '../../shared/components/hero-card/hero-card';
import { ArticleCard } from '../../shared/components/article-card/article-card';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { SearchInput } from '../../shared/components/search-input/search-input';

@Component({
  selector: 'app-home',
  imports: [HeroCard, ArticleCard, FeatureCard, SearchInput],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
