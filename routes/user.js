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
  console.log(role, 'ESTE ES EL ROLE DEL USUARIO');
  User.find({ role: 'SOY PROFE' })
    .then(teacherList => {
      Meeting.find({ $or: [{ teacher: id }, { pupil: id }] })
        .then(meetings => {
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

router.post("/user/main", (req, res, next) => {
  const id = req.user.id;
  const name = req.user.name;
  const role = req.user.role;

  User.find({ subjects: req.body.subjects, role: 'SOY PROFE' })
    .then((teacherList) => {

      Meeting.find({ $or: [{ teacher: id }, { pupil: id }] })
        .then(meetings => {
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

router.post("/confirm/:id", (req, res, next) => {
  Meeting.findByIdAndUpdate({ _id: req.params.id }, {status: 'confirmed'})
    .then(meeting => {
      console.log(meeting, 'LA MITTTTINNNNNG que encuentra');
      res.redirect('/user/main')
    })
    .catch(err => {
      res.render("user/main", { message: "Something went wrong" });
    })
});

router.get('/user/addEvent/:id', (req, res, next) => {
  console.log(req.params.id, 'POR EL AMOR DE TEO')
  res.render('user/addEvent', { myId: req.params.id });
});

router.post("/user/addEvent/:id", (req, res, next) => {
  // console.log('IDddddddddddddddd',req.user.id)
  //  console.log(req.body.date, 'FECHAAAAA DEL EVENTO');
  // console.log(req.body.id,' EL ID DEL ALUMMMMMMNO')

  User.findById(req.params.id)
    .then(thisUser => {

      meeting = new Meeting();
      meeting.pupil = req.user._id;
      meeting.teacher = thisUser._id;
      meeting.title = req.body.title;
      meeting.date = req.body.date.toString();
      console.log(meeting, 'Evento guardado')
      return meeting.save()

    })
    .then(() => res.redirect("/user/main"))
    .catch(err => {
      next(err);
      res.redirect("/user/main");
    })

  // console.log(req.params.id);
  // console.log(id);
  // console.log(role);
  // console.log('KJEFGHEKLGJEKDFJ SOY YOOOOOOOOOOOOO');


  //console.log(req.body);
  //Meeting.find()
  res.redirect("/user/main")
});


module.exports = router;