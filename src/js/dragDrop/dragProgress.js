import { allProgress } from "../progress/AllProgress"
import { todosArray } from "../todos/todos.js";
import { progressArray } from "../progress/AllProgress";
import { createProgress } from "../progress/progress.js";
import { openWarningWrapper } from "../warningModule.js";
import { setLocalAll } from "../lockalstorage/localstorage";
import { deleteTodo } from "../todos/eventListnerTodo";
import { closeWarningWrapper } from "../warningModule.js";
import { warningContext } from "../warningModule.js";



function dragProgress (){
    allProgress.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
    
      allProgress.addEventListener("dragleave", (event) => {
        event.preventDefault();
      });
      allProgress.addEventListener("drop", (event) => {
        event.preventDefault();
        const idDrag = event.dataTransfer.getData("id");
        const classDrag = event.dataTransfer.getData("class");
        if (progressArray.length > 5) {
            openWarningWrapper(
              "Задачь в процессе больше шести. Выполните текущие задачи потом доюавляйте еще"
            );
            warningContext.addEventListener("click", function ({ target }) {
              if (target.classList.contains("warningCansel")) {
                closeWarningWrapper();
              }
              if (target.classList.contains("warningConfirm")) {
                closeWarningWrapper();
              }
            });
            return;
          } 
          
        if (classDrag === "todo"){
          
            let todoDrag = todosArray.find((obj) => obj.id === idDrag);
            createProgress (todoDrag);
            deleteTodo(idDrag);
            setLocalAll();
        }
      });
}


export {dragProgress}