<template>
  <div>
   <div class="container clearfix" style="margin-top: 120px">
    <div class="row">
        <div class="col-md-3  clearfix list-group text-center font-weight-bold list-group"><div class="text-white bg-primary list-group-item "><div class=""> 本区活跃会员</div></div>
            <ul class="list-unstyled row border-0 mt-2 list-group-item list-group-item">
                <li class=" col-sm-12  float-left d-inline-block mb-3 small" >
                    <img src="img/renren-news/author/author-1.jpeg" class="float-left" style="border-radius: 50%"><div class="information-au float-left ml-3" data-uid="5297266">  <a href="/user/5297266" target="_blank" class="text-muted small "> 李喜儿</a> &nbsp; <span class="bg-danger text-white rounded small">认证评论员</span> </div>
                    <br/>
                </li>
                <li class=" col-sm-12  float-left d-inline-block mb-3 small" >
                    <img src="img/renren-news/author/author-1.jpeg" class="float-left" style="border-radius: 50%"><div class="information-au float-left ml-3" data-uid="5297266">  <a href="/user/5297266" target="_blank" class="text-muted small "> 李喜儿</a> &nbsp; <span class="bg-danger text-white rounded small">认证评论员</span> </div>
                    <br/>
                </li>
                <li class=" col-sm-12  float-left d-inline-block mb-3 small" >
                    <img src="img/renren-news/author/author-1.jpeg" class="float-left" style="border-radius: 50%"><div class="information-au float-left ml-3" data-uid="5297266">  <a href="/user/5297266" target="_blank" class="text-muted small "> 李喜儿</a> &nbsp; <span class="bg-danger text-white rounded small">认证评论员</span> </div>
                    <br/>
                </li>
                <li class=" col-sm-12  float-left d-inline-block mb-3 small" >
                    <img src="img/renren-news/author/author-1.jpeg" class="float-left" style="border-radius: 50%"><div class="information-au float-left ml-3" data-uid="5297266">  <a href="/user/5297266" target="_blank" class="text-muted small "> 李喜儿</a> &nbsp; <span class="bg-danger text-white rounded small">认证评论员</span> </div>
                    <br/>
                </li>
                <li class=" col-sm-12  float-left d-inline-block mb-3 small" >
                    <img src="img/renren-news/author/author-1.jpeg" class="float-left" style="border-radius: 50%"><div class="information-au float-left ml-3" data-uid="5297266">  <a href="/user/5297266" target="_blank" class="text-muted small "> 李喜儿</a> &nbsp; <span class="bg-danger text-white rounded small">认证评论员</span> </div>
                    <br/>
                </li>

            </ul>
        </div>
        <div class="offset-1 col-md-8 col-sm-12">
            <div class=" bg-primary rounded">
                <ul class="list-unstyled  clearfix nav nav-pills" style="height: 50px;">
                    <li></li>
                </ul>
            </div>
            <ul class="list-unstyled">
                <li class="list-group-item-light mb-4">
                    <div class="content">
                        <div class="card w-100">
                            <div class="card-body">
                                本区为了给会员互相帮助寻找自己喜欢的资源而开设，不可涉及涉嫌色情，政治以及与影视无关的内容，否则删除禁言求档所产生的纠纷本站一概不负责，请自行商讨解决，求档涉及到报酬之类的请谨慎，避免上当受骗。<br/>
                                <div v-show="isLogin" class="text-center mt-3" >
                                 <textarea  placeholder="求档主题" maxlength="1500" v-model="msg" style="width:400px;height:150px"></textarea>
                                <div class="text-center mt-3 border-0">
                                    <span class="btn btn-secondary text-white rounded" @click="addComment">发布求档主题</span>
                                </div>
                                
                                
                                </div>
                                <div v-show="!isLogin">
                                <div class="text-center mt-3"><span>请先<router-link
                                to="/login" class="btn btn-primary  rounded ">登录</router-link>再发表评论</span></div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                    </li>
                <li class="list-group-item"  v-for="item in list" :key="item.id">
                    <div class="card w-100 border-0">
                        <div class="card-body " >
                            <img src="img/renren-news/author/author-1.jpeg" class="float-left" style="border-radius: 50%;">
                            <div class="information-au float-left ml-3" data-uid="5297266">  <a href="/user/5297266" target="_blank" class="text-muted small "> {{item.userName}}</a> &nbsp; <span class="bg-danger text-white rounded small">{{item.degree}}</span> &nbsp; {{item.ctime|dateTimeFilter}} &nbsp;
                                <br/>
                        <div class=" small" >
                             {{item.content}}
                        </div>
                                <br/>
                            </div>
                            </div>
                        </div>
                </li>
            </ul>
                    </div>
                

        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'help',
  components: {

  },
  data(){
      return{
            isLogin:false,
           list:[],
            pageIndex:0,
            pageSize:7,
            pagecount:1,
            time:[],
            msg:'',
      }
      },
  methods: {
       getsMore(){
                 var name = sessionStorage.getItem("name")
                 if(name){
                     this.isLogin=true
                 }
                this.pageIndex++;
                 var url=`http://localhost:3000/getHelp?pno=${this.pageIndex}&&pageSize=${this.pageSize}`;
                this.axios.get(url).then(result=>{
                    var row=this.list.concat(result.data.data);
                    this.pagecount=result.data.pagecount;
                    this.time=result.data.ctime;
                    this.list=row;
                })  
            },
             addComment(){
                 var name = sessionStorage.getItem("name")
                 
               //1.获取第二个参数nid,content
               var nid=this.id; //获取新闻编号
               var content=this.msg;//获取评论内容
               var size=content.trim().length;
               if(size==0){
                   alert("评论内容不为空")
                   return
               }
               //2.发送ajax请求
                var url="http://localhost:3000/addComment"
                url+="?nid="+nid+"&content="+content+"&name="+name

               //3.接收数据
               this.axios.get(url).then(result=>{
                   if(result. data.code==1){
                       alert(result.data.msg);
                       this.msg=''
                       this.getsMore()
                        this.$router.go(0)
                   }else{
                       alert(result.data.msg)
                       this.msg=''
                      
                   }
               })
               //4.Toast()

           }
        },
         created() {
            this.getsMore()
        },
       
}

</script>