<template>
<div id="header">
        <div class="head-nav bg-dark">
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <router-link class="navbar-brand ml-2" to="/">
                    <img src="img/logo.png" alt="renrenzimu"/>
                </router-link>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-primary"></span>
                </button>
                <div class="navbar-collapse collapse mt-2 bg-dark" id="navbarsExampleDefault" >
                    <ul class="navbar-nav mr-auto mt-1">
                        <li class="nav-item ml-4">
                            <router-link class="nav-link text-rr" to="/article">资讯</router-link>
                        </li>
                        <li class="nav-item ml-4">
                            <router-link class="nav-link text-rr" to="/source">影视库</router-link>
                        </li>
                        <li class="nav-item ml-4">
                            <router-link class="nav-link text-rr" to="/help">互助求档</router-link>
                        </li>
                        <li class="nav-item ml-4">
                            <router-link class="nav-link text-rr" to="/join">加入字幕组</router-link>
                        </li>

                    </ul>
                    <div class="input-group position-relative small mb-2 ml-2 " style="width: 350px">
                        <input  id="search" type="text" @focus="search" @blur="blur" class="form-control small mt-3" 
                        :placeholder="holder"  v-model="input" value="" @keyup.enter="handleSearch"/>
                        <div class="input-group-append small pt-2 pb-2 mt-2">
                            <button class="btn btn-outline-primary rounded small " @click="handleSearch">
                                <span>搜索</span>
                            </button>
                        </div>
                        <ul class="navbar-nav mr-auto mt-3">
                            <li class="nav-item ml-4">
                                <router-link class="nav-link text-rr h6" to="/login" v-show="!isLogin">登陆/注册</router-link><span class="nav-link text-rr h6 " v-show="isLogin">你好，{{user}}</span>
                            </li>
                        </ul>
                        <div class="search-list  position-absolute bg-dark w-75 pl-3"  v-show="isSearch">
                            <ul class="corner box key-result list-unstyled " style="text-decoration: none">
                                <li class="mt-2" >
                                    <a href="/search?keyword=%E6%AF%92%E6%9E%AD" style="text-decoration: none">
                                        <span  class="pr-2">1</span>毒枭</a>
                                </li >
                                <li class="mt-2" >
                                    <a href="/search?keyword=%E6%AF%92%E6%B6%B2" style="text-decoration: none">
                                        <span  class="pr-2">2</span>毒液</a>
                                </li>
                                <li class="mt-2" >
                                    <a href="/search?keyword=%E7%A5%9E%E5%A5%87%E5%8A%A8%E7%89%A9" style="text-decoration: none">
                                        <span  class="pr-2">3</span>神奇动物</a>
                                </li>
                                <li class="mt-2" >
                                    <a href="/search?keyword=%E7%94%9F%E6%B4%BB%E5%A4%A7%E7%88%86%E7%82%B8" style="text-decoration: none">
                                        <span  class="pr-2">4</span>生活大爆炸</a>
                                </li>
                                <li class="mt-2" >
                                    <a href="/search?keyword=%E8%A1%8C%E5%B0%B8%E8%B5%B0%E8%82%89"style="text-decoration: none">
                                        <span  class="pr-2">5</span>行尸走肉</a>
                                </li>
                                <li class="mt-2" >
                                    <a href="/search?keyword=%E5%A4%A9%E8%B5%8B%E5%BC%82%E7%A6%80"style="text-decoration: none">
                                        <span  class="pr-2">6</span>天赋异禀</a>
                                </li>
                                <li class="mt-2" >
                                    <a href="/search?keyword=%E9%97%AA%E7%94%B5%E4%BE%A0"style="text-decoration: none">
                                        <span  class="pr-2">7</span>闪电侠</a>
                                </li>
                                <li class="mt-2" >
                                    <a href="/search?keyword=%E6%B3%B0%E5%9D%A6"style="text-decoration: none">
                                        <span  class="pr-2">8</span>泰坦</a>
                                </li>
                                <li class="mt-2" >
                                    <a href="/search?keyword=%E7%BE%8E%E5%9B%BD%E6%81%90%E6%80%96%E6%95%85%E4%BA%8B" style="text-decoration: none">
                                        <span  class="pr-2">9</span>美国恐怖故事</a>
                                </li>
                                <li class="mt-2" >
                                    <a href="/search?keyword=%E6%88%91%E6%98%AF%E5%A4%A7%E5%93%A5%E5%A4%A7" style="text-decoration: none">
                                        <span  class="pr-2">10</span>我是大哥大</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  data(){
      return{
          user:'',
          isLogin:false,
          isSearch:false,
          holder:'请输入关键字',
          input:''
      }
  },
  components: {
    
  },
  methods: {
      search(){
          this.isSearch=true,
          this.holder=''
      },
      blur(){
          this.isSearch=false,
          this.holder='请输入关键字'
      },
      handleSearch(){
      //1:获取三个参数
       var kw = this.input;
       this.input=""
       //5:发送ajax
       var url = "http://localhost:3000/";
       url +="search?keyword="+kw;
       this.axios.get(url).then(result=>{
         
         this.$router.push(`/search?keyword=${kw}`)
         this.$router.go(0)
       })
      
    },
    getName(){
         var name = sessionStorage.getItem("name")
         if(name)
         {
             this.isLogin=true;
             this.user=name
         }else{
             return
         }
    }
      
  },
  mounted() {
      this.getName()
  },
}
</script>

<style scoped>
a {
  text-decoration: none!important;
}
body{
  font-size: 15px;
}
.head-nav .navbar{
  height: 80px;
}
.head-nav .navbar .navbar-collapse .input-group .search-list{
  top:56px;
  left: 0px;
  z-index: 1000;
}
.head-nav .navbar .navbar-collapse .input-group .search-list ul li a{
  color: #fff;
}
.head-nav .navbar .navbar-collapse .input-group .search-list ul li a:hover{
  color:#00a0e9;
}
.input-group .form-control:onfocus.search-list{
  display: block;
}
</style>