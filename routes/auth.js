const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Subject = require("../models/Subject");
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

//funciones auxiliares

//var checkEmpty = () => arguments[0] === '';
function checkEmpty() { return arguments[0] === '' }

//COMO HAGO PARA QUE UNA FUNCIóN CAMBIE el 
//argumento sin return

// var hassPass = (password) => {
//   const salt = bcrypt.genSaltSync(bcryptSalt);
//   password = bcrypt.hashSync(password, salt);
// };


///INDEX
router.get('/info', (req, res, next) => {
  res.render('info');
});

router.get("/login", ensureLoggedOut(), (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.get("/signup", (req, res, next) => {
  Subject.find()
  .then(subjects=>{
    //console.log(subjects);
    res.render("auth/signup", {subjects});
  })
  .catch(err => {
    res.render("auth/signup", { message: "Something went wrong" });
  })
});

//Slide

///LOGIN
router.post("/login", passport.authenticate("local", {
  successRedirect: "./user/main",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));


router.get("/signup/", (req, res) => {
  res.redirect("auth/signupII");
});


///SIGN-UP
////Separar esto y mandarlo a mongo en el sign2
//Comprobar si puedo clonar es botones y que vayan para el mismo ladoooo
router.post("/signup", (req, res, next) => {

  if (Object.values(req.body).some(checkEmpty)) {
    res.render("auth/signup", { message: "Ninguno de los campos puede estar vacio" });
    return;
  }

  // const username = req.body.username;
  User.findOne({ username: req.body.username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    console.log(req.body)

    req.body.latitude = parseFloat(req.body.latitude);
    req.body.longitude = parseFloat(req.body.longitude);
    
    const salt = bcrypt.genSaltSync(bcryptSalt);
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User(req.body);

    

    newUser.save()
      .then(() => {
        console.log('Ha GUARDADO CORRECTAMENTE el nuevo usuario')
        res.redirect("/login");
      })
      .catch(err => {
        res.render("auth/signup", { message: "Something went wrong" });
      })
  });
});




router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
