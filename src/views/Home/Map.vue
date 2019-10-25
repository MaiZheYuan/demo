<template>
  <div class="content_padding twocomin">
    <div class="map-box">
      <div id="map"></div>
    </div>
    <div class="data-box content_padding" v-show="false">
      <van-sticky :offset-top="46">
        <van-dropdown-menu class="no-van-hairline--top-bottom">
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
          <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>
      </van-sticky>
      <div>
        <vCard
          style="margin: 10px"
          img="imgs/demo.jpg"
          tag="free"
          price="300000-400000"
          location="昆明市"
          name="一个地方手动阀手动阀"
          intro="方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方"
        ></vCard>
        <vCard style="margin: 10px" img="imgs/demo.jpg" tag="free" price="300000-400000" location="昆明市" name="一个地方士大夫" intro="昆明市一个地方昆明市"></vCard>
        <vCard
          style="margin: 10px"
          img="imgs/demo.jpg"
          tag="free"
          price="300000-400000"
          location="昆明市"
          name="一个地方"
          intro="方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方"
        ></vCard>
        <vCard style="margin: 10px" img="imgs/demo.jpg" tag="free" price="300000-400000" location="昆明市" name="一个地方史" intro="昆明市一个地方昆明市"></vCard>
        <vCard
          style="margin: 10px"
          img="imgs/demo.jpg"
          tag="free"
          price="300000-400000"
          location="昆明市"
          name="一个地方手动阀手动阀"
          intro="方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方"
        ></vCard>
        <vCard style="margin: 10px" img="imgs/demo.jpg" tag="free" price="300000-400000" location="昆明市" name="一个地方士大夫" intro="昆明市一个地方昆明市"></vCard>
        <vCard
          style="margin: 10px"
          img="imgs/demo.jpg"
          tag="free"
          price="300000-400000"
          location="昆明市"
          name="一个地方"
          intro="方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方方昆明市一个地方昆明市一个地方昆明市一个地方"
        ></vCard>
        <vCard style="margin: 10px" img="imgs/demo.jpg" tag="free" price="300000-400000" location="昆明市" name="一个地方史" intro="昆明市一个地方昆明市"></vCard>
      </div>
    </div>
  </div>
</template>

<script>
const AMap = window.AMap;
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
      images: ["https://img.yzcdn.cn/vant/apple-imgs/1.jpg", "https://img.yzcdn.cn/vant/apple-imgs/2.jpg"]
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    var map = new AMap.Map("map", {
      zoom: 12,
      resizeEnable: true
    });
  },
  beforeDestroy() {}
};
</script>
<style scoped>
.twocomin {
  box-sizing: border-box;
  height: 100vh;
}
.map-box {
  height: 100%;
  width: 100%;
}
.data-box {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  z-index: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  overflow: auto;
}
#map {
  height: 100%;
  width: 100%;
}
</style>
