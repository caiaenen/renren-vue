<template>
  <div>
   <div class="container clearfix" style="margin-top: 120px">
        <div class="row">
            <div class="col-md-3  clearfix list-group text-center font-weight-bold list-group"><div class="text-white bg-primary list-group-item "><div class="">全站热门</div></div>
                <ul class="list-unstyled row border-0 mt-2 list-group-item list-group-item">
                    <li class=" col-sm-6  float-left d-inline-block mb-3" >
                        <div class="card float-left border-0" ><a href="">
                            <img class="card-img-top" src="img/renren-ziyuan/duye.jpg" alt="img1" style="width: 100px;height: 122px;">
                                <span class="font-weight-bold text-center small mt-2" >《毒液》</span>
                            </a>
                            <span class="text-center small text-muted"><a href="#" class="bg-secondary text-white rounded">电影</a>
                                美国 2018</span>
                            <span class="text-center small text-muted">动作/冒险</span>
                            </div>
                    </li>
                    <li class=" col-sm-6  float-left d-inline-block mb-3">
                        <div class="card float-left border-0" >
                            <a href="#">
                                <img class="card-img-top" src="img/renren-ziyuan/weierxun.jpg" alt="img2" style="width: 100px;height: 122px;">
                                <span class="font-weight-bold text-center small mt-2 " >《威尔森夫人》</span>
                            </a>
                            <span class="text-center small text-muted"><a href="#" class="bg-secondary text-white rounded">美剧</a>
                                美国 2018</span>
                            <span class="text-center small text-muted">剧情</span>
                        </div>
                    </li>
                    <li class=" col-sm-6  float-left d-inline-block mb-3">
                        <div class="card float-left border-0" >
                            <a href="#">
                                <img class="card-img-top" src="img/renren-ziyuan/dageda.jpg" alt="img3" style="width: 100px;height: 122px;">
                                <span class="font-weight-bold text-center small mt-2 ">《我是大哥大》</span>
                            </a>
                            <span class="text-center small text-muted"><a href="#" class="bg-secondary text-white rounded">日剧</a>
                                日本 2018</span>
                            <span class="text-center small text-muted">喜剧/剧情</span>
                        </div>
                    </li>
                    <li class=" col-sm-6  float-left d-inline-block mb-3">
                        <div class="card float-left border-0" >
                            <a href="#">
                                <img class="card-img-top" src="img/renren-ziyuan/deathand.jpg" alt="img4"  style="width: 100px;height: 122px;">
                                <span class="font-weight-bold text-center small mt-2">《死亡与夜莺》</span>
                            </a>
                            <span class="text-center small text-muted"><a href="#" class="bg-secondary text-white rounded">英剧</a>
                                英国 2018</span>
                            <span class="text-center small text-muted">动作/剧情</span>
                        </div>
                    </li>
                    <li class=" col-sm-6  float-left d-inline-block mb-3">
                        <div class="card float-left border-0" >
                            <a href="#">
                                <img class="card-img-top" src="img/renren-ziyuan/dirty.jpg" alt="img5"  style="width: 100px;height: 122px;">
                                <span class="font-weight-bold text-center small mt-2">《肮脏真相》</span>
                            </a>
                            <span class="text-center small text-muted"><a href="#" class="bg-secondary text-white rounded">美剧</a>
                                美国 2018</span>
                            <span class="text-center small text-muted">动作/剧情</span>
                        </div>
                    </li>
                    <li class=" col-sm-6  float-left d-inline-block mb-3">
                        <div class="card float-left border-0" >
                            <a href="#">
                                <img class="card-img-top" src="img/renren-ziyuan/myfriend.jpg" alt="img6"  style="width: 100px;height: 122px;">
                                <span class="font-weight-bold text-center small mt-2">《我的天才女友》</span>
                            </a>
                            <span class="text-center small text-muted"><a href="#" class="bg-secondary text-white rounded">美剧</a>
                                美国 2018</span>
                            <span class="text-center small text-muted">剧情</span>
                        </div>
                    </li>

                </ul>
            </div>
            <div class="offset-1 col-md-8">
                 <div class=" bg-primary rounded">
                        <ul class="list-unstyled  clearfix nav nav-pills">
                            <li class="float-left mt-2 mb-2 ml-5 nav-item"><a href="#" class="nav-link  font-weight-bold active">全部</a></li>
                           
                        </ul>
                    </div>
                    <ul class="list-unstyled">
                         <li class="list-group-item-light mb-1" v-for="item in list" :key="item.sourceId">
                            <div class="content">
                                <div class="card w-100">
                                    <div class="card-body">
                                        <div >
                                            <img :src="item.imgUrl" style="width: 100px;height:150px"  @click="goto" :data-id="item.sourceId"class="float-left" />
                                        </div>
                                        <p class="h5 float-left" ><div class="text-dark small font-weight-bold" @click="goto" :data-id="item.sourceId"><span class="badge-info rounded ">{{item.chanel}}</span>【{{item.style}}】{{item.name}}
                                        </div></p><br/>
                                        <div class=" ml-3">
                                            <p class=" small mt-2">
                                                【类型】 {{item.style}} <br/>
                                                【人气】 3915次浏览| 60次收藏 | 2018-11-19  首播 <br/><br/>
                                                <span class="bg-warning text-white ml-3 rounded mt-3 pl-2 pr-2">本站排名 {{item.sourceId}}</span> </p>
                                        </div>

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
  name: 'search',
  components: {

  },
  data(){
      return{
          kw:this.$route.query.keyword,
          list:[],
      }
  },
  methods: {
        goto(){
                var id= event.target.dataset.id;
                this.$router.push("/detail/:"+id)
            },
      getPage(){
        var url = "http://localhost:3000/";
         url +="search?keyword="+this.kw;
         this.axios.get(url).then(result=>{
         this.list=result.data.data
       })
          
      }
  },
 
  mounted() {
      this.getPage()
  },
}
</script>
 <style scoped>
        a{
            text-decoration: none!important;
        }
        .nav-pills .nav-link.active,
        .nav-pills .show > .nav-link {
            color:#007bff ;
            background-color:#fff ;
            box-shadow: inset 1px 1px  3px    #002752;;
        }
    </style>