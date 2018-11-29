

$(document).ready(() => {

  document.getElementById('addMeeting').onclick = function () {
    charactersAPI.getFullList()
      .then(data => {
        let container = document.querySelector('.characters-container');
        container.innerHTML = "";
        data.forEach(element => {
          let z = document.createElement('div');
          z.setAttribute('class', 'character-info');
          z.innerHTML = createCharacterDiv(element);
          container.appendChild(z);
        });
      })
      .catch(err => console.log(err))
  }

})