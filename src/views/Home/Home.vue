<template>
  <div class="home">
    <van-nav-bar class="no-van-hairline--bottom" title fixed>
      <div slot="right" style="width: 35px;display:inline-flex;justify-content:space-between">
        <!-- <van-icon name="search" /> -->
        <van-icon name="wap-nav" />
        <van-icon name="question" />
      </div>
      <div slot="title">
        <!-- sdfsd -->
      </div>
      <div slot="left">
        <van-icon name="smile-o" />
        <span>我是茄子</span>
      </div>
    </van-nav-bar>
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar route active-color="#884898" inactive-color="#000">
      <van-tabbar-item replace to="/Find" icon="wap-home">分享</van-tabbar-item>
      <van-tabbar-item replace to="/Map" icon="location">夜游地图</van-tabbar-item>
      <van-tabbar-item replace to="/Chat" icon="friends">群</van-tabbar-item>
      <van-tabbar-item replace to="/Else" icon="more">其他</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {}
};
</script>

<style>
.home .van-nav-bar {
  background: rgba(136, 72, 152, 1);
  color: #fff;
}
.home .van-nav-bar .van-icon {
  color: inherit;
}
.home .van-tabbar {
  background: #f5f5f5;
}
.content_margin {
  margin: 46px 0 60px 0;
}
.content_padding {
  padding: 46px 0 50px 0;
}
</style>
