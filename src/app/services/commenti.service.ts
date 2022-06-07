import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Commenti} from "../models/commenti";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentiService {

  commenti: Commenti[] = [];
  commento: Commenti = {} as Commenti;

  baseUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getCommenti(): Observable<Commenti[]>{
    return this.http.get<Commenti[]>(this.baseUrl);
  }


  createCommento(newCommento: Commenti): Observable<Commenti>{
    return this.http.post<Commenti>(this.baseUrl, newCommento, this.httpOptions);
  }

  updateCommento(){

  }

  deleteCommento(){

  }
}
