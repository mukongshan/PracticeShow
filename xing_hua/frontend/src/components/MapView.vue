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

  /* 控制上下外边距 */
  margin-top: 0;   /* 上方边距变小（原可能是 20px 或更大，现在减小） */
  margin-bottom: 50px; /* 下方边距变大（下方留出更多空白） */
}
</style>