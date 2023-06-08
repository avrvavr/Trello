let todos = document.querySelector(".todos");
let count = document.querySelector(".quantityTodos");
let todosArray = [];
let countTodo = 0;

function creatCount() {
  count.innerText = countTodo;
}
function appendTodo(div) {
  todos.append(div);
  countTodo++;
  creatCount();
}
function upDateTodosArray(id, title, description, user) {
  const userToUpdate = todosArray.find((todo) => todo.id === id);
  if (userToUpdate) {
    userToUpdate.title = title;
    userToUpdate.description = description;
    userToUpdate.user = user;
  }
}
function deleteTodoInArray(id) {
  let indexToDelete = todosArray.findIndex((obj) => obj.id === id);
  console.log(indexToDelete)
  if (indexToDelete !== -1) {
    todosArray.splice(indexToDelete, 1);
    countTodo--;
    creatCount();
  }
}



export { todos, appendTodo, todosArray, upDateTodosArray, deleteTodoInArray };
