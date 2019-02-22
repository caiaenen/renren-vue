<template>
  <div id="app">
   <Header></Header>
    <router-view></router-view>
    
    
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  components:{
    Header
  },
  data() {
    return {
      input:''
    }
  },
  methods:{
      handleSearch(){
      //1:获取三个参数
       var kw = this.input;
       //5:发送ajax
       var url = "http://127.0.0.1:3000/";
       url +="search?keyword="+kw;
       this.axios.get(url).then(result=>{
         console.log(result.data);
       })
      }
    }
}
</script>>
<style>
#app{
  position:relative;
}
</style>
