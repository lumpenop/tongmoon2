const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const router = require('./routers/index');
const mysql2 = require('mysql2');
const mysql = require('mysql');
const {sequelize} = require('./models');


sequelize.sync({force:false,})
.then(()=>{
    console.log('접속 완료');
}).catch((e)=>{
    console.log(e);
    console.log('접속 실패');
})

app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','html')
nunjucks.configure('view',{
    express:app
})

app.use(express.static('public'));
app.use('/',router);

app.listen(3500,()=>{
    console.log('server start port:3500');
})