$(document).ready(() => {


  document.querySelector('.button').onclick = function () {
    // let container = document.getElementById('first');
    // //container.classList.remove("on");
    // container.classList.add("off");
    document.getElementById('first').classList.add("off");
    document.getElementById('second').classList.remove("off");
  }

})