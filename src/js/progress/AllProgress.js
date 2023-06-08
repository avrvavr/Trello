let allProgress = document.querySelector(".AllProgress");
let countProgress = document.querySelector(".quantityProgress");
let progressArray = [];
let countAllProgress = 0;

function creatCountProgress() {
  countProgress.innerText = countAllProgress;
}

function appendProgress(div) {
  allProgress.append(div);
  countAllProgress++;
  creatCountProgress();
}

function deleteProgressInArray(id) {
  let indexToDelete = progressArray.findIndex((obj) => obj.id === id);
  if (indexToDelete !== -1) {
    progressArray.splice(indexToDelete, 1);
    countAllProgress--;
    creatCountProgress();
  }
  }
  function deleteProgress(id){
    deleteProgressInArray(id);
    let deleteElement = document.querySelector(`#${id}.progress`);
    deleteElement.remove();
  }

export { appendProgress, allProgress, deleteProgress, progressArray };
