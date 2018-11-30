$(document).ready(() => {

    document.querySelector('.back').onclick = function () {
      // let container = document.getElementById('first');
      // //container.classList.remove("on");
      // container.classList.add("off");
      document.getElementById('second').classList.add("off");
      document.getElementById('first').classList.remove("off");
    }

  
  })