import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey: string = '17176e3b5aa64cd48593800cc71c01dd'; // Replace this with your actual API key
  private apiUrl: string = 'https://newsapi.org/v2';
  private apiLocalUrl:string = 'http://localhost:8000/api'
  constructor(private http: HttpClient) { }

  // Fetch news articles based on a search query
  searchNews(query: string,page:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/everything?q=${query}&apiKey=${this.apiKey}&pageSize=9&page=${page}`);
  }

  // Fetch top headlines
  getTopHeadlines(page:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/top-headlines?country=us&pageSize=9&page=${page}&apiKey=${this.apiKey}`);
  }
  getStoredNews(page:number): Observable<any>{
    return this.http.get<any>(`${this.apiLocalUrl}/api/all-news/?pageSize=9&page=${page}`);
  }
  triggerApiAndStoreNews(): Observable<any>{
    return this.http.get<any>(`${this.apiLocalUrl}/api/trigger`);
  }
  filterByCategory(category:string,query:string,page:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/everything?q=${category + query}piKey=${this.apiKey}&pageSize=9&page=${page}`);
  }
  // Fetch news articles for a specific page
  getNewsPage(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/top-headlines?country=us&pageSize=9&page=${page}&apiKey=${this.apiKey}`);
  }

}
