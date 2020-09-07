import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';

@Injectable()
export class TodosAPI{
    constructor(
        private httpClient:HttpClient,
    ){}

    LaodTodos(){
        return this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
            .pipe(
                catchError((error: any) => (error.json()))
            )
    }

}