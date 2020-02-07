import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo';

export const LOAD_TODOS = "[TODOS] Load todos";
export const LOAD_TODOS_SUCCESS = "[TODOS] Load todos Success";
export const LOAD_TODOS_FAIL = "[TODOS] Load todos fail"; 

export class LoadTodos implements Action {
    readonly type = LOAD_TODOS;
}
export class LoadTodosSuccess implements Action {
    readonly type = LOAD_TODOS_SUCCESS
    constructor(public payload){}
}
export class LoadTodosFail implements Action {
    readonly type = LOAD_TODOS_FAIL;
    constructor(public payload){}
}

export type TodosAction = LoadTodos
    | LoadTodosSuccess
    | LoadTodosFail;
