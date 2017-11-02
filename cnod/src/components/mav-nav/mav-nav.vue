<template>
	<div class="navbar">
		<!-- 导航条的容器开始 -->
		<div class="navbar-inner">
			<!-- Logo开始 -->
			<router-link to="/topic/all" class="logo">
				<img src="../../assets//images/logo.svg">
			</router-link>
			<!-- logo结束 -->
			<!-- 搜索框开始 -->
			<form class="from">
				<input type="text" name="">
			</form>
			<!-- 搜索框结束 -->
			<!-- 导航列表开始 -->
			<ul class="nav-ul">
				<router-link to="/topic/all"><li>首页</li></router-link>
				<router-link to="/topic/getstart"><li>新手入门</li></router-link>
				<router-link to="/topic/api"><li>API</li></router-link>
				<router-link to="/topic/about"><li>关于</li></router-link>
				<router-link to="/topic/signupt"><li>注册</li></router-link>
				<router-link to="/login"><li>登录</li></router-link>
			</ul>
			<!-- 导航列表结束 -->
		</div>
		<!-- 导航条的容器结束 -->
	</div>
</template>
<script type="text/javascript">
</script>
<style type="text/css">
	.navbar{
		width: 10.1rem;
		height: 2.95rem;
		background: #444;
		margin: 0 auto;
	}
	/*导航条容器开始*/
	.navbar .navbar-inner{
		width: 90%;
		height: 100%;
		/*padding: 0.125rem;*/
   		margin: auto;
	}
	/*导航条容器结束*/
	/*logo开始*/
	.logo{
		display: block;
		width: 3.0rem;
	    padding: 0.075rem 0.5rem;
	    height: 0.7rem;
	    margin-left: -0.5rem;
	    font-size: 0.5rem;
	    font-weight: 200;
	    color: #777;
	}
	.logo>img{
		display: block;
		width: 3.0rem;
    	padding: 0.075rem 0.5rem;
    	height: 0.7rem;
    	margin-left: -0.5rem;
    	font-size: 0.5rem;
    	font-weight: 200;
    	color: #777;
	}
	/*loga结束*/
	/*搜索框开始*/
	.from{
		margin-top: 0.125rem;
		float: left;
	}
	.from>input{
		padding: 0.075rem 0.125rem 0.075rem 0.55rem;
    	color: #666;
    	border: 0;
    	width: 5.15rem;
    	height: 0.5rem;
    	margin-top: 8px;
   		font-weight: 400;
    	float: left;
    	line-height: 1;
    	border-radius: 0.375rem;
    	outline: none;
    	background: url(../../assets/images/fdj.png) 0.1rem 0.1rem no-repeat #888;
	}
	/*搜索框结束*/
	/*导航列表开始*/
	.nav-ul{
		clear: left;
	}
	.nav-ul li{
		font-size: 0.325rem;
		float: left;
		line-height: 0.5rem;
		padding: 0.25rem 0.35rem;
		color: #ccc;
	}
	/*导航列表结束*/
</style>