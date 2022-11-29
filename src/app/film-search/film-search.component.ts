import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NEVER } from 'rxjs';
import { MovieResponse } from '../models/Films/movies';
import { AuthenticationService } from '../services/authentication.service';
import { FilmServiceService } from '../services/film-service.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {

  constructor(private authService: AuthenticationService,private service :FilmServiceService,private router: Router) { }
  search:string='';
  films!:MovieResponse[];
  FormSubmit=false;
  
  ngOnInit(): void { }

  searchMovie!: string;
  searchFilms(): void{
    if(this.searchMovie!==undefined)
    {this.service.search(this.searchMovie).subscribe(
      (data:any)=>{
        this.films=data;
        this.FormSubmit=true;
      }
    )}
    
  }

}
