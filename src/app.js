import { watchNow } from "./js/watch.js";
import { addTodo, openModalWrapper, blockAddTodo, clickModal } from "./js/modalWrapper.js";
import { deleteAllButton } from "./js/done/dones.js";
import { deleteAllDones } from "./js/done/deleteAllDones.js";
import { fetchUsers } from "./js/users/usersFetch.js";
import { getLocalstorage } from "./js/lockalstorage/localstorage.js";
import { dragDropZone } from "./js/drag&drop.js";
import { listnerTodo } from "./js/todos/eventListnerTodo.js";
import { listnerProgress } from "./js/progress/listnerProgress.js";
import { listnerDone } from "./js/done/listnerDone.js";

//Загрузка 
document.addEventListener("DOMContentLoaded", getLocalstorage);
dragDropZone ();
// Время
watchNow();
setInterval (watchNow(), 5000);

// События
listnerTodo();
listnerProgress();
listnerDone();
addTodo.addEventListener("click", openModalWrapper);
blockAddTodo.addEventListener("click", clickModal);
deleteAllButton.addEventListener("click", deleteAllDones);



//fetch users

fetchUsers();
