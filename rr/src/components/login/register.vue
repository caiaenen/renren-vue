<template>
  <div>
   <form class="form-signin text-center clearfix " style="width:460px;height: 300px;margin:200px auto;">
          <h1 class="h3 mb-5 font-weight-normal">注册 ZiMuZu.TV 字幕组网站账号</h1>
         <input type="text" id="userName" class="form-control mb-3 w-75 float-left"  placeholder="用户名"  @blur.prevent="checkName"  v-model="name" @focus="tip_name"><span class='bg-secondary text-white small float-left mt-1 ml-2'>{{tipName}}</span><span class='bg-danger text-white small float-left mt-1 ml-2'>{{doubleName}}</span>

         <input type="email" id="inputEmail" class="form-control mb-3 w-75 float-left" placeholder="邮箱地址"  @blur.prevent="checkEmail" v-model="email" ><span class='bg-danger text-white small float-left mt-1 ml-2'>{{doubleEmail}}</span>

         <input type="password" id="inputPassword" class="form-control mb-3 w-75 float-left" placeholder="密码" v-model="mima" value=""  @focus="tip_mima"> <span class='bg-secondary text-white small float-left mt-1 ml-2'>{{tipMima}}</span><span class='bg-danger text-white small float-left mt-1 ml-2'>{{tipPwd}}</span>
         
         <input type="password" id="resurePassword" class="form-control mb-3 w-75 float-left" placeholder="确认密码"  v-model="queren" > <span class='bg-danger text-white small float-left mt-1 ml-2'>{{rePwd}}</span>
         
         <span  class="bg-danger text-white small  mt-1 ml-2 float-left" v-show="tip">{{msg}}</span>
         
         <div class="clearfix ml-5" >
             <button class="btn btn-lg btn-primary btn-block w-50 " type="button" @click="handleReg"  data-toggle="modal" data-target="#exampleModal" >注册</button>
         </div>

         <!-- Modal -->
         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog" role="document">
                 <!-- 登陆不成功 -->
                 <div class="modal-content" v-if="isSucess">
                     <div class="modal-header"> <h6 class="modal-title" id="exampleModalLabel">注册不成功</h6> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body mt-2 mb-2"> 注册不成功，按  <span class="bg-warning text-white rounded ml-1 mr-1 pl-1 pr-1">确定</span>键后重新注册。</div> <div class="modal-footer"> <button type="button" class="btn btn-warning small" data-dismiss="modal" >确定</button> </div>
                 </div>
                 <!-- 登陆成功 -->
                  <div class="modal-content" v-if="!isSucess">
                    <div class="modal-header"> <h6 class="modal-title" id="exampleModalLabel">注册成功</h6> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body mt-2 mb-2"> 已经注册成功，按  <span class="bg-primary text-white rounded ml-1 mr-1 pl-1 pr-1">确定</span>键后可以跳转到登陆界面登陆。</div> <div class="modal-footer"> <router-link to="/login"><button type="button" class="btn btn-primary small" data-dismiss="modal">确定</button></router-link> <button type="button" class="btn btn-danger small" data-dismiss="modal">取消</button> </div>  </div>
             </div>
         </div>

     </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  components: {

  },
  data(){
      return{
            tipName:'',
            doubleName:'',
            doubleEmail:'',
            tipPwd:'',
            rePwd:'',
           isSucess:true,
           pwd:false,
           reck:false,
           msg:'与第一次密码不同',
           mima:'',
           isA:true,
           queren:'',
           name:'',
           tipMima:'',
           email:'',
           tip:false,   
           isSumit:false
      }
     
  },
  methods:{
    tip_name(){
      this.doubleName=''
      this.tipName="用户名在6到20位"
    },
    tip_mima(){
      this.tipPwd=''
      this.tipMima="密码在6到20位"
    },
    checkName(){
        //1:获取用户输入用户名
        var n = this.name;
        //2:发送ajax请求
        var url = "http://localhost:3000/existsName";
        url+="?userName="+n;
        this.axios.get(url).then(result=>{
          if(result.data.code > 0){
            this.isSumit = true;
          }else{
            this.tipName=''
            this.doubleName="该用户名己存在!"
            this.isSumit = false;
          }

        })
        //2:验证
        //验证用户名
        if(this.name.length>6&&this.name.length<20){
          this.doubleName=''
          this.tipName=''
           return;
        }
      },
      checkEmail(){
        var e = this.email;
        //2:发送ajax请求
         var reg=RegExp(/^\s*\w+@\w+.(com|cn)\s*$/);
        if(!reg.test(inputEmail.value)){
            this.doubleEmail="邮箱格式不正确"
            this.isSumit = false;
            return
        }
        var url = "http://localhost:3000/existsEmail";
        url+="?inputEmail="+e;
        this.axios.get(url).then(result=>{
          if(result.data.code > 0){
            this.doubleEmail=''
            this.isSumit = true;
          }else{
            this.doubleEmail="该邮箱己存在!"
            this.isSumit = false;
          }
        })
        //验证密码
       
      },
       handleReg(){
        if(this.isSumit === false){ //禁止提交
          return;
        }
        //1:获取用户输入用户名 密码 确认密码
        //  双向绑定
        var n = this.name;
        var e=this.email;
        var p = this.mima;
        var p2 = this.queren;

        if(this.mima.length<6||this.mima.length>20){
          this.tipMima=''
          this.tipPwd="密码个数在6-20位"
          return;
        }else{
          this.tipMima=''
          this.tipPwd=""
        }
        //验证密码与确认密码一致
        if(p != p2){
          this.rePwd="两次密码不一致"
          return;
        }
        else{
          this.rePwd=""
        }
        //3:发送ajax请求
        var url = "http://localhost:3000/register?";
        url +="name="+n;
        url +="&email="+e;
        url +="&pwd="+p;
        url +="&resure="+p2
        this.axios.get(url).then(result=>{
            if(result.data.code>0) this.isSucess=false
        })
        //4:提示
      }
  }

}
</script>