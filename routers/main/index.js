const express = require('express');
const router = express.Router();
const controller = require('./main.controller');
const multer = require('multer'); 
const path = require('path'); 
// const auth = require('../../middleware/auth');

// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,callback){
//             callback(null,'public/uploads/user_image/')
//         },
//         filename:function(req,file,callback){
//             callback(null,new Date().valueOf()+ path.extname(file.originalname))
//         }
//     })
// });


router.get('/',controller.main);



module.exports = router;