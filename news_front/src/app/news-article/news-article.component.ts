import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-news-article',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './news-article.component.html',
  styleUrl: './news-article.component.css'
})
export class NewsArticleComponent {
  @Input() article: any;
}
