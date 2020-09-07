import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTodo(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
  }
}
