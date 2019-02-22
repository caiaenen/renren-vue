<template>
  <div>
   <div class="container" style="margin-top: 120px">
        <h2 class="text-primary text-center" >最新公告</h2>
        <div class="list-group col-md-12 list" >
            <a href="#" class="list-group-item list-group-item-action "  v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">【招募】小语种组长期招募法德西俄意语翻译 </a>
            <a href="#" class="list-group-item list-group-item-action "  v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">【招募】人人影视长期招聘兼职撰稿人啦~</a>
            <a href="#" class="list-group-item list-group-item-action "  v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">【招募】※※※※字幕组长期招募英美翻译※※※※</a>
            <a href="#" class="list-group-item list-group-item-action "  v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">【招募】招募爱看剧又喜欢写文章的你</a>
            <a href="#" class="list-group-item list-group-item-action "  v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">【网站公告】网站账号申诉(账号异常或有异议都可以申诉)</a>
            <a href="#" class="list-group-item list-group-item-action "  v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">【招募】ZiMuZu后期组招新【暂停招募，下一轮待定】</a>
            <a href="#" class="list-group-item list-group-item-action "  v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">【网站公告】人人影视介绍</a>
            <a href="#" class="list-group-item list-group-item-action "  v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">【招募】日语翻译长期招募</a>
            <a href="#" class="list-group-item list-group-item-action "  v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">【招募】人人影视时间轴组限时招募-赶快加入我们吧</a>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'join',
  data(){
      return{

      }
  },
  methods:{
       changeActive($event){
             $event.currentTarget.className+=" active";
      },
      removeActive($event){
             $event.currentTarget.className="list-group-item list-group-item-action";
      }
  }
}
</script>