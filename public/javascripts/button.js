$(document).ready(() => {


//no dejar funciones anónimas

  document.querySelector('.next').onclick = function () {
    // let container = document.getElementById('first');
    // //container.classList.remove("on");
    // container.classList.add("off");
    document.getElementById('first').classList.add("off");
    document.getElementById('second').classList.remove("off");
  }

  document.querySelector('.back').onclick = function () {
    // let container = document.getElementById('first');
    // //container.classList.remove("on");
    // container.classList.add("off");
    document.getElementById('second').classList.add("off");
    document.getElementById('first').classList.remove("off");
  }

  // document.querySelector('.addMeeting').onclick = function () {
  //   console.log('Pasa por el adddd')
  //   // let container = document.getElementById('first');
  //   // //container.classList.remove("on");
  //   // container.classList.add("off");
  //   document.getElementById('form-meeting').classList.remove("off");
  // }

  // document.querySelector('.addMeeting').onclick = function () {
  //   // let container = document.getElementById('first');
  //   // //container.classList.remove("on");
  //   // container.classList.add("off");
  //   document.getElementById('form-meeting').classList.remove("off");
  // }



})