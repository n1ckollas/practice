import { Injectable } from "@angular/core"
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as todoActions from '../actions/todos.actions';
import { TodosAPI } from '../api/todos.api';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class TodosEffect{
    constructor(
        private actions$:Actions,
        private todosApi: TodosAPI,
    ){}
    
    @Effect()
    loadTodos$ = this.actions$.pipe(
        ofType(todoActions.LOAD_TODOS),
        switchMap(() => {
            return this.todosApi.LaodTodos().pipe(
                map(todos => new todoActions.LoadTodosSuccess(todos)),
                catchError(error => of(new todoActions.LoadTodosFail(error)))
            )
        })
    )
}

