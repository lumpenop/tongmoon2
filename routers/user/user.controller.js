let login = (req,res)=>{

}

let loginPost = (req,res)=>{

}

let mypage = (req,res)=>{

}

let review = (req,res) =>{

}

let cart = (req,res) =>{


}

let history = (req,res)=>{

}

let order_history = (req,res)=>{

}

let pay = (req,res)=>{

}

let payPost = (req,res)=>{

}



//////////////////////카카오로그인///////////
const kakao = {
    clientID: process.env.kakao_clientID,
    clientSecret: process.env.kakao_secret,
    redirectUri: process.env.kakao_RedirectURI
}

//카카오 계정으로 가입하는 페이지로 보내주기
let kakaoLogin = (req,res)=>{
    
        const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code`;
        res.redirect(kakaoAuthURL);
    }


////가입 후 콜백
let kakaoCB = async(req,res)=>{
    try{//access토큰을 받기 위한 코드
    kakaoToken = await axios({//token
        method: 'POST',
        url: 'https://kauth.kakao.com/oauth/token',
        headers:{
            'content-type':'application/x-www-form-urlencoded'
        },
        data:qs.stringify({
            grant_type: 'authorization_code',//특정 스트링
            client_id:kakao.clientID,
            client_secret:kakao.clientSecret,
            redirectUri:kakao.redirectUri,
            code:req.query.code,
            })
        })
    }catch(err){
        res.json(err.data);
    }
    //access토큰을 받아서 사용자 정보를 알기 위해 쓰는 코드
    let users;
    try{
//access정보를 가지고 또 요청해야 정보를 가져올 수 있음.
        users = await axios({
            method:'get',
            url:'https://kapi.kakao.com/v2/user/me',
            headers:{
                Authorization: `Bearer ${kakaoToken.data.access_token}`
            }//헤더에 내용을 보고 보내주겠다.
        })

        res.cookie('access_token',kakaoToken.data.access_token);
        res.cookie('token_type',kakaoToken.data.token_type);
        res.cookie('refresh_token',kakaoToken.data.refresh_token);
        res.cookie('expires_in',kakaoToken.data.expires_in);
        res.cookie('scope',kakaoToken.data.scope);
        res.cookie('refresh_token_expires_in',kakaoToken.data.refresh_token_expires_in);
        userid = users.data.id;
        nickname = users.data.kakao_account.profile.nickname;
        res.cookie('userid',userid);
        res.cookie('username',username);        
        user_email = users.data.kakao_account.email;

    }catch(e){
        console.log(e);
    }

    makemember(userid,user_email);

    async function makemember(a,c){
        let mem = await fetch('http://localhost:3000/user/signup/idChk',{
            method:'post',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({userid:a})
        }).then(res=>{
            return res.json()
        }).then (async(json)=>{
            if(json.check){
                signup2 = await user.create({
                userid:a ,user_email:c ,
                social:"kakao"
                })
                
            }
        })
    }
    // 
    res.redirect('/');

        
        
}
        
     
      

////////////네이버 로그인///////////////
var client_id = process.env.naver_clientID;
var client_secret = process.env.naver_secret;
var state = "RAMDOM_STATE";
var redirectURI = encodeURI(process.env.naver_RedirectURI);

let naverLogin=  (req,res)=>{
    api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
    res.redirect(api_url);
}


let naverCB=async(req,res)=>{
    //네이버 로그인 콜백 들어옴
    code= req.query.code;
    state = req.query.state;
    let YOUR_ACCESS_TOKEN;

    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
     + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
//토큰 받기 과정
    try{
        let naverlog = await fetch(api_url,{
            method:"post",
            headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
        }).then(res=>{

            return res.json();
        }).then(json=>{
            res.cookie('access_token',json.access_token);
            res.cookie('refresh_token',json.refresh_token);
            res.cookie('token_type',json.token_type);
            res.cookie('expires_in',json.expires_in);
            YOUR_ACCESS_TOKEN=json.access_token;
            
        })
    

    //받은 토큰으로 정보 요청
        try{
            let userid,username,user_email,user_number;
            var token = YOUR_ACCESS_TOKEN;
            var header = "Bearer " + token; // Bearer 다음에 공백 추가

            let member = await fetch('https://openapi.naver.com/v1/nid/me',{
                method:"post",
                headers:{'Authorization': header}
            }).then(res=>{
                return res.json();
            }).then(json=>{
                userid=json.response.id;
                res.cookie('userid',userid);
                user_email = json.response.email;
                user_number=json.response.mobile.toString().replace(/\-/gi,'');
                username = json.response.name;

                res.cookie('username',username);
                //네이버는 이름을 던져준다.
            })


            let rst= await fetch('http://localhost:3000/user/signup/idChk',{
                method:'post',
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify({userid:userid})
            }).then(res=>{
                console.log
                return res.json()
            }).then (async(json)=>{
                if (json.check){
                    let signup1 = await user.create({
                    username,userid,user_email,user_number,
                    social:"naver"
                })
            }

            })
        }catch(e){
            console.log(e);
        }
        res.redirect('/');
    }catch(e){console.log(e)}
}

module.exports = {
    login, loginPost,mypage,review,cart,history,order_history,pay,payPost,naverCB,naverLogin,kakaoCB,kakaoLogin,
}