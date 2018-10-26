import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  todos: Todo[];

  @Input()
  filter: String;

  @Output()
  changeFilter: EventEmitter<String> = new EventEmitter();

  constructor() {
  }

  onFilterChange(filter: String) {
    this.changeFilter.emit(filter);
  }

}
