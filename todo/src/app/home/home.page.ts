import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { todos as mockupTodos } from './mock-todo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  text: string;
  isAdding = false;
  todos: Todo[];

  constructor() {}

  ngOnInit() {
    this.getTodos();
  }

  toggleForm() {
    this.isAdding = !this.isAdding;
    this.text = '';
  }

  getTodos() {
    this.todos = mockupTodos;
  }

  addTodo() {
    const todo: Todo = {
      id: this.todos.length,
      title: this.text,
      completed: false,
    };

    this.todos.push(todo);

    this.isAdding = false;
  }

  changeComplate(object: Todo) {

  }

  deleteTodo(object: Todo) {
    this.todos = this.todos.filter((o) => o.id !== object.id);
  }
}
