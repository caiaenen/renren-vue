const express=require('express');
var app = express();
app.listen(3000);
//express mysql 参数 request;response
//跨域访问配置
//1:加载模块cors
const cors = require("cors");
//2:配置cors
app.use(cors())
//   {
//   origin:["http://127.0.0.1:8080",
//          "http://localhost:8080",
//          "http://127.0.1:3000",
//          "http://localhost:3000",
//         "*"],//允许列表
//   credentials:true   //是否验证
// })

const pool = require("./pool");




//使用body-parser中间件将post请求数据解析为对象
//注意：一定要写在路由的前边

//3:加载第三方模块: express-session
const session = require("express-session");
//4:对模块配置
app.use(session({
  secret:"128位随机字符串",   //安全令牌
  resave:false,              //请求保存
  saveUninitialized:true,    //初始化
  cookie:{                   //sessionid保存时
    maxAge:1000*60*60*24     //间1天 cookie
  }
}));
//功能十一:用户登录
app.get("/login",(req,res)=>{
  //1:获取登录参数
  var $uname=req.query.userName;
	var $password=req.query.inputPassword;
  //2:正则
  //3:创建sql
  console.log($uname,$password)
  var sql ="  SELECT * FROM renren_user WHERE  userName= ? AND inputPassword=?";

  // //4:如果参数匹配成功将用户id保存session对象
  pool.query(sql,[$uname,$password],(err,result)=>{
       if(err)throw err;
       if(result[0]==undefined){
        res.send({code:-1,msg:"用户名或密码有误"})
       }else{
        
         res.send({code:1,msg:"登录成功"});
       }
  });
});
app.use(express.static('static'))
//动态加载source
app.get("/source",(req,res)=>{
  var chanel=req.query.chanel
  if(chanel!=undefined){
      let sql=`SELECT * FROM renren_source where chanel=?`
       pool.query(sql,[chanel],(err,result)=>{
      if(err)
      throw (err)
      res.send(result)
  })
  }else{
      let sql=`SELECT * FROM renren_source`
      pool.query(sql,(err,result)=>{
          if(err)
          throw (err)
          res.send(result)
  })}
})
//得到分页后的列表
//#功能六:商品列表
app.get("/sourcePage",(req,res)=>{
  //1:参数       pno 页码;pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.2:默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 8;
  }
  //2:验证正则表达式
  var reg = /^[0-9]{1,}$/;
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页码格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
  }
  //3:创建sql
  //  查询总页数
  var sql = "SELECT count(sourceId) as c FROM renren_source";
  var progress = 0; //sql执行进度
  obj = {code:1};
  pool.query(sql,(err,result)=>{
       if(err)throw err;
       var pageCount = Math.ceil(result[0].c/pageSize);
       obj.pageCount = pageCount;
       progress += 50;
       if(progress == 100){
        res.send(obj);
       }
  });
  //  查询当前页内容
var sql=" SELECT *";
    sql +=" FROM renren_source";
    sql +=" LIMIT ?,?"
