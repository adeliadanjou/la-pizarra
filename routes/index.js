const express = require('express');
const router  = express.Router();
const Subject = require("../models/Subject")

/* GET home page */
router.get('/', (req, res, next) => {
Subject.find()
//.then(subjects => res.render('index', {subjects}))
.then(subjects => {
  console.log(subjects);
  res.render('index', {subjects});
})
.catch(err => {
  res.render("index", { message: "Something went wrong" });
})
  
});

router.use('/', require('./auth'));
router.use('/', require('./user'));

module.exports = router;
