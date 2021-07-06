const express =require('express');
const router = express.Router();
const menu = require('./menu/index');
const main = require('./main/index');
const user = require('./user/index');
const search = require('./search/index')


router.use('/user',user);
router.use('/menu',menu);
router.use('/search',search)
router.use('/',main);

module.exports=router;