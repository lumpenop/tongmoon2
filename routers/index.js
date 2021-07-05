const express =require('express');
const router = express.Router();
const sub = require('./sub/index');
const main = require('./main/index');

router.use('/sub',sub);
router.use('/',main);

module.exports=router;