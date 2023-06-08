import { dragTodos } from "./dragDrop/dragTodos.js";
import { dragProgress } from "./dragDrop/dragProgress.js";
import { dragDone } from "./dragDrop/dragDone.js";


function dragDropZone(){
    dragTodos();
    dragProgress ();
    dragDone();
}

export {dragDropZone}