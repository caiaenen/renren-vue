<template>
  <div class="index">
    <div class="container first clearfix d-block">
        <div class="row second mb-5">
            <div class="col-md-4 col-sm-12">
                <div class="card border-0" >
                    <div class="card-header bg-primary border-rr">
                        <span class="text-rr  p-weight-bold bg-primary text-white" style="font-size: 16px;">24小时下载热门</span></div>
                    <div class="card-body">
                        <ul class="list-group border-0" id="indicator1">
                            <li class="list-group-item"  @mouseenter="ctrShow"  @mouseout="ctr">
                                <div  class="overflow:auto;">
                                    <div v-show="!isHover">
                                        <span class="float-left bg-warning text-center text-white font-weight-bold mr-3">1</span>
                                        <div class="float-left">
                                            <a href="/resource/36314" title="毒液：致命守护者"><img src="img/renren-ziyuan/duye.jpg"></a>
                                        </div>
                                        <div class="float-left ml-3">
                                            <a href="/resource/36314" class="text-muted">毒液</a>
                                            <p class="text-muted">电影</p>
                                            <p class="text-muted">2018</p>
                                        </div>
                                    </div>
                                        <div v-show="isHover" >
                                            <span class="float-left bg-warning text-center text-white font-weight-bold mr-3">1</span>
                                            <a href="/resource/37269" class='text-muted' title=">毒液">毒液</a>
                                            <span class="float-right text-muted">电影</span>
                                        </div>
                                </div>
                            <li class="list-group-item"  @mouseenter="ctrShow"  @mouseout="ctr">
                            <div  >
                                <div v-show="isHover">
                                    <span  class="float-left bg-primary text-center text-white font-weight-bold mr-3">2</span>
                                    <div class="float-left">
                                        <a href="/resource/36314" title="威尔森夫人"><img src="img/renren-ziyuan/weierxun.jpg" style="width: 60px;height: 82px;"></a>
                                    </div>
                                    <div class="float-left ml-3">
                                        <a href="/resource/36314" class="text-muted">威尔森夫人</a>
                                        <p class="text-muted">英剧</p>
                                        <p class="text-muted">2018</p>
                                    </div>
                                </div>
                                <div>
                                    <div v-show="!isHover">
                                        <span  class="float-left bg-primary text-center text-white font-weight-bold mr-3">2</span><a href="/resource/37269" class='text-muted' title="威尔森夫人">威尔森夫人</a>
                                        <span class="float-right text-muted">英剧</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                            <li class="list-group-item"  @mouseenter="ctrShow"  @mouseout="ctr">
                                <div >
                                    <div v-show="isHover">
                                        <span class="float-left bg-primary text-center text-white font-weight-bold mr-3">3</span>
                                        <div class="float-left">
                                            <a href="/resource/36314" title="我是大哥大"><img src="img/renren-ziyuan/dageda.jpg" style="width: 60px;height: 82px;"></a>
                                        </div>
                                        <div class="float-left ml-3">
                                            <a href="/resource/36314" class="text-muted">我是大哥大</a>
                                            <p class="text-muted">日剧</p>
                                            <p class="text-muted">2018</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div v-show="!isHover">
                                            <span class="float-left bg-primary text-center text-white font-weight-bold mr-3">3</span>
                                            <a href="#" class="text-muted" title="我是大哥大">我是大哥大</a>
                                            <span class="float-right text-muted">日剧</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        <li class="list-group-item"   @mouseenter="ctrShow"  @mouseout="ctr">
                            <div>
                                <div v-show="isHover">
                                    <span class="float-left bg-primary text-center text-white font-weight-bold mr-3">4</span>
                                    <div class="float-left">
                                        <a href="/resource/36314" title="死亡与夜莺"><img src="img/renren-ziyuan/deathand.jpg" style="width: 60px;height: 82px;"></a>
                                    </div>
                                    <div class="float-left ml-3">
                                        <a href="/resource/36314" class="text-muted">死亡与夜莺</a>
                                        <p class="text-muted">英剧</p>
                                        <p class="text-muted">2018</p>
                                    </div>
                                </div>
                                <div>
                                    <div v-show="!isHover">
                                        <span class="float-left bg-primary text-center text-white font-weight-bold mr-3">4</span>
                                        <a href="#" class="text-muted" title="死亡与夜莺">死亡与夜莺</a>
                                        <span class="float-right text-muted">英剧</span>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li class="list-group-item"  @mouseenter="ctrShow"  @mouseout="ctr">
                            <div >
                                <div v-show="isHover">
                                    <span class="float-left bg-primary text-center text-white font-weight-bold mr-3">5</span>
                                    <div class="float-left">
                                        <a href="/resource/36314" title="肮脏真相"><img src="img/renren-ziyuan/dirty.jpg" style="width: 60px;height: 82px;"></a>
                                    </div>
                                    <div class="float-left ml-3" >
                                        <a href="/resource/36314" class="text-muted">肮脏真相</a>
                                        <p class="text-muted">美剧</p>
                                        <p class="text-muted">2018</p>
                                    </div>
                                </div>
                                <div>
                                    <div v-show="!isHover" >
                                        <span class="float-left bg-primary text-center text-white font-weight-bold mr-3">5</span>
                                        <a href="#" class="text-muted"  title="肮脏真相">肮脏真相</a>
                                        <span class="float-right text-muted">美剧</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item"  @mouseenter="ctrShow"  @mouseout="ctr">
                            <div >
                                <div v-show="isHover">
                                    <span class="float-left bg-primary text-center text-white font-weight-bold mr-3">6</span>
                                    <div class="float-left">
                                        <a href="/resource/36314" title="我的天才女友"><img src="img/renren-ziyuan/myfriend.jpg" style="width: 60px;height: 82px;"></a>
                                    </div>
                                    <div class="float-left ml-3">
                                        <a href="/resource/36314" class="text-muted">我的天才女友</a>
                                        <p class="text-muted">美剧</p>
                                        <p class="text-muted">2018</p>
                                    </div>
                                </div>
                                <div>
                                    <div v-show="!isHover">
                                        <span class="float-left bg-primary text-center text-white font-weight-bold mr-3">6</span>
                                        <a href="#" class="text-muted"  title="我的天才女友">我的天才女友</a>
                                        <span class="float-right text-muted">美剧</span>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li class="list-group-item"  @mouseenter="ctrShow"  @mouseout="ctr">
                            <div >
                                <div v-show="isHover">
                                    <span class="float-left bg-primary text-center text-white font-weight-bold mr-3">7</span>
                                    <div class="float-left">
                                        <a href="/resource/36314" title="毒枭：墨西哥"><img src="img/renren-ziyuan/duxiao.jpg" style="width: 60px;height: 82px;"></a>
                                    </div>
                                    <div class="float-left ml-3">
                                        <a href="/resource/36314" class="text-muted">毒枭：墨西哥</a>
                                        <p class="text-muted">美剧</p>
                                        <p class="text-muted">2018</p>
                                    </div>
                                </div>
                                <div>
                                    <div v-show="!isHover">
                                        <span class="float-left bg-primary text-center text-white font-weight-bold mr-3">7</span>
                                        <a href="#" class="text-muted" title="毒枭：墨西哥">毒枭：墨西哥</a>
                                        <span class="float-right text-muted">美剧</span>
                                    </div>
                                </div>
                            </div>

                        </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 mt-5 mb-5">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div class="carousel-inner rounded">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="img/carousel-death-and.jpg" alt="First slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="text-rr" style="background: rgba(0,0,0,0.6)">英国迷你剧《死亡与夜莺》热播中！</h5>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="img/carousel-friend.jpg" alt="Second slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="text-rr" style="background: rgba(0,0,0,0.6)">经典小说改编《我的天才女友》口碑爆棚！</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="img/carousel-iamhero.jpg" alt="Third slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="text-rr" style="background: rgba(0,0,0,0.6)">我要当不良《我是大哥大》热播中！</h5>
                            </div>
                        </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/carousel-WhoWillRise.jpg" alt="forth slide">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="text-rr" style="background: rgba(0,0,0,0.6)">《维京传奇》第五季下半季开播！</h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/carousel-wilson.jpg" alt="Fifth slide">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="text-rr" style="background: rgba(0,0,0,0.6)">我的丈夫是间谍《威尔森夫人》迷你剧连载中！</h5>
                                </div>
                            </div>


                        </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 pl-5">
                <div class="card border-0">
                    <div class="card-header border-rr bg-primary ">
                        <span class="text-rr  p-weight-bold text-white" style="font-size: 16px">今日播出 {{date}}</span></div>
                    <div class="card-body">
                        <ul class="list-group border-0 list-unstyled mb-5">
                            <li class="mt-2">
                                <a href="/resource/36830" target="_blank" title="糟心生活I Feel Bad" class="text-muted"><span>糟心生活</span> I Feel Bad S01E09</a>
                            </li>
                            <li class="mt-2 mb-5">
                                <a href="/resource/37068" target="_blank" title="吸血鬼后裔Legacies"  class="text-muted"><span>吸血鬼后裔</span> Legacies S01E05</a>
                            </li>
                           </ul>

                            <div class="guide mt-5">

                                    <ul class="row list-unstyled guide mt-5">
                                        <hr/>
                                        <li class="float-left col-sm-4 text-center mt-5"><a href="http://app.zimuzu.tv/" target="_blank"><img src="img/mini-icon/phone.png"></a><br><a href="http://app.zimuzu.tv/" target="_blank" class="small text-rr text-center">手机客户端</a></li>
                                        <li class="float-left col-sm-4 text-center mt-5"><a href="http://weibo.com/zimuzu2018" target="_blank"><img src="img/mini-icon/weixin.png"></a><br><a href="http://weibo.com/zimuzu2018/" target="_blank" class="small text-rr">官方微博</a></li>
                                        <li class="float-left col-sm-4 text-center mt-5"><a href="/announcement/60" target="_blank"><img src="img/mini-icon/wx.png"></a><br><a href="/announcement/60" target="_blank" class="small text-rr">官方微信</a></li>
                                        <li class="float-left col-sm-4 text-center mt-5"><a href="http://91dict.com/" target="_blank" ><img src="img/mini-icon/book.png"></a><br><a href="http://91dict.com/" target="_blank" class="small text-rr">人人词典</a></li>
                                        <li class="float-left col-sm-4 text-center mt-5"><a href="http://cvn.io/" target="_blank" class="text-center"><img src="img/mini-icon/rr.png"></a><br><a href="http://www.rrliuxue.com/" target="_blank" class="small text-rr text-center">CVN</a></li>
                                        <li class="float-left col-sm-4 text-center mt-5"><a href="http://www.1sj.tv/html/support/down-load.html" target="_blank"><img src="img/mini-icon/movie.png"></a><br><a href="http://www.1sj.tv/html/support/down-load.html" target="_blank" class="small text-rr text-center">字幕制作工具</a></li>
                                    </ul>
                            </div>
                    </div>
                </div>
            </div>


        </div>
        <div class="row third clearfix mt-5 d-flex justify-content-center">
            <div class="card mt-1 border-0 ">
                <div class="card-header text-rr border-rr bg-primary text-white">
                    最新发布
                </div>
                <div class="card-body">
                    <ul class="clearfix list-unstyled d-block">
                        <li class="col-md-2 col-4 float-left text-center">
                            <a href="/resource/37294" class="imglink"><img src="img/renren-recent/hack.jpg" style="width: 93.617px; height: 100px; margin-left: 1.19149px;" class="text-center"></a>
                            <p  class="small p-weight-bold text-center text-rr mt-1" style="margin-bottom:5px;"><a href="/resource/37294">黑客之都</a></p>
                            <p class="small text-muted text-center" style="margin-bottom:5px;">德剧(德国)</p>
                            <p class="small text-muted text-center" style="margin-bottom:5px;">剧情/罪案</p>
                        </li><li class="col-md-2 col-4 float-left text-center">
                        <a href="/resource/37293" class=""><img src="img/renren-recent/tiantang.jpg" style="width: 96px; height: 53.76px; margin-top: 39.12px;"></a>
                        <a href="/resource/37293 "><p  class="small p-weight-bold text-center text-rr mt-1" style="margin-bottom:5px;">BBC.路易斯·泰鲁.灵魂大搜索.2018.选择死亡</p></a>
                        <p class="small text-muted text-center" style="margin-bottom:5px;">美剧(美国)</p>
                        <p class="small text-muted text-center" style="margin-bottom:5px;">纪录</p>
                    </li><li class="col-md-2 col-4 float-left text-center">
                        <a href="/resource/37292" class="imglink"><img src="img/renren-recent/love.jpg" style="width: 96px; height: 59.52px; margin-top: 36.24px;"></a>
                        <p  class="small p-weight-bold text-center text-rr mt-1" style="margin-bottom:5px;"><a href="/resource/37292">爱情倒计时</a></p>
                        <p class="small text-muted text-center" style="margin-bottom:5px;">越剧(越南)</p>
                        <p class="small text-muted text-center" style="margin-bottom:5px;">生活/偶像/青春/爱情/幽默</p>
                    </li><li class="col-md-2 col-4 float-left text-center">
                        <a href="/resource/37291" class="imglink"><img src="img/renren-recent/codeSister.png" style="width: 96px; height: 48.96px; margin-top: 41.52px;"></a>
                        <p  class="small p-weight-bold text-center text-rr mt-1" style="margin-bottom:5px;"><a href="/resource/37291">code sister</a></p>
                        <p class="small text-muted text-center" style="margin-bottom:5px;">泰剧(泰国)</p>
                        <p class="small text-muted text-center" style="margin-bottom:5px;">青春/爱情</p>
                    </li><li class="col-md-2 col-4 float-left text-center">
                        <a href="/resource/37290" class="imglink"><img src="img/renren-recent/girlSister.jpg" style="width: 96px; height: 63.36px; margin-top: 34.32px;"></a>
                        <p  class="small p-weight-bold text-center text-rr mt-1" style="margin-bottom:5px;"><a href="/resource/37290">女朋友</a></p>
                        <p class="small text-muted text-center" style="margin-bottom:5px;">泰剧(泰国)</p>
                        <p class="small text-muted text-center" style="margin-bottom:5px;">青春/爱情</p>
                    </li><li class="col-md-2 col-4 float-left text-center">
                        <a href="/resource/37289" class="imglink"><img src="img/renren-recent/luoma.jpg" style="width: 96px; height: 100px; "></a>
                        <p  class="small p-weight-bold text-center text-rr mt-1" style="margin-bottom:5px;"><a href="/resource/37288">罗马宝贝</a></p>
                        <p class="small text-muted text-center" style="margin-bottom:5px;">意剧(意大利)</p>
                        <p class="small text-muted text-center" style="margin-bottom:5px;">剧情</p>
                    </li>
                        <!--<li class="col-md-2 d-none col-4 float-left">-->
                        <!--<a href="/resource/37289" class="imglink"><img src="img/renren-recent/yi.jpg" style="width: 96px; height: 120.96px; margin-top: 5.52px;"></a>-->
                        <!--<p  class="small p-weight-bold text-center text-rr mt-1" style="margin-bottom:5px;"><a href="/resource/37288">弯的其所</a></p>-->
                        <!--<p class="small text-muted text-center" style="margin-bottom:5px;">其他剧(其他)</p>-->
                        <!--<p class="small text-muted text-center" style="margin-bottom:5px;">爱情</p>-->
                    <!--</li>-->
                    </ul>
                </div>
            </div>

            <br/>
            </div>
        <div class="row forth clearfix mt-3 d-flex justify-content-md-between justify-content-sm-between" >
            <div class="col-md-6 rounded" >
                <div class="list-group " style="width: 550px;" id="zixun">
                    <ul class="list-group list-unstyled rounded"><span class="bg-primary text-white pt-2 pb-2 pl-3">
                        影视资讯
                    </span>
                        <li class="list-group-item">
                            <div class="float-left">
                                <a href="/article/31583" class=""><img src="img/影视资讯/纪录片《王朝》.jpg" style="width: 100px; height: 56px; margin-top: 0px; margin-left: 0px;"></a>
                            </div>
                            <div class=" float-left ml-2">
                                <a href="/article?type=t_review small" class="text-center" ><span style="width: 40px" class="small text-center bg-warning text-white">人人剧评</span></a>
                            </div>
                            <div class="float-right" style="width: 320px;">
                                <a href="/article/31583" title="纪录片《王朝》——别说“人间不值得”，动物社会更凶猛" class="text-dark font-weight-bold small">纪录片《王朝》——别说“人间不值得”，动物社会更凶</a><span class="small">-- 评纪录片 <a href="/resource/37176" class="small">《动物王朝》</a></span><br/>
                                <a href="/user/5297266" class="text-dark small">李喜儿 发表于</a> 2018-12-04 20:05 <span class="dateline small" time="1543925112">(2小时前)</span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left">
                                <a href="/article/31583" class=""><img src="img/影视资讯/惊奇队长.png" style="width: 100px; height: 56px; margin-top: 0px; margin-left: 0px;"></a>
                            </div>
                            <div class=" float-left ml-2 mr-2">
                                <a href="/article?type=t_review small" class="text-center"><span style="width: 40px" class="small text-center bg-primary text-white">影视资讯</span></a>
                            </div>
                            <div class="float-right" style="width: 320px;">
                                <a href="/article/31583" title="逆转无限！《惊奇队长》新预告震撼来袭" class="text-dark font-weight-bold small">逆转无限！《惊奇队长》新预告震撼来袭</a><br/>
                                <a href="/user/5297266" class="text-dark small">影视资讯组 发表于</a>  2018-12-04 18:30 <span class="dateline small" time="1543925112">(2小时前)</span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left">
                                <a href="/article/31583" class=""><img src="img/影视资讯/漫威.png" style="width: 100px; height: 56px; margin-top: 0px; margin-left: 0px;"></a>
                            </div>
                            <div class=" float-left ml-2">
                                <a href="/article?type=t_review small" class="text-center"><span style="width: 40px" class="small text-center bg-primary text-white">影视资讯</span></a>
                            </div>
                            <div class="float-right" style="width: 320px;">
                                <a href="/article/31583" title="漫威将推出首部华裔超级英雄电影《上气》" class="text-dark font-weight-bold small">漫威将推出首部华裔超级英雄电影《上气》</a><br/>
                                <a href="/user/5297266" class="text-dark small">藏龙岛一枝发 发表于</a>  2018-12-04 18:30 <span class="dateline small" time="1543925112">(2小时前)</span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left">
                                <a href="/article/31583" class=""><img src="img/影视资讯/小栗旬.jpg" style="width: 100px; height: 56px; margin-top: 0px; margin-left: 0px;"></a>
                            </div>
                            <div class=" float-left ml-2">
                                <a href="/article?type=t_review small" class="text-center"><span style="width: 40px" class="small text-center bg-primary text-white">影视资讯</span></a>
                            </div>
                            <div class="float-right" style="width: 320px;">
                                <a href="/article/31583" title="小栗旬确认主演电影《人间失格》" class="text-dark font-weight-bold small">小栗旬确认主演电影《人间失格》</a><br/>
                                <a href="/user/5297266" class="text-dark small">藏龙岛一枝发 发表于</a>  2018-12-04 18:30 <span class="dateline small" time="1543925112">(2小时前)</span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left">
                                <a href="/article/31583" class=""><img src="img/影视资讯/sheldon.jpg" style="width: 100px; height: 56px; margin-top: 0px; margin-left: 0px;"></a>
                            </div>
                            <div class=" float-left ml-2 ">
                                <a href="/article?type=t_review small" class="text-center"><span style="width: 40px" class="small text-center bg-warning text-white">人人剧评</span></a>
                            </div>
                            <div class="float-right" style="width: 320px;">
                                <a href="/article/31583" title="所有不按牌理出牌的孩子，都是让父母长见识的" class="text-dark font-weight-bold small">所有不按牌理出牌的孩子，都是让父母长见识的</a>-- 评美剧 <a href="/resource/35642" class=" small">《少年谢尔顿》</a></span></h3><br/>
                                <a href="/user/5297266" class="text-dark small">影视资讯组 发表于</a>  2018-12-04 18:30 <span class="dateline small" time="1543925112">(2小时前)</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 rounded">
                <div class="list-group " style="width: 550px;">
                    <ul class="list-group list-unstyled rounded"><span class="bg-primary text-white pt-2 pb-2 pl-3">
                        热门话题
                    </span>
                        <li class="list-group-item">
                            <div class="float-left">
                                <a href="/article/31583" class=""><img src="img/影视资讯/纪录片《王朝》.jpg" style="width: 100px; height: 56px; margin-top: 0px; margin-left: 0px;"></a>
                            </div>
                            <div class=" float-left ml-2">
                                <a href="/article?type=t_review small" class="text-center" ><span style="width: 40px" class="small text-center bg-warning text-white">人人剧评</span></a>
                            </div>
                            <div class="float-right" style="width: 320px;">
                                <a href="/article/31583" title="纪录片《王朝》——别说“人间不值得”，动物社会更凶猛" class="text-dark font-weight-bold small">纪录片《王朝》——别说“人间不值得”，动物社会更凶</a><span class="small">-- 评纪录片 <a href="/resource/37176" class="small">《动物王朝》</a></span><br/>
                                <a href="/user/5297266" class="text-dark small">李喜儿 发表于</a> 2018-12-04 20:05 <span class="dateline small" time="1543925112">(2小时前)</span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left">
                                <a href="/article/31583" class=""><img src="img/影视资讯/惊奇队长.png" style="width: 100px; height: 56px; margin-top: 0px; margin-left: 0px;"></a>
                            </div>
                            <div class=" float-left ml-2 mr-2">
                                <a href="/article?type=t_review small" class="text-center"><span style="width: 40px" class="small text-center bg-primary text-white">影视资讯</span></a>
                            </div>
                            <div class="float-right" style="width: 320px;">
                                <a href="/article/31583" title="逆转无限！《惊奇队长》新预告震撼来袭" class="text-dark font-weight-bold small">逆转无限！《惊奇队长》新预告震撼来袭</a><br/>
                                <a href="/user/5297266" class="text-dark small">影视资讯组 发表于</a>  2018-12-04 18:30 <span class="dateline small" time="1543925112">(2小时前)</span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left">
                                <a href="/article/31583" class=""><img src="img/影视资讯/漫威.png" style="width: 100px; height: 56px; margin-top: 0px; margin-left: 0px;"></a>
                            </div>
                            <div class=" float-left ml-2">
                                <a href="/article?type=t_review small" class="text-center"><span style="width: 40px" class="small text-center bg-primary text-white">影视资讯</span></a>
                            </div>
                            <div class="float-right" style="width: 320px;">
                                <a href="/article/31583" title="漫威将推出首部华裔超级英雄电影《上气》" class="text-dark font-weight-bold small">漫威将推出首部华裔超级英雄电影《上气》</a><br/>
                                <a href="/user/5297266" class="text-dark small">藏龙岛一枝发 发表于</a>  2018-12-04 18:30 <span class="dateline small" time="1543925112">(2小时前)</span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left">
                                <a href="/article/31583" class=""><img src="img/影视资讯/小栗旬.jpg" style="width: 100px; height: 56px; margin-top: 0px; margin-left: 0px;"></a>
                            </div>
                            <div class=" float-left ml-2">
                                <a href="/article?type=t_review small" class="text-center"><span style="width: 40px" class="small text-center bg-primary text-white">影视资讯</span></a>
                            </div>
                            <div class="float-right" style="width: 320px;">
                                <a href="/article/31583" title="小栗旬确认主演电影《人间失格》" class="text-dark font-weight-bold small">小栗旬确认主演电影《人间失格》</a><br/>
                                <a href="/user/5297266" class="text-dark small">藏龙岛一枝发 发表于</a>  2018-12-04 18:30 <span class="dateline small" time="1543925112">(2小时前)</span>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left">
                                <a href="/article/31583" class=""><img src="img/影视资讯/sheldon.jpg" style="width: 100px; height: 56px; margin-top: 0px; margin-left: 0px;"></a>
                            </div>
                            <div class=" float-left ml-2 ">
                                <a href="/article?type=t_review small" class="text-center"><span style="width: 40px" class="small text-center bg-warning text-white">人人剧评</span></a>
                            </div>
                            <div class="float-right" style="width: 320px;">
                                <a href="/article/31583" title="所有不按牌理出牌的孩子，都是让父母长见识的" class="text-dark font-weight-bold small">所有不按牌理出牌的孩子，都是让父母长见识的</a>-- 评美剧 <a href="/resource/35642" class=" small">《少年谢尔顿》</a></span></h3><br/>
                                <a href="/user/5297266" class="text-dark small">影视资讯组 发表于</a>  2018-12-04 18:30 <span class="dateline small" time="1543925112">(2小时前)</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
        <div class="row fifth clearfix mt-5 d-flex justify-content-md-between justify-content-sm-between">
            <div class="col-md-6 rounded">
                <div class="list-group " style="width: 550px;">
                    <ul class="list-group list-unstyled rounded"><span class="bg-primary text-white pt-2 pb-2 pl-3">
                       评测推荐
                    </span>
                        <li class="list-group-item">
                            <div class="float-left mr-2">
                                <a href="/article/31583" class=""><img src="img/renren-commit/dark.jpg" ></a>
                            </div>
                           <div class="word">
                               <span class=" font-weight-bold ml-3">
                                   <a href="#" class="text-dark">
                                       可爱玩具变成杀人狂魔，是道德的沦丧还是人性的扭曲<br/>
                                   </a>
                                   </span>

                               <span class="ml-4 small">
                                   月更惊悚剧，它又双叒叕来啦~
                               </span>
                               <font>By</font>
                               <a href="#">boringq</a>
                           </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left mr-2">
                                <a href="/article/31583" class=""><img src="img/renren-commit/japan.jpg" ></a>
                            </div>
                            <div class="word">
                                <span class=" font-weight-bold ml-3">
                                   <a href="#" class="text-dark">
                                       兄弟！怎么看见大胸妹你就软了？！<br/>
                                   </a>
                                   </span>
                               <span class="ml-4 small">
                                   深夜福利番，必须要看！料很足，点进来绝不后悔。
                               </span>
                                <font>By</font>
                                <a href="#">黑眼圈boy</a>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left mr-2">
                                <a href="/article/31583" class=""><img src="img/renren-commit/oneNight.png" ></a>
                            </div>
                            <div class="word">
                               <span class=" font-weight-bold ml-3">
                                   <a href="#" class="text-dark">
                                       一夜桃花开的轻喜剧该发生在哪？当然是巴黎<br/>
                                   </a>
                                   </span>
                               <span class="ml-4 small">
                                   距离2019年只有短短的一个月，这个月不光有《海王》、《龙猫》、《网络迷踪》等高分电影上映，还有一大
                               </span>
                                <font>By</font>
                                <a href="#">藏龙岛一枝发</a>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="float-left mr-2">
                                <a href="/article/31583" class=""><img src="img/renren-commit/12month.jpg" ></a>
                            </div>
                            <div class="word">
                                <span class=" font-weight-bold ml-3">
                                   <a href="#" class="text-dark">
                                       12月追剧指南，安排上了！<br/>
                                   </a>
                                   </span>
                               <span class="ml-4 small">
                                  巴黎，最适合上演浪漫喜剧的城市，上演了一段苦乐杂陈的浪漫故事。
                               </span>
                                <font>By</font>
                                <a href="#">看剧的竹影</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 rounded">
                <div class="list-group " style="width: 550px; height: 618px;" id="theater">
                    <ul class="list-group list-unstyled rounded"><span class="bg-primary text-white pt-2 pb-2 pl-3">全球影院上映</span>
                        <li class="list-group-item">
                            <div class="float-left img">
                                <a href="#">
                                    <img :src="list.imgSrc" alt="" style="width:150px;height: 215px;"/>
                                </a>
                            </div>
                            <div class="list-group float-left ml-5 small" style="width:300px;height: 215px;" id="indicator" >
                                <a  href="#" class="list-group-item list-group-item-action " @mouseenter="roll($event)" @mouseout="change($event)">《海王》</a>
                                <a href="#" class="list-group-item list-group-item-action " @mouseenter="roll($event)"  @mouseout="change($event)">《惊涛飓浪》</a>
                                <a  href="#" class="list-group-item list-group-item-action" @mouseenter="roll($event)"  @mouseout="change($event)">《绿毛怪格林奇》</a>
                                <a  href="#" class="list-group-item list-group-item-action" @mouseenter="roll($event)"  @mouseout="change($event)">《龙猫》</a>
                                <a  href="#" class="list-group-item list-group-item-action " @mouseenter="roll($event)"  @mouseout="change($event)">《网络谜踪》</a>
                            </div>
                        </li>
                        <li class="list-group-item" style="height: 343px;">
                        
                            <div class="onshow small">
                                <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">类型：</span>{{list.style}}</span><br/>
                                <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">制作：</span>{{list.make}}</span><br/>
                                <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">导演：</span>{{list.director }}</span><br/>
                                <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">编剧：</span>{{list.scriptWrite }}</span><br/>
                                <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">上映：</span>{{list.onShow|dateTimeFilter  }}</span><br/>
                        <span class="mb-2 text-muted"> <span class="font-weight-bold text-dark">演员：</span>{{list.actor }}<br/>
                            </span>
                                <div class="detail text-muted mt-3 mb-5">
                                   {{list.content}}
                                </div>
                            </div>
                           
                        </li>
                    </ul>

                </div>
            </div>


        </div>
