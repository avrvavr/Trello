import { appendDone, donesArray } from "./dones";
import { Todo } from "../todos/todo.js";

class Done extends Todo{
  constructor(modalTitle, modalDescription, modalUser, modalId) {
    super(modalTitle, modalDescription, modalUser);
    this.id = modalId;
  }
  render(){
    donesArray.push(this);
    let div = document.createElement("div");
    div.classList.add("done");
    div.id = this.id;
    let todoHtml = ` <div class="topTodo">
      <div class="title" id="${this.id}">
        ${this.title}
      </div>
      <button class="deleteTodo" id="${this.id}">Delete</button>
    </div>
    <div class="middleTodo">
      <div class="description" id="${this.id}">${this.description}</div>
    </div>
    <div class="bottomTodo">
      <div class="userName">${this.user}</div>
      <div class="time">${this.time}</div>
    </div>`;
    div.innerHTML = todoHtml;
    appendDone(div);
  }
}
function createDone(elem) {
  let done = new Done(elem.title, elem.description, elem.user, elem.id);
  done.render();
}


  export {createDone}