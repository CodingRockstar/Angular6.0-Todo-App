import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    todos: Observable<Todo[]>;
    todosRef: AngularFireList<{}>;

    // constructor
    constructor(private db: AngularFireDatabase) {
        this.todosRef = db.list('/ToDos');

        this.todos = this.todosRef.snapshotChanges().map(changes => {
            return changes.map(c => (new Todo(c.payload.val().title, c.payload.val().urgency, c.payload.key)));
        });
    }


    // get all todos
    getTodos():Observable<Todo[]> {
        return this.todos;
    }


    // add new Todo
    addTodo(todo: Todo) {
        this.todosRef.push({ title: todo.title, urgency: todo.urgency });
    }


    // delete one item
    deleteTodo(key) {
        this.todosRef.remove(key);
    }


    // delete complete list
    deleteItemList() {
        this.todosRef.remove();
    }
}
