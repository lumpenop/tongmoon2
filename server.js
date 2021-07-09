const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const router = require('./routers/index');
const mysql2 = require('mysql2');
const mysql = require('mysql');
const {sequelize} = require('./models');


var connection = mysql.createConnection({
    host     : process.env.mysql_host,
    user     : process.env.mysql_user,
    password : process.env.mysql_password,
    database : 'tme'
});


app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','html')
nunjucks.configure('views',{
    express:app
})

app.use(express.static('public'));
app.use('/',router);

app.listen(3500,()=>{
    console.log('server start port:3500');
})