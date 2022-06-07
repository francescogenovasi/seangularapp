import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pet} from "../models/pet";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: Pet[] = [];

  baseUrl: string = 'https://89yb6iotn3.execute-api.eu-west-1.amazonaws.com/dev/pets';

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.baseUrl);
  }
}
