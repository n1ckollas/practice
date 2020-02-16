import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import { Store, Action} from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Observable<any>
  constructor(
    private store:Store<fromStore.TodosState>
  ) { }

  ngOnInit() {
    this.todos = this.store.select(state => {
      if(state){
        console.log(state.todos)
        return state.todos.todos;
      }else{
        return [];
      }
    })
  }

}
