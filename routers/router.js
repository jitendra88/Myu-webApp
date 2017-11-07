var express = require('express')
    , router = express.Router()
var homeCtl = require("../controllers/HomeCtl");
var loginCtl = require("../controllers/LoginCtl");

router.get('/', function(req, res) {
    homeCtl.index(req,res);
});
router.get('/user/login',function (req,res) {
    loginCtl.userLogin(req,res);

})

module.exports = router