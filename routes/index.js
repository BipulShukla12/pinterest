var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pintrest' });
});
router.get('/signup', function (req, res, next) {
  res.render('signup', { title: 'Signup' });
});


module.exports = router;
