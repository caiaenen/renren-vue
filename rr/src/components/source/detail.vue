<template>
  <div>
   <div class="container " style="margin-top: 120px;" >
        <div class="list-group-item">
            <div class="row mb-5 ">
                <div class="col-md-9 " style="width: 800px;">
                    <div class="float-left">
                        <div class="float-left ml-3 mb-3">
                            <span class="h6">【{{list.chanel}}】{{list.name}}</span><br/>
                            <span class="small text-muted">说明：</span>
                        </div>
                        <div class="clearfix col-sm-12">
                            <a href="#"><img :src="list.imgUrl"  style="width: 216px; height: 320px;" >
                            </a>
                        </div>

                    </div>
                    <div class="float-left ml-4 clearfix mt-5 col-sm-12"  style="width: 458px;height: 400px;">
                        <div class="onshow small">
                            <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">类型：</span>{{list.chanel}}</span><br/><br/>
                            <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">制作</span>：{{list.made}}</span><br/><br/>
                            <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">导演：</span>{{list.director}}</span><br/><br/>
                            <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">编剧：</span>{{list.scriptWrite
}}</span><br/><br/>
                            <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">上映：</span>{{list.onShow|dateTimeFilter}}</span><br/><br/>
                        <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">演员：</span>{{list.actor}}<br/><br/>
                    </span>
                        </div>
                    </div>
                    <div class="small float-left col-sm-12 flex col-sm-12" style="width: 752px;">
                        <div class="detail text-muted">
                           {{list.content}}
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-12">
                    <div class="score" style="width: 151px;height: 23px;background: url('img/renren-ziyuan/score-countstar.gif');">
                    </div>
                    <div><span class="font-weight-bold text-dark small">
                        本站排名：
                    </span></div>
                    <div class="clearfix">
                        <span class="d-inline-block small" style="width: 72px;height: 11px;background: url('img/renren-ziyuan/star.gif');"></span>
                        <span class="d-inline-block" style="width: 120px;height: 10px;background: #969696;"></span>
                    </div>
                    <div class="clearfix">
                        <span class="d-inline-block small" style="width: 72px;height: 11px;background: url('img/renren-ziyuan/star.gif');background-position: 0 -21px"></span>
                        <span class="d-inline-block" style="width: 120px;height: 10px;background: #969696;"></span>
                    </div>
                    <div class="clearfix">
                        <span class="d-inline-block small" style="width: 72px;height: 11px;background: url('img/renren-ziyuan/star.gif');background-position: 0 -41px"></span>
                        <span class="d-inline-block" style="width: 120px;height: 10px;background: #969696;"></span>
                    </div>
                    <div class="clearfix">
                        <span class="d-inline-block small" style="width: 72px;height: 11px;background: url('img/renren-ziyuan/star.gif');background-position: 0 -59px"></span>
                        <span class="d-inline-block" style="width: 120px;height: 10px;background: #969696;"></span>
                    </div>
                    <div class="clearfix">
                        <span class="d-inline-block small" style="width: 72px;height: 11px;background: url('img/renren-ziyuan/star.gif');background-position: 0 -77px"></span>
                        <span class="d-inline-block" style="width: 120px;height: 10px;background: #969696;"></span>
                    </div>
                    <div class="clearfix mt-3">
                        <span class="text-dark small">请您打分：</span>
                        <span class="text-muted small">(已有人打分)：</span>
                        <div class="score">
                            <a href="#" style=" display: inline-block; width: 16px; height: 16px; background: url('img/renren-ziyuan/star.gif') -60px  -16px no-repeat; margin: 5px 5px 3px 0; vertical-align: middle;"></a>
                            <a href="#" style=" display: inline-block; width: 16px; height: 16px; background: url('img/renren-ziyuan/star.gif') -60px  -16px no-repeat; margin: 5px 5px 3px 0; vertical-align: middle;"></a>
                            <a href="#" style=" display: inline-block; width: 16px; height: 16px; background: url('img/renren-ziyuan/star.gif') -60px  -16px no-repeat; margin: 5px 5px 3px 0; vertical-align: middle;"></a>
                            <a href="#" style=" display: inline-block; width: 16px; height: 16px; background: url('img/renren-ziyuan/star.gif') -60px  -16px no-repeat; margin: 5px 5px 3px 0; vertical-align: middle;"></a>
                            <a href="#" style=" display: inline-block; width: 16px; height: 16px; background: url('img/renren-ziyuan/star.gif') -60px  -16px no-repeat; margin: 5px 5px 3px 0; vertical-align: middle;"></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

            <div class="row">
                <div class="discuss mt-5 col-md-12 mb-5">
                    <ul class="list-group  border-top  bg-primary ">
                        <p class=" mt-2 text-white ml-4">
                        资讯与交流 
                    </p>
                        <li class="list-group-item text-center"><span>请先<router-link
                                to="/login" class="btn btn-primary  rounded ">登录</router-link>再发表评论</span></li>
                        <li class="list-group-item text-center d-none">
                            <div class="res-form" id="reply_comment">
                                <img src="img/renren-news/author/author-1.jpeg" class="float-left" style="border-radius: 50%">
                                <textarea class="ml-5  w-75 float-left"></textarea>
                                <a class="btn btn-secondary text-white float-left ml-3 mt-2">发表评论</a>
                                <div class="clearfix"></div>
                                <a href="#" style="display:none;" class="corner insert"><img src="http://tu.jstucdn.com/ftp/avatar/f_noavatar_s.gif"> 插入表情</a>
                            </div>
                        </li>

                        <li class="list-group-item">  <img src="img/renren-news/author/author-1.jpeg" class="float-left"><div class="information-au float-left ml-3" data-uid="5297266">  <a href="/user/5297266" target="_blank" class="text-muted small ">1# 李喜儿</a> &nbsp; <span class="bg-danger text-white rounded small">认证评论员</span> &nbsp; 2018-12-04 &nbsp;
                            <br/>
                        <span class="text-muted small">
                            多亏的有BBC ，好人文，老美只想着利益，缺少人性 ~~~
                        </span>
                            <br/>
                        <span class="text-muted small">
                           <a href="#" class="text-muted small mr-3">[+回复]</a>
                            <a href="#" class="text-muted small mr-3">[+赞]</a>
                            <a href="#" class="text-muted small">[举报]</a>
                        </span>
                        </div>
                        </li>
                        <li class="list-group-item">  <img src="img/renren-news/author/author-1.jpeg" class="float-left"><div class="information-au float-left ml-3" data-uid="5297266">  <a href="/user/5297266" target="_blank" class="text-muted small ">1# 李喜儿</a> &nbsp; <span class="bg-danger text-white rounded small">认证评论员</span> &nbsp; 2018-12-04 &nbsp;
                            <br/>
                        <span class="text-muted small">
                            多亏的有BBC ，好人文，老美只想着利益，缺少人性 ~~~
                        </span>
                            <br/>
                        <span class="text-muted small">
                           <a href="#" class="text-muted small mr-3">[+回复]</a>
                            <a href="#" class="text-muted small mr-3">[+赞]</a>
                            <a href="#" class="text-muted small">[举报]</a>
                        </span>
                        </div>
                        </li>
                        <li class="list-group-item">  <img src="img/renren-news/author/author-1.jpeg" class="float-left"><div class="information-au float-left ml-3" data-uid="5297266">  <a href="/user/5297266" target="_blank" class="text-muted small ">1# 李喜儿</a> &nbsp; <span class="bg-danger text-white rounded small">认证评论员</span> &nbsp; 2018-12-04 &nbsp;
                            <br/>
                        <span class="text-muted small">
                            多亏的有BBC ，好人文，老美只想着利益，缺少人性 ~~~
                        </span>
                            <br/>
                        <span class="text-muted small">
                           <a href="#" class="text-muted small mr-3">[+回复]</a>
                            <a href="#" class="text-muted small mr-3">[+赞]</a>
                            <a href="#" class="text-muted small">[举报]</a>
                        </span>
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
  name: 'detail',
  components: {

  },
  data(){
      return{
        id:this.$route.params.sourceId.substr(1),
       list:{}
      }
       
  },
   methods: {
        getSourceInfo(){
        //1:获取参数 id
        var id = this.id;
        //2:发送ajax请求获取商品信息
        var url = "http://localhost:3000/detail";
        url +="?SourceId="+id;
        this.axios.get(url).then(result=>{
            this.list = result.data[0];
        });
      }
     
} ,
created() {
            this.getSourceInfo();
        },
}
</script>