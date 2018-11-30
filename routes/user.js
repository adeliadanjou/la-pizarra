const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Meeting = require("../models/Meeting");
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

router.get('/user/main', ensureLoggedIn(), (req, res) => {
  const id = req.user.id;
  const name = req.user.name;
  const role = req.user.role;

  User.find({ role: 'SOY PROFE' })
    .then(teacherList => {
      Meeting.find({ teacher: id })
        .then(meetings => {
          console.log(meetings)
          console.log(id, 'Renderiza bien el id ')
          console.log(teacherList)
          res.render('user/main', {
            id,
            name,
            role,
            meetings,
            teacherStr: JSON.stringify(teacherList)
    
          });
        })
        .catch(err => {
          res.render("user/main", { message: "Something went wrong" });
        })
    })

});

router.get('/user/addEvent/:id', (req, res, next) => {
  console.log(req.params.id,'POR EL AMOR DE TEO') 
  res.render('user/addEvent');
});

router.post("/user/addEvent/:id", (req, res, next) => {

  
  // console.log('IDddddddddddddddd',id)
   console.log(req.body.date, 'FECHAAAAA DEL EVENTO');

  User.findById(req.params.id)
    .then(thisUser => {
      meeting = new Meeting();
      meeting.teacher = thisUser._id;
      meeting.title = req.body.title;
      return meeting.save();
    })
    .catch(err => next(err));

  // console.log(req.params.id);
  // console.log(id);
  // console.log(role);
  // console.log('KJEFGHEKLGJEKDFJ SOY YOOOOOOOOOOOOO');


  //console.log(req.body);
  //Meeting.find()
  res.redirect("/user/main")
});




module.exports = router;