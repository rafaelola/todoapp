import { Component } from '@angular/core';
import {TodoMockDataService} from './todo-mock-data.service';
import { Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDos';
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoMockDataService) { }

  addTodo() {
      this.todoDataService.addTodo(this.newTodo);
      this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
      this.todoDataService.toggleComplete(todo);
  }

  removeTodo(todo) {
        this.todoDataService.deleteById(todo.id);
    }

  get todos() {
        return this.todoDataService.getAll();
    }

}
