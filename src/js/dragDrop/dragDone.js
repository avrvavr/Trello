import { allDones } from "../done/dones.js"
import { progressArray, deleteProgress } from "../progress/AllProgress";
import { createDone } from "../done/done.js";
import { setLocalAll } from "../lockalstorage/localstorage.js";
import { todosArray } from "../todos/todos.js";
import { deleteTodo } from "../todos/eventListnerTodo.js";

function dragDone(){
  allDones.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  allDones.addEventListener("dragleave", (event) => {
    event.preventDefault();
  });

  allDones.addEventListener("drop", (event) => {
    event.preventDefault();
    const idDrag = event.dataTransfer.getData("id");
    const classDrag = event.dataTransfer.getData("class");
    if (classDrag === "progress"){
        let progress = progressArray.find((obj) => obj.id === idDrag);
        createDone(progress);
        deleteProgress(idDrag);
        setLocalAll();
    }
    if (classDrag === "todo"){
        let todoDrag = todosArray.find((obj) => obj.id === idDrag);
        createDone(todoDrag);
        deleteTodo(idDrag);
        setLocalAll();
    }
  });
}


export {dragDone}