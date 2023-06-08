import { times } from "../watch.js";
import { appendTodo, todosArray } from "./todos";


function createID(){
  return `f${(~~(Math.random()*1e8)).toString(16)}`;
}
class Todo{
  constructor(modalTitle, modalDescription, modalUser, modalId){
    this.title = modalTitle;
    this.description = modalDescription;
    this.id = modalId? modalId:createID();
    this.time = times();
    this.user = modalUser;
  }
  render() {
    todosArray.push(this);
    let div = document.createElement("div");
    div.classList.add("todo");
    div.setAttribute("draggable", "true");
    div.id = this.id;
    let todoHtml = ` <div class="topTodo">
      <div class="title" id="${this.id}">
        ${this.title}
      </div>
      <button class="edit" id="${this.id}">Edit</button>
      <button class="deleteTodo" id="${this.id}">Delete</button>
    </div>
    <div class="middleTodo">
      <div class="description" id="${this.id}">${this.description}</div>
      <button class="right" id="${this.id}">></button>
    </div>
    <div class="bottomTodo">
      <div class="userName" id="${this.id}">${this.user}</div>
      <div class="time">${this.time}</div>
    </div>
    <div class="modal-wrapper todoModal" id = "${this.id}" >
      <input type="text" class="modalInput" id = "${this.id}" placeholder="Title" / value = "${this.title}">
      <textarea
        name=""
        id = "${this.id}"
        cols="30"
        rows="10"
        class="modalTextarea"
        placeholder="Description"
      >${this.description}</textarea>
      <div class="buttomModal" >
        <select class="modalUsers" id = "${this.id}">
  </select>
        <button class="cancelModal" id = "${this.id}">Cancel</button>
        <button class="confirmModal" id = "${this.id}">Confirm</button>
      </div>
    </div>`;
    div.innerHTML = todoHtml;
    appendTodo(div);
  }
}



function createTodo(modalTitle, modalDescription, modalUser, modalId) {
  let todo = new Todo(modalTitle, modalDescription, modalUser, modalId);
  todo.render();
}
export { createTodo, Todo};
