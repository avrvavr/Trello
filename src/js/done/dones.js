let allDones = document.querySelector(".dones");
let countDones = document.querySelector(".quantityDone");
let donesArray = [];
let countAllDones = 0;
let deleteAllButton = document.querySelector(".deleteAll");


function creatCountDones() {
  countDones.innerText = countAllDones;
}

function appendDone(div) {
  allDones.append(div);
  countAllDones++;
  creatCountDones();
}

function deleteDoneInArray(id) {
  let indexToDelete = donesArray.findIndex((obj) => obj.id === id);
  if (indexToDelete !== -1) {
    donesArray.splice(indexToDelete, 1);
    countAllDones--;
    creatCountDones();
  }
}

function deleteDone(id){
    deleteDoneInArray(id);
    let deleteElement = document.querySelector(`#${id}.done`);
    deleteElement.remove();
  }

  function deleteAllDone() {
    let deleteElement;
    donesArray.forEach(function (elem) {
      deleteElement = document.querySelector(`#${elem.id}.done`);
      deleteElement.remove();
      countAllDones--;
    });
    donesArray.length = 0;
    creatCountDones();
  }


  export { appendDone, donesArray, allDones, deleteDone, deleteAllDone, deleteAllButton}
