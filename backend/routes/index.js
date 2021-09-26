var express = require('express');
var router = express.Router();
mongoose = require('mongoose');
search = require('../controller/search');
detail = require('../controller/detail');
adminDetail = require('../controller/adminDetail');
signup = require('../controller/signup');
loginUser = require('../controller/login');
addaddevent = require('../controller/addevent');
editaddevent = require('../controller/editEvent');
dashboard = require('../controller/dashboard');

adminChangeStatus = require('../controller/adminChangeStatus');

/* GET event page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', search);
router.get('/detail', detail);
router.get('/adminDetail', adminDetail);
router.post('/loginUser', loginUser);
router.post('/signUpUser', signup);
router.post('/addaddevent', addaddevent.addNewListing);
router.post('/uploadaddeventImage', addaddevent.uploadProductImage);
router.post('/editaddeventUpdate', addaddevent.editaddeventUpdate);
router.get('/editaddevent', editaddevent);
router.get('/dashboard', dashboard);

router.post('/changeeventStatus', adminChangeStatus);

module.exports = router;
