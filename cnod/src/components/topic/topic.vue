<template>
	<div id="main">
		<div class="parane">
      <div class="celi" v-for="(item,index) in topicR">
      <router-link :to="'/topic/' + torouter.tab + '/' + item.id">
        <!-- 头像开始 -->
        <a href="#" class="img">
          <img width="30" v-lazy="item.author.avatar_url">
        </a>
        <!-- 头像结束 -->
        <!-- 标题开始 -->
        <div class="title">
          <span v-if="item.top">置顶</span>
          <span v-else-if="item.good">精华</span>
          <span v-else class="wod">问答</span>
          <a href="#" class="nowrap">{{ item.title }}</a>
        </div>
        <!-- 标题结束 -->
        <!-- 回复开始 -->
        <span class="spab">
          <span>{{ item.reply_count }}</span>/<span>{{ item.visit_count }}</span>
        </span>
        <!-- 回复结束 -->
        <!-- 发帖时间开始 -->
        <a href="#" class="time">{{ times(item) }}</a>
        <!-- 发帖时间结束 -->
        <!-- 分页器 -->
        <ul>
          <li></li>
        </ul>
        <!-- 分页器 -->
      </router-link>
      </div>
		</div>
    <div class="pagination">
      <ul>
        <li class="disabled"><a><</a></li>
        <li class="disabled active"><a>1</a></li>
        <li><a>2</a></li>
        <li><a>3</a></li>
        <li><a>4</a></li>
        <li><a>5</a></li>
        <li><a>...</a></li>
        <li><a>></a></li>
      </ul>
    </div>
	</div>
</template>
<script type="text/javascript">
import { getTopicList } from '@/common/js/getData.js'
export default {
  data () {
    // 定义数据
    return {
      topicR: [],
      torouter: []
    }
  },
  created () {
    this._getData()
  },
  methods: {
    _getData () {
      let param = {
        page: 1,
        tab: this.$route.params.tab,
        limit: 30
      }
      getTopicList(param).then((res) => {
        console.log(res)
        this.topicR = res.data.data
        this.torouter = res.config.params
      }).catch((error) => {
        console.log(error)
      })
    },
    times (item) {
      var time = new Date(item.last_reply_at)
      var jian = new Date()
      var shi = time.getTime()
      var ke = jian.getTime()
      var yue = Math.floor((ke - shi) / 1000 / 60 / 60 / 24 / 30)
      if (yue > 0) {
        return yue + '月前'
      }
      var tian = Math.floor((ke - shi) / 1000 / 60 / 60 / 24)
      if (tian > 0) {
        return tian + '天前'
      }
      var xiao = Math.floor((ke - shi) / 1000 / 60 / 60)
      if (xiao > 0) {
        return xiao + '小时前'
      }
      var fen = Math.floor((ke - shi) / 1000 / 60)
      if (fen) {
        return fen + '分前'
      }
    }
  },
  watch: {
    // 检测路由信息变化，重新发送请求
    $route: function () {
      // console.log(this.$route)
      this._getData()
    }
  }
}
</script>
<style type="text/css">
#main{
	width: 10.1rem;
	height: auto;
  margin: 0 auto;
  /*padding: 10px;*/
  background: #FFF;
}
.parane{
	width: 100%;
	height: auto;
	background: #fff;
	margin: 0 auto;
}
.celi{
  /*width: 384px;*/
  height: 0.75rem;
  padding: 0.25rem;
  clear: both;
  position: relative;
  border-bottom: 0.1px solid #ddd;
}
/*头像开始*/
.img{
  float: left;
}
.img>img{
  width: 0.75rem;
  height: 0.75rem;
}

.title>span{
  display: inline-block;
  margin-top: 0.25rem;
  font-size: 0.3rem;
  padding:0.08rem 0.1rem;
  background: #80bd01;;
  border-radius: 0.1rem;
  margin-left: 0.25rem;
  color:#fff;
  float: left;
}
.nowrap{
  display: inline-block;
  width: 5.0rem;
  height: 0.75rem;
  line-height: 0.75rem;
  font-size: 0.3rem;
  color:#888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  margin-left: 0.125rem;
}
.title>.wod{
  background: #ccc;
}
/*标题结束*/
/*回复开始*/
.spab{
  display: inline-block;
  width: 1.8rem;
  height: 0.4rem;
  position: absolute;
  left: 2.7rem;
  top: 0.8rem;
  font-size: 0.3rem;
  color:#888;
}
/*回复结束*/
/*发帖时间开始*/
.time{
  display: inline-block;
  font-size: 0.3rem;
  position: absolute;
  right: 1.0rem;
  top:0.7rem;
}
/*发帖时间结束*/
.pagination{
  height: 1.0rem;
  margin: 0.25rem 0 0 0.25rem;
  /*background: pink;*/
}
.pagination ul li{
  /*float: left;*/
}
.pagination ul li a{
  font-size: 0.325rem;
  color: #999;
  cursor: default;
  background-color: transparent;
  float: left;
  padding: 0.1rem 0.3rem;
  line-height: 0.5rem;
  text-decoration: none;
  border: 1px solid #ddd;
}
</style>