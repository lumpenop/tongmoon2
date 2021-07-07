const {user} = require('../../models/index')


let main = async(req,res)=>{
    res.send('yoyouyo');
}

// let join = async(req,res)=>{
//     let {userid,userpw,username,gender,user_email,user_address,user_number,user_birth,point,chargecash,totalprice} = req.body;
//     let result = await user.create({
//         userid,userpw,username,gender,user_email,user_address,user_number,user_birth,point,chargecash,totalprice
//     })

//     res.send('회원가입을 환영합니다. <a href="/login">로그인</a>')
// }

// let login = (req,res)=>{
//     res.render('./login.html')
// }

// let login_check = async (req,res)=>{
//     let {userid,userpw} = req.body;
//     console.log(userid,userpw);
//     let result = await user.findOne({
//        where : {userid,userpw}
//     })
//     console.log(result);
//     res.send(result)

// }

// let test = (req,res) =>{
//     let {localUrl} = req.params;
//     console.log(localUrl);
//     res.render('./uri_test.html')
//     // res.send('성공 <a href="/test">뒤로가기</a>')
// }

module.exports = {
    main
}