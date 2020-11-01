import * as fromTodos from '../actions/todos.actions';

export interface TodosState {
    todos:any[],
    loaded: boolean,
    loading: boolean,
}

const initialState = {
    todos:[],
    loaded: false,
    loading: false,
}

export function todosReducers(state = initialState, action: fromTodos.TodosAction): TodosState {
    switch(action.type){
        case fromTodos.LOAD_TODOS: {
            console.log(action)
            return {
                ...state,
                loading: true,
                loaded:false,
            }
        }
        case fromTodos.LOAD_TODOS_SUCCESS: {
            const data = action.payload
            return{
                ...state,
                todos: data,
                loading: false,
                loaded:true,
            }
        }
        case fromTodos.LOAD_TODOS_FAIL:{
            return{
                ...state,
                todos: [],
                loading:false,
                loaded:true,
            }
        }
    }
}