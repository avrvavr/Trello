import { todosArray } from "../todos/todos.js";
import { progressArray } from "../progress/AllProgress.js";
import { donesArray } from "../done/dones.js";
import { createTodo } from "../todos/todo.js";
import { createProgress } from "../progress/progress.js";
import { createDone } from "../done/done.js";


function setLocalTodos() {
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function setLocalProgress() {
  localStorage.setItem("inProgress", JSON.stringify(progressArray));
}

function setLocalDone() {
  localStorage.setItem("dones", JSON.stringify(donesArray));
}
function setLocalAll() {
  setLocalTodos();
  setLocalProgress();
  setLocalDone();
}

function getLocalstorage() {
  let todos = JSON.parse(localStorage.getItem("todos"));
  let progress = JSON.parse(localStorage.getItem("inProgress"));
  let dones = JSON.parse(localStorage.getItem("dones"));
  todos.forEach(function (elem) {
    createTodo(elem.title, elem.description, elem.user, elem.id);
  });
  progress.forEach(function (elem) {
    createProgress(elem);
  });
  dones.forEach(function (elem) {
    createDone(elem);
  });
}

export {
  setLocalTodos,
  setLocalProgress,
  setLocalDone,
  getLocalstorage,
  setLocalAll,
};
