<template>
  <div id="app">
  	<router-view/>
    <footer>
    	<div class="content" v-for="(data,index) in footer" v-on:click="changimg(index)">
    		<div style="width: 0.7rem;" >
	    		<router-link :to="data.to">
		    			<img :src="data.checked_img+thumbnail" alt="" v-show="data.value === 0"/>
		    			<img :src="data.unchecked_img+thumbnail" alt="" v-show="data.value === 1"/>
		    			<span>{{data.name}}</span>
	    		</router-link>  	
    		</div>  				
    	</div>
    </footer>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
  		this.footer[0].value=1;//默认首页选中
    },
  data(){
  	return{
  		footer:[{"unchecked_img":"http://haiqihuocang.cn/web/H5/image/1home8@2x.png","checked_img":"http://haiqihuocang.cn/web/H5/image/1home@2x.png","value":0,"name":"首页","to":"/home"},
  						{"unchecked_img":"http://haiqihuocang.cn/web/H5/image/1classity7@2x.png","checked_img":"http://haiqihuocang.cn/web/H5/image/2classity@2x.png","value":0,"name":"分类","to":"/classification"},
  						{"unchecked_img":"http://haiqihuocang.cn/web/H5/image/1shop4@2x.png","checked_img":"http://haiqihuocang.cn/web/H5/image/3shop@2x.png","value":0,"name":"购物车","to":"/shoppingcart"},
  						{"unchecked_img":"http://haiqihuocang.cn/web/H5/image/4info.png","checked_img":"http://haiqihuocang.cn/web/H5/image/4info@2x.png","value":0,"name":"消息","to":"/information"},
  						{"unchecked_img":"http://haiqihuocang.cn/web/H5/image/1person6@2x.png","checked_img":"http://haiqihuocang.cn/web/H5/image/5person@2x.png","value":0,"name":"我的","to":"/personal_center"}],
  		thumbnail:"?x-oss-process=image/resize,h_200"//使用缩略图
  	}
  },
  methods:{
  	changimg(index){
  		for (var i = 0; i < this.footer.length; i++) {
  			this.footer[i].value=0;
  		}
  		this.footer[index].value=1;
  	}
  }
}
</script>

<style scoped>
	footer{
		border: 1px solid rgb(151,151,151);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 0.98rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background: white;
    z-index: 999;
    box-sizing: border-box;
    font-size: 0.2rem;
    text-align: center;
	}
	footer img{
		width: 0.48rem;
	}
	footer a{
		display: block;
		color: rgb(51,51,51);
	}
	footer .content{
		width: 25%;
		display: flex;
		justify-content: center;
	}
	footer .content:last-child img{
		width: 0.44rem;
	}
	footer span{
		display: block;
		width: 100%;
	}
</style>
