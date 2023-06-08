import { deleteAllDone } from "./dones.js";
import { openWarningWrapper, warningContext, closeWarningWrapper } from "../warningModule.js";
import { setLocalDone } from "../lockalstorage/localstorage.js";

function deleteAllDones(){
    openWarningWrapper("Вы уверены что хотите удалить все исполненные задачи?");
   warningContext.addEventListener('click', function({target}){
    if (target.classList.contains("warningCansel")) {
        closeWarningWrapper();
      }
      if (target.classList.contains("warningConfirm")) {
        deleteAllDone();
        closeWarningWrapper();
        setLocalDone();
      }  
   })
}
export {deleteAllDones}