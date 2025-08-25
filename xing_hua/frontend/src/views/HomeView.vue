<!-- src/views/HomeView.vue -->
<template>
  <div class="container">
    <div class="sections">
      <div v-for="(item, idx) in sections" :key="idx" class="section">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        <a :href="item.link" target="_blank">跳转</a>
      </div>
    </div>
    <MapView />
  </div>
</template>

<script setup lang="ts">
import MapView from '../components/MapView.vue'
const sections = [
  { title: '部分一', desc: '描述一', link: 'https://example.com/1' },
  { title: '部分二', desc: '描述二', link: 'https://example.com/2' },
  { title: '部分三', desc: '描述三', link: 'https://example.com/3' },
  { title: '部分四', desc: '描述四', link: 'https://example.com/4' },
  { title: '部分五', desc: '描述五', link: 'https://example.com/5' },
  { title: '部分六', desc: '描述六', link: 'https://example.com/6' },
];
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}
.sections {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
}
.section {
  flex: 1 1 30%;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  min-width: 220px;
}
.map {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px #ccc;
}
</style>