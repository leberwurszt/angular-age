import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor(private http:HttpClient) {}

  getAge() {
    return this.http.get('https://api.agify.io/?name=Hans');
  }
}
