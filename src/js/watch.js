let watch = document.querySelector(".watch");

function times() {
  let data = new Date();
  let hours = data.getHours();
  let minutes = data.getMinutes();
  let time = `${hours}:${minutes}`;
  return time;
  
}

function watchNow(){
  watch.innerHTML = times();
}

export { watchNow, times };
