document.addEventListener('DOMContentLoaded', () => {
  //var marker = []

  const teachersMap = new google.maps.Map(document.getElementById('teachersMap'), {
    zoom: 13,
  });

  geolocalize().then(center => {
    teachersMap.setCenter(center);

    //render de main pasar user con rol profe
    console.log('Teacher JSON ya en listTeacherMap', teacherList)
    teacherList.forEach(teacher => {
      var infowindow = new google.maps.InfoWindow();

      marker = new google.maps.Marker({
        position: {
          lat: teacher.latitude,
          lng: teacher.longitude
        },
        map: teachersMap,
        title: teacher.name
      });
      // google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
      //   return function () {
      //     infowindow.setContent(content);
      //     infowindow.open(teachersMap, marker);
      //   };
      // })(marker, content, infowindow));


      //dentro de un for
      google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {

          infowindow.setContent(`<div class="infoMaps">
          <h1>${teacher.name}</h1>
          <p>${teacher.description}</p>
          <a href="/user/addEvent/${teacher._id}">Pide cita!!</a>
          </div>`);
          infowindow.setOptions({ maxWidth: 200 });
          infowindow.open(teachersMap, marker);
        }
      })(marker))

    })

  });



}, false);


