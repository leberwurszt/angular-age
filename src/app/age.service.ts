import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Age } from './age';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor(private http:HttpClient) {}

  getAge(name: string): any {
    //console.log(this.http.get(`https://api.agify.io/?name=${name}`));
    return this.http.get(`https://api.agify.io/?name=${name}`);
  }
}
