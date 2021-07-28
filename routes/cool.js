const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("you're so cool");
});

module.exports = router;
