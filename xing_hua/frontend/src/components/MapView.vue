<template>
  <div class="map">
    <iframe
        src="https://www.amap.com/"
        width="100%"
        height="400"
        frameborder="0"
        allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
// 可根据需要添加 props 或事件
</script>

<style scoped>
.map {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px #ccc;
}
</style>