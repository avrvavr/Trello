import { appendProgress, progressArray } from "./AllProgress.js";
import { Todo } from "../todos/todo.js";

class Progress extends Todo {
  constructor(modalTitle, modalDescription, modalUser, modalId) {
    super(modalTitle, modalDescription, modalUser);
    this.id = modalId;
  }
  render() {
    progressArray.push(this);
    let div = document.createElement("div");
    div.classList.add("progress");
    div.setAttribute("draggable", "true");
    div.id = this.id;
    let todoHtml = `
  <div class="topTodo">
    <div class="title">
      ${this.title}
    </div>
    <button class="edit" id = "${this.id}">Back</button>
    <button class="deleteTodo" id = "${this.id}">Complete</button>
  </div>
  <div class="middleTodo">
    <div class="description">${this.description}</div>
  </div>
  <div class="bottomTodo">
    <div class="userName">${this.user}</div>
    <div class="time">${this.time}</div>
  </div>`;
    div.innerHTML = todoHtml;
    appendProgress(div);
  }
}
function createProgress(elem) {
  let progress = new Progress(elem.title, elem.description, elem.user, elem.id);
  progress.render();
}



export { createProgress };
