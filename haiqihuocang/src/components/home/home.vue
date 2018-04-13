<template>
	<div style="background: rgb(242,242,242);">
		<div class="seize_a_seat"></div>
		<div class="search">
	  	<div class="search_default">
	  			<img src="http://haiqihuocang.cn/web/H5/image/hcopy2@2x.png" alt="" />
	  			<span>{{data.searchName}}</span>
	  	</div>
	  </div>
	  <swiper :options="swiperOption">
	    <swiper-slide v-for="(slide,index) in data.bannerlist" :key="slide.id"><a :href="slide.link!=''?slide.link:'javascript:void(0)'" ><img :src="slide.image+thumbnail" alt="" /></a></swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
	  </swiper>
	  
	  <!--bannerlabel-->
	  <div class="bannerlabel">
	  	<ul>
	  		<li v-for="(data,index) in data.bannerlabel" @click="which_jump(index)"><img :src="data.image" alt="" /></li>
	  	</ul>
	  </div>
	  <!--newRecommandBanner-->
	  <div class="newRecommandBanner">
	  	<img v-for="(data,index) in data.newRecommandBanner" :src="data.image" alt="" @click="Advertisement_jump(index)"/>
	  </div>
	  <!--reCommandCategory-->
	  <div class="reCommandCategory">
	  	<p>推荐品类</p>
	  	<div style="width: 0.3rem;height: 0.04rem;background: #000000;margin: 0 auto;"></div>
	  </div>
	</div>
</template>
 
<script>
  import 'swiper/dist/css/swiper.css'
  export default {
    name: 'carrousel',
    created(){
    	 this.$http.post('/api/api/index.php?m=home&act=gethomecontentNew').then(response => {
			    console.log(response);
			    this.data=response.data.data;
			  }, response => {
			    // error callback
			  });
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
		  autoplay: true,//可选选项，自动滑动
		  speed:1000
        },
        swiperSlides: [],
        data:{},//首页数据
        thumbnail:"?x-oss-process=image/resize,h_200"
      }
    },
    methods:{
    	which_jump(index){
    		switch(this.data.bannerlabel[index].ban_type){
    			case 0://分类
    				break;
    			case 1://外部链接
    				window.location.href=this.data.bannerlabel[index].link;
    				break;
    			case 2://会员链接
    				window.location.href=this.data.bannerlabel[index].link;
    				break;
    			case 3://商品
    				break;
    			case 4://团购
    				window.location.href='http://haiqihuocang.cn/web/buy_group/index.php';
    				break;
    			case 5://秒杀
    				window.location.href='http://haiqihuocang.cn/web/buy_limit/index.php';
    				break;
    			case 6://活动
    				break;
    			case 7://智能推荐
    				break;
    		}
    	},
    	Advertisement_jump(index){
    		switch(this.data.newRecommandBanner[index].ban_type){
    			case 0://分类
    				break;
    			case 1://外部链接
    				window.location.href=this.data.newRecommandBanner[index].link;
    				break;
    			case 2://会员链接
    				window.location.href=this.data.newRecommandBanner[index].link;
    				break;
    			case 3://商品
    				break;
    			case 4://团购
    				window.location.href='http://haiqihuocang.cn/web/buy_group/index.php';
    				break;
    			case 5://秒杀
    				window.location.href='http://haiqihuocang.cn/web/buy_limit/index.php';
    				break;
    			case 6://活动
    				break;
    		}
    	}
    }
  }
</script>
<style scoped>
.reCommandCategory{
	width: 100%;
	background: #FFFFFF;
	font-size: 0.26rem;
	text-align: center;
	margin-top: 0.14rem;
	overflow: hidden;
}
.reCommandCategory p{
	padding: 0.28rem 0;
}
.bannerlabel{
	width: 100%;
}
.bannerlabel ul{
	display: flex;
}
.swiper-container{
	width: 100%;
}
a{
	display: block;
}
img{
	width: 100%;
}
.seize_a_seat{
	width: 100%;
	height: 0.88rem;
}
.search{
	background: #FFFFFF;
	position: fixed;
	width: 100%;
	height: 0.88rem;
	top: 0;
	display: flex;	
	align-items: center;
	justify-content: center;
	font-size: 0.24rem;
}
.search_default{
	width: 90%;
	height: 0.6rem;
	background: rgb(240,240,240);
	color: red;
	border-radius: 3000px;
	display: flex;
	align-items: center;
	padding: 0 0.18rem;
}
.search_default img{
	width: 0.32rem;
	height: 0.32rem;
}
.search span{
		color: darkgrey;
		margin-left: 0.18rem;
}
.newRecommandBanner{
	display: flex;
	justify-content: space-between;
}
.newRecommandBanner img {
    width: 3.72rem;
    height: 1.74rem;
}
</style>