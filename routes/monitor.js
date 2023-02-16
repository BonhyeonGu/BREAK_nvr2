let express = require('express');
let router = express.Router();

module.exports = function(app, fs) {
    app.get('/', function(req, res, next) {
      res.render('index', {
        title: '예제 홈페이지',
        length: 5
      })
    });
  }
module.exports = router;