import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/Films/movies';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  public films: MovieResponse[] | undefined;
  private baseUrl = 'api/movies/search'
  constructor(private router: Router, private httpClient: HttpClient) { }

  search(title: string): Observable<MovieResponse>{
    const options = {
      params: new HttpParams().set('title', title)
    }
    
    return this.httpClient.get<MovieResponse>(this.baseUrl,{params:options.params});
  }
}
