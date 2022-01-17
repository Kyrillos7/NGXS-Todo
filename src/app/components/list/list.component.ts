import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveTodo, GetTodos, SetSelectedTodo } from 'src/app/actions/todo.action';
import { Todo } from 'src/app/models/Todo';
import { TodoState } from 'src/app/states/todo.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Select(TodoState.getTodoList) todos: Observable<Todo[]>;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTodos());
  }

  removeTodo(id: number) {
    this.store.dispatch(new RemoveTodo(id));
  }

  editTodo(payload: Todo) {
    this.store.dispatch(new SetSelectedTodo(payload));
  }

}
