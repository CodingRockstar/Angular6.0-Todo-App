import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListitemComponent } from './todo-listitem/todo-listitem.component';
import { TodoService } from './todo.service';

import { environment } from './../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent,
    TodoListitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
      TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
