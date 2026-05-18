import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article, ArticleCard } from './article-card';

describe('ArticleCard', () => {
  let component: ArticleCard;
  let fixture: ComponentFixture<ArticleCard>;
  const article: Article = {
    id: 'article-1',
    category: 'Lorem ipsum dolor sit amet.',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleCard);
    fixture.componentRef.setInput('article', article);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
