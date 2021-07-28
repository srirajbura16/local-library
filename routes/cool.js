// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("you're so cool");
});

module.exports = router;
