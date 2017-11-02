<template>
	<div class="nav-cft">
		<ul class="cft-li">
			<router-link to="/topic/all"><li>全部</li> </router-link>
			<router-link to="/topic/good"><li>精华</li></router-link>
			<router-link to="/topic/share"><li>分享</li></router-link>
			<router-link to="/topic/ask"><li>问答</li></router-link>
			<router-link to="/topic/job"><li>招聘</li></router-link>
			<router-link to="/topic/dev"><li>客户端测试</li></router-link>
		</ul>
</template>
<script type="text/javascript">
</script>
<style type="text/css">
.nav-cft{
	width: 9.6rem;
	height: 0.5rem;
	background: #f6f6f6;
	margin: auto;
	margin-top: 0.5rem;
	padding: 0.25rem; 
}
.cft-li li{
	font-size: 0.3rem;
	float: left;
	line-height: 0.5rem;
	padding: 0 0.3rem;
	color: #80bd01;
}
.cft-li a.router-link-active li{
	background: #80bd01;
	color:#fff;
	border-radius: 0.125rem
}
</style>