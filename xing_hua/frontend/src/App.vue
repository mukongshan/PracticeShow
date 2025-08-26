<!-- src/App.vue -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="app-header">
      <div class="header-content">
        <!-- Logo区域 -->
        <div class="logo-section">
          <RouterLink to="/" class="logo-link">
            <div class="logo-container">
              <img
                  alt="Vue logo"
                  class="logo"
                  src="@/assets/logo.svg"
                  width="64"
                  height="64"
              />
              <div class="logo-glow"></div>
            </div>
          </RouterLink>
        </div>

        <!-- 导航菜单 -->
        <nav class="main-nav">
          <RouterLink
              to="/"
              class="nav-link"
              :class="{ 'active': $route.path === '/' }"
          >
            <span class="nav-text">控制台</span>
            <div class="nav-indicator"></div>
          </RouterLink>
        </nav>
      </div>
    </header>

    <!-- 主要内容区域 -->
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