</div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
    data(){
        return{
            isHover:false,
            date:'',
            list:[]
        }
    },
  components: {
},methods:{
    ctrShow(e){
            e.currentTarget.children[0].children[0].style.display="block"
             e.currentTarget.children[0].children[1].style.display="none"
        
    },
    ctr(e){
         e.currentTarget.children[0].children[0].style.display="none"
             e.currentTarget.children[0].children[1].style.display="block"
            
    },
    today(){
     var today=new Date();
    var day=today.getDay();
    today=today.toLocaleDateString()
    today=today.split("/").join("-")
    this.date=today
    },
    roll($event){
        var kw=$event.currentTarget.innerHTML
         $event.currentTarget.className+=" active"
         var url = "http://127.0.0.1:3000/";
       url +="get?keyword="+kw;
       this.axios.get(url).then(result=>{
         this.list=result.data.data[0]
       })
    },
    load(){
        var kw=`《海王》`
         var url = "http://127.0.0.1:3000/";
       url +="get?keyword="+kw;
       this.axios.get(url).then(result=>{
         this.list=result.data.data[0]
       })
    },
     change($event){
             $event.currentTarget.className="list-group-item list-group-item-action";
      }

 
},
mounted(){
    this.today()
    this.load()
}

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
.container{
  margin-top: 125px;
}
.container .row .col-md-4 .card .card-body ul li span.float-left{
  width: 20px;
  height: 20px;
}
.container .row .col-md-4 .card .card-body ul li:hover{
  background:rgba(0, 160, 233,0.2);
}
.container .row .col-md-4 .card .card-body .guide li{
  font-size: 10px;
}
.container .row .col-md-4 .card .card-body .guide li:hover{
  background: #fff;
}
.carousel-indicators li{
  width:8px;
  height: 8px;
  border-radius: 50%;
}
</style>