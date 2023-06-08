import { allDones, deleteDone } from "./dones.js";
import { setLocalDone } from "../lockalstorage/localstorage.js";

function listnerDone() {
  allDones.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteTodo")) {
      deleteDone(event.target.id);
      setLocalDone();
    }
  });
}

export { listnerDone };
