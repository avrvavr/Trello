import { createTodo } from "./todos/todo.js";
import { renderUser } from "./users/usersFetch.js";
import { setLocalTodos } from "./lockalstorage/localstorage.js";


let addTodo = document.querySelector(".addTodo");
let blockAddTodo = document.querySelector("#blockAddTodo");

function openModalWrapper() {
  blockAddTodo.style.display = "grid";
  let modalUser = document.querySelector("#addTodoUsers");
  modalUser.innerHTML = renderUser();
}

function closeModalWrapper() {
  let modalTitle = document.querySelector("#addTodoInput");
  let modalDescription = document.querySelector("#addTodoDescription");
  modalTitle.value = "";
  modalDescription.value = "";
  blockAddTodo.style.display = "none";
}

function confirmModal() {
  let modalTitle = document.querySelector("#addTodoInput");
  let modalDescription = document.querySelector("#addTodoDescription");
  let modalUser = document.querySelector("#addTodoUsers");
  if (modalTitle.value && modalDescription.value && modalUser.value) {
    createTodo(modalTitle.value, modalDescription.value, modalUser.value);
    closeModalWrapper();
  }
}

function clickModal({ target }) {
  if (target.id === "addTodoCancel") {
    closeModalWrapper();
  }
  if (target.id === "addToConfirm") {
    confirmModal();
    setLocalTodos();

  }
}

export {
  addTodo,
  openModalWrapper,
  blockAddTodo,
  clickModal,
  closeModalWrapper,
};
