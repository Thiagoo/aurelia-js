import { todo, Todo } from "./todo";

export class App {
  constructor() {
    this.message = "Hello World!";
    // this.todo = new Todo('clean my romm');
    // this.todo.done = true;
    this.todoList = [];
    this.todoList.push(new Todo("clean my romm"));
    this.todoList.push(new Todo("walk with the dog"));
    this.todoList.push(new Todo("prepare the dinner"));
    this.newItem = "";
  }

  addTodo() {
    this.todoList.push(new Todo(this.newItem));
  }

  removeItem(todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }
}
