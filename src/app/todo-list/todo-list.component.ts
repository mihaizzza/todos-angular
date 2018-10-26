import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../todo';

@Component(
  {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
  }
)
export class TodoListComponent {

  @Input()
  todos: Todo[];

  @Input()
  filter: String;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    console.log(this.filter);
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  filteredTodos() {
    if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.complete);
    }

    if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.complete);
    }

    return this.todos;
  }
}
