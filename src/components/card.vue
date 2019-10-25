<template>
  <div class="card">
    <img v-lazy="img" style="width:100%;max-height: 30vh" />
    <div style="padding:10px;">
      <div>
        <div>
          <span>{{ price }}</span>
          <span>exc</span>
        </div>
      </div>
      <div>{{ name }}</div>
      <div>
        <a href>{{ location }}</a>
      </div>
      <div>{{ tag }}</div>
      <div class="intro">{{ intro }}</div>
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
  /* background: #eee; */
  border-radius: 5px;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.17);
  border: 1px solid #884898;
}
.intro {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
