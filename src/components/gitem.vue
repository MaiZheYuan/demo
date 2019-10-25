<template>
  <div class="gitem">
    <div class="imgbox" v-lazy:background-image="img">
      <span v-if="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="message">
      <div class="title">
        <h3 class="title-text">{{ name }}</h3>
        <p class="time">{{ time }}</p>
      </div>
      <div class="content">
        <p>{{ message }}</p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    img: String,
    tag: String,
    name: String,
    message: String,
    time: String
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
.gitem {
  display: flex;
  align-items: center;
  padding-top: 15px;
  background: #fff;
  border-bottom: 1px solid #eee;
  margin-left: 20px;
  overflow: hidden;
}
.imgbox {
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 25px;
  background-size: cover;
}
.tag {
  position: absolute;
  background: rgba(136, 72, 152, 1);
  right: 0;
  top: 0;
  color: #fff;
  padding: 3px;
  border-radius: 50%;
  transform: translate(50%, -50%);
}
.message {
  flex-grow: 1;
  height: 100%;
}
.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: flex-start;
}
.content {
  display: flex;
  justify-content: space-between;
}
.title-text {
  font-size: 1.5em;
  font-weight: bold;
  color: #111;
}
.time {
  margin-right: 20px;
  font-size: 0.8em;
  opacity: 0.6;
}
</style>
