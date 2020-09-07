import {ActionReducerMap, createSelector} from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';

import * as fromTodos from './todos.reducers';

export interface TodosState {
    todos: fromTodos.TodosState;
}
export interface State {
    todos: fromTodos.TodosState;
}

export const reducers: ActionReducerMap<State> = {
    todos: fromTodos.todosReducers,
  };


const combineReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return combineReducer(state, action);
}