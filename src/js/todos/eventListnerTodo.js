import { todos, upDateTodosArray, deleteTodoInArray, todosArray } from "./todos.js";
import { inProgress } from "./rightInProgress.js";
import { renderUser } from "../users/usersFetch.js";
import { setLocalTodos } from "../lockalstorage/localstorage.js";
import { setLocalProgress } from "../lockalstorage/localstorage.js";


function pressEdit({target}){
  let modal = document.querySelector(`#${target.id}.todoModal`);
  modal.style.display = "grid";
  let users = document.querySelector(`#${target.id}.modalUsers`);
  users.innerHTML = renderUser();
}
function deleteTodo(id){
  deleteTodoInArray(id);
  let deleteElement = document.querySelector(`#${id}.todo`);
  deleteElement.remove();
}

function pressCloseTodoModal({target}){
  let input = document.querySelector(`#${target.id}.modalInput`);
  let description = document.querySelector(`#${target.id}.modalTextarea`);
  let titleTodo = document.querySelector(`#${target.id}.title`);
  let descriptionTodo = document.querySelector(`#${target.id}.description`);
  description.value = descriptionTodo.textContent;
  input.value = titleTodo.textContent;
  target.parentElement.parentElement.style.display = "none";
}
function pressConfirm({target}){
  let input = document.querySelector(`#${target.id}.modalInput`);
  let description = document.querySelector(`#${target.id}.modalTextarea`);
  let users = document.querySelector(`#${target.id}.modalUsers`);
  let titleTodo = document.querySelector(`#${target.id}.title`);
  let descriptionTodo = document.querySelector(`#${target.id}.description`);
  let userTodo = document.querySelector(`#${target.id}.userName`);
  descriptionTodo.textContent = description.value;
  titleTodo.textContent = input.value;
  if(users.value !== ""){
    userTodo.textContent = users.value;
  }
  
  upDateTodosArray(target.id, titleTodo.textContent,  descriptionTodo.textContent,  userTodo.textContent);
  pressCloseTodoModal({target});
}


function listnerTodo() {
  todos.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit")) {
      pressEdit(event);
    }
    if (event.target.classList.contains("cancelModal")) {
      pressCloseTodoModal(event);
    }
    if (event.target.classList.contains("confirmModal")){
      pressConfirm(event);
      setLocalTodos();
    }
    if (event.target.classList.contains("deleteTodo")){
      deleteTodo(event.target.id);
      setLocalTodos();
    }
    if(event.target.classList.contains("right")){
      inProgress(event);
      setLocalTodos();
      setLocalProgress();
    }
  });
  todos.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('id', event.target.id);
    event.dataTransfer.setData('class', "todo");
  });
}

export { listnerTodo, deleteTodo };
