import { todosArray } from "./todos.js";
import { createProgress } from "../progress/progress.js";
import { deleteTodo } from "./eventListnerTodo.js";
import { progressArray } from "../progress/AllProgress.js";
import {
  openWarningWrapper,
  warningContext,
  closeWarningWrapper,
} from "../warningModule.js";

function inProgress({ target }) {
  if (progressArray.length > 5) {
    openWarningWrapper(
      "Задачь в процессе больше шести. Выполните текущие задачи потом добавляйте еще"
    );
    warningContext.addEventListener("click", function ({ target }) {
      if (target.classList.contains("warningCansel")) {
        closeWarningWrapper();
      }
      if (target.classList.contains("warningConfirm")) {
        closeWarningWrapper();
      }
    });
  } else {
    let indexTodo = todosArray.findIndex((obj) => obj.id === target.id);
    createProgress(todosArray[indexTodo]);
    deleteTodo(todosArray[indexTodo].id);
  }
}

export { inProgress };
