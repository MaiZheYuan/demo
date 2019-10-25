<template>
  <div class="card">
    <div class="top">
      <div class="title">
        <p>
          <span class="title-text">{{ name }}</span>
        </p>
        <p class="taggroup">
          <span class="tag">{{ tag }}</span>
          <span class="tag">优惠</span>
          <span class="tag">特殊</span>
        </p>
      </div>
      <!-- <span class="btn">详情></span> -->
    </div>
    <div class="detail">
      <div class="imgbox">
        <img v-lazy="img" style="width:100%;max-height: 30vh" />
      </div>
      <ul class="text-box">
        <li class="text-item">
          <van-icon name="diamond-o" class="gold" />
          <span class="price">{{ price }}</span>
        </li>
        <li class="text-item">
          <van-icon name="location-o" class="red" />
          <span class="location">{{ location }}</span>
        </li>
        <li class="text-item intro">{{ intro }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    img: String,
    tag: String,
    price: String,
    location: String,
    name: String,
    intro: String
  },
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

<style scoped>
.card {
  color: #7d7e80;
  background: #fff;
  white-space: nowrap;
  padding: 20px 20px;
  padding-bottom: 40px;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.17);
  /* border: 1px solid #884898; */
}
.title-text {
  color: #111;
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 10px;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.title {
  /* display: flex; */
  /* align-items: center; */
}
.detail {
  display: flex;
  margin-top: 20px;
}
.imgbox {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 30%;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 10px;
}
.taggroup {
  margin-top: 2px;
}
.tag {
  /* border-left: 1px solid rgba(136, 72, 152, 1); */
  /* color: rgba(136, 72, 152, 1); */
  padding: 0 4px;
  line-height: 0.8;
  font-size: 0.6em;
  color: #fff;
  background: rgba(136, 72, 152, 0.9);
  margin-right: 2px;
  border-radius: 2px;
}
.btn {
  /* background: rgba(136, 72, 152, 1); */
  border: 1px solid rgba(136, 72, 152, 1);
  color: rgba(136, 72, 152, 1);
  /* color: #fff; */
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 0.8em;
}
.text-box {
  margin-right: 10px;
}
.text-item {
  display: flex;
  align-items: center;
}
.text-item + .text-item {
  margin-top: 10px;
}
.intro {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-height: 1.3;
  text-align: justify;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-wrap;
  text-indent: 1em;
  /* padding-left: 1em; */
}
.price {
  color: #111;
}
.location {
  color: #111;
}
.red {
  color: #ee0a24;
}
.gold {
  color: #ed6a0c;
}
</style>
