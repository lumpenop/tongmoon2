const express = require('express');
const router = express.Router();
const controller = require('./controller');
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

router.get('/',controller.sub)

module.exports = router;