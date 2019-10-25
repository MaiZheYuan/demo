<template>
  <div class="content_margin" style="background-color:#fff">
    <div style="padding-bottom: 30px">
      <gitem v-for="item in chats" :key="item.id" v-bind="item"></gitem>
    </div>
  </div>
</template>

<script>
import gitem from "@cpn/gitem.vue";
export default {
  components: {
    gitem
  },
  props: {},
  data() {
    return {
      chats: [
        {
          id: "sdfsd",
          img: "imgs/demo.jpg",
          tag: "10",
          name: "一个群",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "sdfssdfd",
          img: "imgs/demo2.jpg",
          tag: "10",
          name: "杀马特",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "sdfssd3456fssfd",
          img: "imgs/demo3.jpg",
          tag: "10",
          name: "老虎有",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "sdfg563hdfgsd",
          img: "imgs/demo4.jpg",
          name: "似懂非懂",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "sdfh0.gkjhgjsd",
          img: "imgs/demo.jpg",
          name: "和法规和",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "s423456+2dfsd",
          img: "imgs/demo2.jpg",
          name: "看更何况",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "sd897+879fsd",
          img: "imgs/demo.jpg",
          tag: "10",
          name: "一个群",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "sdf+89+7ssdfd",
          img: "imgs/demo2.jpg",
          tag: "10",
          name: "杀马特",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "sdfssd45645fssfd",
          img: "imgs/demo3.jpg",
          tag: "10",
          name: "老虎有",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "sdfg89+8+hdfgsd",
          img: "imgs/demo4.jpg",
          name: "似懂非懂",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "sdfhgkjh35689+gjsd",
          img: "imgs/demo.jpg",
          name: "和法规和",
          message: "发小：你是个什么",
          time: "2018/04/08"
        },
        {
          id: "s42342df455sd",
          img: "imgs/demo2.jpg",
          name: "看更何况",
          message: "发小：你是个什么",
          time: "2018/04/08"
        }
      ]
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

<style></style>
