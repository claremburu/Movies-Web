import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../app/Movie';

import { filter, map, startWith,findIndex} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private inTheatresUrl = "http://localhost:5000/intheatres";


   allData:any;


constructor(private httpClient: HttpClient) {}
 getInTheatres():Observable<Movie[]> {
  //return this.httpClient.get(this.REST_API_SERVER);
  //console.log('sendGetRequest');
  // this.allData=this.httpClient.get<any>("this.inTheatresUrl");
  return this.httpClient.get<Movie[]>(this.inTheatresUrl);
}

public getMovieById(id:string){
  this.allData=this.httpClient.get<any[]>("assets/itemsCollection.json");

  const index  = this.allData.pipe(
  map((movie: Movie[]) => movie.find(p => p.id === id))
);

  const result = this.allData[index];

console.log(this.allData.pipe(
  map((movie: Movie[]) => movie.find(p => p.id === id))
));
 // return this.rowData.filter((rowData: { id: string; }) => rowData.id === id);
 return this.allData.pipe(
  map((movie: Movie[]) => movie.find(p => p.id === id))
);
}

  // getInTheatres(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>('https://imdb-api.com/en/API/InTheaters/k_nlwzjn7z');
  // }
  // // getPopular(page: number): Observable<any> {
  // //   // tslint:disable-next-line: max-line-length
    
  // // }
}
