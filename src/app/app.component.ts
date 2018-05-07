import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    todos = [];
}
