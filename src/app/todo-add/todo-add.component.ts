import { Component } from '@angular/core';

import { TodoService } from './../todo.service';
import { Todo } from './../todo';


@Component({
    selector: "todo-add",
    templateUrl: './todo-add.component.html'
})
export class TodoAddComponent {
    todo = new Todo();

    constructor(private _service: TodoService) { }

    onAddButtonClick() {
        this._service.addTodo(this.todo);
        this.todo = new Todo();
    }
}
