import { Component, Input } from '@angular/core';

import { TodoService } from './../todo.service';
import { Todo } from './../todo';


@Component({
  selector: 'todo-listitem',
  templateUrl: './todo-listitem.component.html',
  styleUrls: ['./todo-listitem.component.css']
})
export class TodoListitemComponent {
    @Input() todo: Todo;
    public isInEditMode: boolean = false;

    constructor(private _service: TodoService) { }

    // update item
    updateTodo()
    {
        this.isInEditMode = !this.isInEditMode;
        this._service.updateTodo(this.todo);
    }

    // delete item
    deleteTodo(key) {
        if (window.confirm('Are sure you want to delete this ToDo?')) {
            this._service.deleteTodo(key);
        }
    }
}
