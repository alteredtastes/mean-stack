var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

router.post('/create-user', function(req, res, next) {
  var newUser = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  });

  newUser.save(function(err) {
    if(err) {throw err;}
  });

  res.json({
    message: 'user saved successfully'
  });
});

module.exports = router;
