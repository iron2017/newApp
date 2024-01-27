import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsArticleComponent } from '../news-article/news-article.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { error, log } from 'console';
import { NewsFilterComponent } from '../news-filter/news-filter.component';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [NewsArticleComponent,PaginationComponent,SearchComponent,CommonModule,NewsFilterComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  articles: any[] = [];
  currentPage: number = 1;
  searchQuery: string = '';
  categories:string = '';
  totalCount:number = 0 ;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.triggerApiAndStoreNews().subscribe(
      (value)=>{
        this.fetchNews();
      },
      (error)=>{
        this.newsService.getTopHeadlines(this.currentPage).subscribe(
          (value)=>{
            this.articles = value.articles;
            this.totalCount = value.totalResults;
          }
        ) 
      }
    )
    
  }

  fetchNews() {
   this.newsService.getStoredNews(this.currentPage).subscribe(
   (value)=>{
    this.articles = value.results

   },
   (error)=>{
    this.newsService.getTopHeadlines(this.currentPage).subscribe(
      (value)=>{
        this.articles = value.articles;
        this.totalCount = value.totalResults
      }
    ) 
   }
   )
  }
  searchNews(query:string){
    this.newsService.searchNews(query,this.currentPage).subscribe(
      (value)=>{
       this.articles = value.articles;
       this.totalCount = value.totalResults
      }
    )
  }
  handleFilter(categories: string){
    this.currentPage = 1;
    this.categories = categories;
  this.filterNews(categories);
  }
  filterNews(categories:string){
    this.newsService.filterByCategory(categories,this.searchQuery,this.currentPage).subscribe(
      (value)=>{
        this.articles = value.articles
      }
     )
  }
  onPageChange(page: number) {
    this.currentPage = page;
    if(this.searchQuery ){
      this.searchNews(this.searchQuery)
    }
   else{
      this.fetchNews();
    }
  }
  nextPage() {
    this.currentPage++;
   
  if(this.searchQuery ){
      this.searchNews(this.searchQuery)
    }
   else{
      this.fetchNews();
    }
    
    
  }

 prevPage() {
    // Decrement currentPage and fetch previous page of news articles
    if (this.currentPage > 1) {
     this.currentPage--;
      if(this.searchQuery){
        this.searchNews(this.searchQuery)
      }else{
        this.fetchNews();
      }
      
    }
  }

  onSearch(query: string) {
    this.searchQuery = query;
    console.log(query)
    // Reset currentPage to 1 when performing a new search
    this.currentPage = 1;
    this.searchNews(query);
  }
}
