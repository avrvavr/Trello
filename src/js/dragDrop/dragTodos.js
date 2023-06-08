import { todos} from "../todos/todos.js";
import { progressArray, deleteProgress } from "../progress/AllProgress.js";
import { listnerTodo } from "../todos/eventListnerTodo.js";
import { setLocalAll } from "../lockalstorage/localstorage.js";
import { donesArray } from "../done/dones.js";
import { deleteDone } from "../done/dones.js";
import { createTodo } from "../todos/todo.js";

function dragTodos() {
  todos.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  todos.addEventListener("dragleave", (event) => {
    event.preventDefault();
  });

  todos.addEventListener("drop", (event) => {
    event.preventDefault();
    const idDrag = event.dataTransfer.getData("id");
    const classDrag = event.dataTransfer.getData("class");
    if (classDrag === "progress"){
        let progress = progressArray.find((obj) => obj.id === idDrag);
        createTodo (progress.title, progress.description, progress.user, progress.id);
        deleteProgress(idDrag);
        setLocalAll();
    }
  });
}

export { dragTodos };
