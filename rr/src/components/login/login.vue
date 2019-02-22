<template>
  <div>
   <div class="text-center" >
    <form class="form-signin">
        <h4 class=" mb-4 font-weight-normal">登入网站</h4>
        <ul class="nav nav-tabs mb-3">
            <li class="nav-item">
                <a class="nav-link small text-muted active" href="#login-form" data-toggle="tab">账号密码登录 </a>
            </li>
            <li class="nav-item">
                <a class="nav-link small text-muted" href="#login-form-tel" data-toggle="tab">手机验证码登录</a>
            </li>
        </ul>
        <div class="tab-content">
            <div id="login-form" class="tab-pane active">
                <label for="userName" class="sr-only " >账号</label>
                <input type="text" id="userName" class="form-control mb-2" placeholder="User Name" v-model="name">
                <div>
                    <span id="textEmail"></span>
                </div>
                <label for="inputPassword" class="sr-only">密码</label>
                <input type="password" id="inputPassword" class="form-control mb-2" placeholder="Password" v-model="pwd">
                <div id="tip" v-if="error"><span class="text-danger small">
        账号或密码有误
    </span></div>
                <div class="checkbox mb-2">
                    <label>
                        <input type="checkbox" value="remember-me" class="mt-4"> 记住登录状态
                    </label>
                </div>
                <div class=" d-flex justify-content-sm-center  justify-content-center mb-3 text-center">
                    <div class="mr-2">  <button class="btn btn-primary text-center button"   @click="handleLogin">登录</button></div>
                    <div class="ml-2">  <router-link class="button btn btn-primary text-center" to="/register">注册</router-link></div>
                </div>
            </div>
            <div id="login-form-tel" class="tab-pane">
                <label for="tel" class="sr-only " >手机号</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend3">+86</span>
                        <input type="text" class="form-control is-invalid" id="tel" placeholder="Telephone" aria-describedby="inputGroupPrepend3" required>

                    </div>
                    <sapn class="small  "><button class="btn btn-primary small ml-3">发送验证码</button></sapn>
                </div>
                <div><span class="text-danger small d-none">
        手机验证码不正确
    </span></div>
                <div class="checkbox mb-2">
                    <label>
                        <input type="checkbox" value="remember-me" class="mt-4"> 记住登录状态
                    </label>
                </div>
                <div class=" d-flex justify-content-sm-center  justify-content-center mb-3 text-center">
                    <div class="mr-2">  <router-link class="btn btn-primary text-center button" onclick="check()" to="/">登录</router-link></div>
                    <div class="ml-2">  <router-link class="btn btn-primary text-center button" to="/register">注册</router-link></div>
                </div>
            </div>
        </div>

        <!--<label for="inputPassword" class="sr-only">密码</label>-->
        <!--<input type="password" id="inputPassword" class="form-control mb-2" placeholder="Password" required="">-->
        <!--<div><span class="text-danger small d-none">-->
        <!--账号或密码有误-->
        <!--</span></div>-->

</form>
        <div><span class="text-center small text-muted">
        本站由海外留學生創立於2015年1月1號的全新網站，您必須註冊才能登入討論交換！歡迎您的加入
    </span>
            </div>

</div>
</div>
</template>

<script>

export default {
  name: 'login',
  components: {

  },
  data(){
     return {
       name:"",
       pwd:"",
       error:false
     }
   },
   methods:{
     handleLogin(){
       //1:获取用户输入 用户名和密码
       var n = this.name;
       var p = this.pwd;
       //4:发送ajax请求
       var url = "http://localhost:3000";
       url+="/login?userName="+n;
       url+="&inputPassword="+p
       this.axios.get(url).then(result=>{
           if(result.data.code == 1){
               sessionStorage.setItem("name",this.name)
               this.$router.go(0)
               this.$router.push("/")
           }else{
              this.error=true
           }
       });
       //5:如果登录成功 跳转/Home
       //6:如果失败     提示消息
     }
}
}
</script>
<style scoped>
.form-signin{
    width: 430px;
    height: 300px;
    margin: 120px auto;
}
</style>
