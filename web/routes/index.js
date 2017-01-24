var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Playtoy' });
});

/* GET box page. */
router.get('/box', function(req, res, next) {
  res.render('box', { title: 'Box' });
});

/* GET Garden page. */
router.get('/garden', function(req, res, next) {
  res.render('garden', { title: 'Garden' });
});

/* GET Bay page. */
router.get('/bay', function(req, res, next) {
  res.render('bay', { title: 'Bay' });
});

module.exports = router;
