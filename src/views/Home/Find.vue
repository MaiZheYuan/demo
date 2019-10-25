<template>
  <div class="find content_margin">
    <div class="header">
      <van-swipe style="height: 80px;border-radius:7px;" :autoplay="3000" indicator-color="black">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" style="height:100%;width:100%" />
        </van-swipe-item>
      </van-swipe>
      <van-grid class="no-van-hairline--top" style="color:#fff" :column-num="3">
        <van-grid-item icon="diamond" text="经验" />
        <van-grid-item icon="question" text="问答" />
        <van-grid-item icon="comment-circle" text="小说" />
        <van-grid-item icon="bag" text="漫画" />
        <van-grid-item icon="question" text="写真" />
        <van-grid-item icon="question" text="视频" />
      </van-grid>
    </div>
    <!-- <van-dropdown-menu class="no-van-hairline--top-bottom">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>-->
    <div>
      <vCard
        style="margin: 10px"
        img="imgs/demo2.jpg"
        tag="free"
        price="300000-400000"
        location="昆明市"
        name="一个地方手动阀手动阀"
        intro="方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方"
      ></vCard>
      <vCard style="margin: 10px" img="imgs/demo4.jpg" tag="free" price="300000-400000" location="昆明市" name="一个地方士大夫" intro="昆明市一个地方昆明市"></vCard>
      <vCard
        style="margin: 10px"
        img="imgs/demo.jpg"
        tag="free"
        price="300000-400000"
        location="昆明市"
        name="一个地方"
        intro="方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方"
      ></vCard>
      <vCard style="margin: 10px" img="imgs/demo3.jpg" tag="free" price="300000-400000" location="昆明市" name="一个地方史" intro="昆明市一个地方昆明市"></vCard>
      <vCard
        style="margin: 10px"
        img="imgs/demo4.jpg"
        tag="free"
        price="300000-400000"
        location="昆明市"
        name="一个地方手动阀手动阀"
        intro="方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方"
      ></vCard>
      <vCard style="margin: 10px" img="imgs/demo2.jpg" tag="free" price="300000-400000" location="昆明市" name="一个地方士大夫" intro="昆明市一个地方昆明市"></vCard>
      <vCard
        style="margin: 10px"
        img="imgs/demo2.jpg"
        tag="free"
        price="300000-400000"
        location="昆明市"
        name="一个地方"
        intro="方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方"
      ></vCard>
      <vCard style="margin: 10px" img="imgs/demo2.jpg" tag="free" price="300000-400000" location="昆明市" name="一个地方史" intro="昆明市一个地方昆明市"></vCard>
    </div>
    <div style="text-align:center;color:#aaa">没有了......</div>
  </div>
</template>

<script>
import vCard from "@cpn/item.vue";
export default {
  components: { vCard },
  props: {},
  data() {
    return {
      searchValue: "",
      value1: 0,
      value2: "a",
      option1: [{ text: "全部地区", value: 0 }, { text: "泰国", value: 1 }, { text: "越南", value: 2 }],
      option2: [{ text: "默认排序", value: "a" }, { text: "热门排序", value: "b" }, { text: "时间排序", value: "c" }],
      value3: 0,
      option3: [{ text: "当地货币", value: 0 }, { text: "人名币", value: 1 }, { text: "美元", value: 2 }],
      images: ["demo3.jpg", "demo4.jpg"]
    };
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
.header {
  background: linear-gradient(to bottom, rgba(136, 72, 152, 1) 7%, rgba(136, 72, 152, 1), rgba(136, 72, 152, 0.6));
  padding: 0 10px;
  /* border-radius: 0 0 15px 15px; */
}
.find .van-grid-item__content::after {
  display: none;
}
.find .van-grid-item__content {
  background: transparent;
}
.find .van-dropdown-menu {
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.17);
}
.find .van-grid-item__text {
  color: inherit;
}

.no-van-hairline .van-hairline::after,
.no-van-hairline--bottom .van-hairline--bottom::after,
.no-van-hairline--left .van-hairline--left::after,
.no-van-hairline--right .van-hairline--right::after,
.no-van-hairline--surround .van-hairline--surround::after,
.no-van-hairline--top .van-hairline--top::after,
.no-van-hairline--top-bottom .van-hairline--top-bottom::after,
.no-van-hairline.van-hairline::after,
.no-van-hairline--bottom.van-hairline--bottom::after,
.no-van-hairline--left.van-hairline--left::after,
.no-van-hairline--right.van-hairline--right::after,
.no-van-hairline--surround.van-hairline--surround::after,
.no-van-hairline--top.van-hairline--top::after,
.no-van-hairline--top-bottom.van-hairline--top-bottom::after {
  display: none;
}
</style>