var offset = parseInt((pno-1)*pageSize);
pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    obj.data = result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
  }); 
});
// /detail/
app.get("/detail",(req,res)=>{
  var id=req.query.SourceId
  var sql=`SELECT * FROM renren_source WHERE sourceId=?`
  pool.query(sql,[id],(err,result)=>{
      if(err)
      throw (err)
      res.send(result)
  })
})
//search
app.get("/search",(req,res)=>{

  //关键字
  var keyword = req.query.keyword;
  var sql = " SELECT *";
  sql +=" FROM renren_source";
  sql +=" WHERE name LIKE ?";
  pool.query(sql,[`%${keyword}%`],(err,result)=>{
      if(err)throw err;
      if(result.length == 0){
        res.send({code:-1,msg:"您搜索的不存在噢!"});
      }else{
        res.send({code:1,data:result})
      }
  });
})
//评论
app.get("/getHelp",(req,res)=>{
  //1:参数       pno 页码;pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.2:默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }
  //2:验证正则表达式
  var reg = /^[0-9]{1,}$/;
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页码格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
  }
  //3:创建sql
  //  查询总页数
  var sql = "SELECT count(id) as c FROM renren_comment";
  var progress = 0; //sql执行进度
  obj = {code:1};
  pool.query(sql,(err,result)=>{
       if(err)throw err;
       //console.log(result[0].c);
       var pageCount = Math.ceil(result[0].c/pageSize);
       obj.pageCount = pageCount;
       progress += 50;
       if(progress == 100){
        res.send(obj);
       }
  });
  //  查询当前页内容
var sql=" SELECT *";
    sql +=" FROM renren_comment order by id desc";
    sql +=" LIMIT ?,?"
var offset = parseInt((pno-1)*pageSize);
pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    obj.data = result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
  }); 
})
//发表评论
app.get("/addComment",(req,res)=>{
  //1:参数 nid content
  var userName=req.query.name
  var degree="普通用户"
  
  var nid = req.query.nid;
  var content = req.query.content;
  //console.log("1:"+nid+"|"+content);
  //2:sql  INSERT INTO
  var sql = "INSERT INTO renren_comment(id,userName,degree,content,ctime,nid)VALUES(null,?,?,?,now(),null)";
  pool.query(sql,[userName,degree,content,nid],(err,result)=>{
      if(err)throw err;  
      //console.log(2);
      //console.log(result);
      //影响行数
      if(result.affectedRows > 0){
       res.send({code:1,msg:"评论发送成功"});      
      }else{
        res.send({code:-1,msg:"评论发送失败"});    
      }
  }) 
  //3:json {code:1,msg:""}
})
//功能:用户名是否存在
app.get("/existsName",(req,res)=>{
  //1:参数
  var name = req.query.userName;
  //2:sql
  var sql = " SELECT count(userName) as c FROM renren_user";
      sql+=" WHERE userName = ?";
  pool.query(sql,[name],(err,result)=>{
       if(err)throw err;
       //result node.js 数组
       //[{c:0}]
       ///result[0].c
       if(result[0].c > 0){
         res.send({code:-1,msg:"该用户名己存在"})
       }else{
         res.send({code:1,msg:"欢迎使用"});
       }
  })    
  //3:json
});

//功能:邮箱是否存在
app.get("/existsEmail",(req,res)=>{
  //1:参数
  var e = req.query.inputEmail;
  //2:sql
  var sql = " SELECT count(inputEmail) as c FROM renren_user";
      sql+=" WHERE inputEmail = ?";
  pool.query(sql,[e],(err,result)=>{
       if(err)throw err;
       //result node.js 数组
       //[{c:0}]
       ///result[0].c
       if(result[0].c > 0){
         res.send({code:-1,msg:"该邮箱己存在"})
       }else{
         res.send({code:1,msg:"欢迎使用"});
       }
  })    
  //3:json
});
//用户注册
app.get("/register",(req,res)=>{
   //1:参数 name,pwd
   var $name = req.query.name;
   var $email=req.query.email;
   var $pwd=req.query.pwd;
   var $resure=req.query.resure;
   //1.1:验证
   var sql = "INSERT INTO renren_user VALUES(?,?,?,?)";
   pool.query(sql,[$name,$email,$pwd,$resure],(err,result)=>{
          if(err)throw err;
          if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"})
          }else{
            res.send({code:-1,msg:"注册失败"});
          }
   })
});
//首页资源
app.get("/get",(req,res)=>{

  //关键字
  var keyword = req.query.keyword;
  var sql = " SELECT * FROM renren_threater WHERE title = ?"
  pool.query(sql,[keyword],(err,result)=>{
      if(err)throw err;
      if(result.length == 0){
        res.send({code:-1,msg:"您搜索的不存在噢!"});
      }else{
        res.send({code:1,data:result})
      }
  });
})