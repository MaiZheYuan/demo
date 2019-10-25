<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
body {
  background-color: #f0f0f0;
}
</style>
