const express = require('express');
const router = express.Router();

//Register
router.get('/register',(req, res, next)=>{
  res.send('Register');
});

//Authentication
router.get('/authenticate',(req, res, next)=>{
  res.send('Authenticate');
});

//Profile
router.get('/profile',(req, res, next)=>{
  res.send('Profile');
});


module.exports = router;
