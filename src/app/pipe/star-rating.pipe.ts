import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(value: string | null, stars?: string): string {
    let st = Number(value);
    let ret ='★';
    if(st>20 && st<=40)
    {ret= '★★';}
    else if (st>40 && st<=60)
    {ret='★★★'; }
    else if(st>60 && st<=80)
    {ret='★★★★';}
    else if(st>80 && st<=100)
    {ret='★★★★★';}
    
    return ret;
  }

}
