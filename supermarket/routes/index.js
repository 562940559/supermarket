var express = require('express');
var captcha = require("../services/captcha.js");
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//生成验证码
router.get("/api/captcha",captcha.getCaptcha);
//校验验证码
router.get("/api/verify_captcha",captcha.verifyCaptcha);

module.exports = router;
