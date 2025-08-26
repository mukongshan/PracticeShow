<!-- src/App.vue -->
<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="app-header">
      <div class="header-content">
        <!-- 返回主页按钮 -->
        <button
            v-if="route.path !== '/'"
            @click="router.push('/')"
            class="back-button"
            title="返回主页"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5"
                  stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>主页</span>
        </button>

        <!-- 页面标题 -->
        <div class="title-container">
          <h1 class="page-title">
            <span class="title-text">
              {{ route.meta.title || '未命名页面' }}
            </span>
            <div class="title-underline"></div>
          </h1>
        </div>

        <!-- 右侧占位 -->
        <div class="header-spacer"></div>
      </div>
    </header>

    <!-- 主体内容 -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* 背景整体渐变 + 星空质感 */html, body, #app {
  height: 100%;
  width: 100vw;         /* 确保始终铺满窗口 */
  max-width: 100vw;     /* 防止子元素撑大 */
  margin: 0;
  padding: 0;
  overflow-x: hidden;   /* 禁止横向滚动 */
  box-sizing: border-box;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
}

#app {
  min-height: 100vh;    /* 确保始终占满整个可见高度 */
  display: flex;
  flex-direction: column;
}


.main-content {
  flex: 1;
  min-height: 0;
  padding: 24px;
  animation: fadeIn 0.6s ease;
}

/* 顶部导航栏 */
.app-header {
  background: rgba(26, 26, 46, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  animation: slideDown 0.5s ease;
}

.header-content {
  width: 100%;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  box-sizing: border-box;
}

/* 返回按钮 */
.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: #a0b4ff;
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s ease;
  backdrop-filter: blur(12px);
}

.back-button:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.35), rgba(118, 75, 162, 0.35));
  border-color: rgba(102, 126, 234, 0.5);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.25);
}

.back-button:active {
  transform: translateY(0);
}

/* 标题容器 */
.title-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* 页面标题 */
.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
  position: relative;
  letter-spacing: 0.02em;
}

.title-text {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glowText 3s ease-in-out infinite;
}

/* 标题下划线 */
.title-underline {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 2px;
  box-shadow: 0 0 12px rgba(102, 126, 234, 0.5);
  animation: pulse 2.5s infinite;
}

/* 占位 */
.header-spacer {
  flex: 1;
}

/* 动画效果 */
@keyframes slideDown {
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes glowText {
  0%, 100% { text-shadow: 0 0 6px rgba(102,126,234,0.6); }
  50% { text-shadow: 0 0 12px rgba(118,75,162,0.8); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.8; transform: translateX(-50%) scaleX(1); }
  50% { opacity: 1; transform: translateX(-50%) scaleX(1.1); }
}

/* 响应式 */
@media (max-width: 768px) {
  .page-title { font-size: 1.6rem; }
  .title-underline { width: 40px; }
}

@media (max-width: 480px) {
  .page-title { font-size: 1.3rem; }
  .back-button span { display: none; }
  .back-button { padding: 8px; border-radius: 8px; }
}
</style>
