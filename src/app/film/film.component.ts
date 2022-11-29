import { Component, Input } from '@angular/core';
import { MovieResponse } from '../models/Films/movies';
import {StarRatingPipe} from '../pipe/star-rating.pipe';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
  providers: [StarRatingPipe]
})

export class FilmComponent{

  @Input()
  films!: MovieResponse[];
  
}

