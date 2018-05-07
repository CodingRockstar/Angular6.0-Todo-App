import { Component } from '@angular/core';

import { TodoService } from './../todo.service';
import { Todo } from './../todo';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

    private todos: Todo[] = [];

    // read items
    constructor(private _service: TodoService) {
        _service.getTodos().subscribe(data => {
            this.todos = data
        });
    }


    // delete items
    deleteTodo(key) {
        if (window.confirm('Are sure you want to delete this ToDo?')) {
            this._service.deleteTodo(key);
        }
    }


    // delete complete list
    deleteList() {
        if (window.confirm('Are sure you want to delete the whole list?')) {
            this._service.deleteItemList();
        }
    }

}
