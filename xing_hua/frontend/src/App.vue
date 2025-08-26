<!-- src/App.vue -->
<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="app-header">
      <div class="header-content">
        <h1 class="page-title">
          {{ route.meta.title || '未命名页面' }}
        </h1>
      </div>
    </header>

    <!-- 主体内容 -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);

}
html, body, #app {
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 主内容区域，占满剩余空间，可以贴边放组件 */
.main-content {
  flex: 1;
  min-height: 0;
  padding: 16px;
}

/* 头部固定在上方 */
.app-header {
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* 让头部内容横向撑满，而不是居中 1200px */
.header-content {
  width: 100%;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  box-sizing: border-box;
}


</style>
