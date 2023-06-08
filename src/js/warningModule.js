let warningWrapper = document.querySelector("#warning");
let warningContext = document.querySelector(".warningContent");
let warningText = document.querySelector(".warningText");

function openWarningWrapper(text) {
  warningWrapper.style.display = "flex";
  warningText.textContent = text;
}

function closeWarningWrapper() {
  warningWrapper.style.display = "none";
}

export { warningContext, openWarningWrapper, closeWarningWrapper };
