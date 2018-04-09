<template>
	<div>
		<div class="seize_a_seat"></div>
		<div class="search">
	  	<div class="search_default">
	  			<img src="http://haiqihuocang.cn/web/H5/image/hcopy2@2x.png" alt="" />
	  			<span>{{data.searchName}}</span>
	  	</div>
	  </div>
	  <swiper :options="swiperOption">
	    <swiper-slide v-for="(slide,index) in data.bannerlist" :key="slide.id"><img :src="slide.image+thumbnail" alt="" /></swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
	  </swiper>		
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
        data:{},
        thumbnail:"?x-oss-process=image/resize,h_200"
      }
    }
  }
</script>
<style scoped>
.swiper-container{
	width: 100%;
}
img{
	width: 100%;
}
.seize_a_seat{
	width: 100%;
	height: 0.88rem;
}
.search{
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
</style>