import { allProgress, deleteProgress } from "./AllProgress.js";
import { progressArray } from "./AllProgress.js";
import { createTodo } from "../todos/todo.js";
import { createDone } from "../done/done.js";
import { setLocalProgress, setLocalTodos, setLocalDone} from "../lockalstorage/localstorage.js";


function pressBack(id) {
  let progress = progressArray.find((obj) => obj.id === id);
  createTodo (progress.title, progress.description, progress.user, progress.id);
  deleteProgress(id);
}

function pressComplete(id){
  let progress = progressArray.find((obj) => obj.id === id);
  createDone(progress);
  deleteProgress(id);
}


function listnerProgress() {
  allProgress.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit")) {
      pressBack(event.target.id);
      setLocalProgress();
      setLocalTodos();
    }
    if (event.target.classList.contains("deleteTodo")) {
      pressComplete(event.target.id);
      setLocalProgress();
      setLocalDone();
    }
  });
  allProgress.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('id', event.target.id);
    event.dataTransfer.setData('class', "progress");
  });
}



export {listnerProgress}