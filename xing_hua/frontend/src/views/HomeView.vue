<!-- src/views/HomeView.vue -->
<template>
  <div class="container">
    <!-- 标题区域 -->
    <div class="header">
      <h1 class="main-title">
        <span class="title-text">控制台</span>
        <div class="title-underline"></div>
      </h1>
      <p class="subtitle">管理系统总览</p>
    </div>

    <!-- 功能卡片区域 -->
    <div class="sections">
      <div
          v-for="(item, idx) in sections"
          :key="idx"
          class="section-card"
          @click="navigateTo(item.link)"
          :style="{ animationDelay: `${idx * 0.1}s` }"
      >
        <div class="card-content">
          <div class="card-icon">
            <div class="icon-placeholder">{{ idx + 1 }}</div>
          </div>
          <div class="card-info">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.desc }}</p>
          </div>
          <div class="card-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="card-glow"></div>
      </div>
    </div>

    <!-- 地图区域 -->
    <div class="map-container">
      <MapView />
    </div>
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

const navigateTo = (link: string) => {
  window.open(link, '_blank')
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 40px 24px;
  position: relative;
  overflow-x: hidden;
}

/* 背景装饰 */
.container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

/* 标题区域 */
.header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.main-title {
  position: relative;
  margin: 0 0 16px 0;
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.title-text {
  position: relative;
  display: inline-block;
}

.title-underline {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  color: #a0a0a0;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.05em;
}

/* 卡片区域 */
.sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 60px;
}

.section-card {
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.section-card:hover {
  transform: translateY(-8px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(102, 126, 234, 0.2),
      0 0 40px rgba(102, 126, 234, 0.1);
}

.section-card:hover .card-glow {
  opacity: 1;
  transform: scale(1.05);
}

.card-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  z-index: 2;
}

.card-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.icon-placeholder {
  font-size: 1.2rem;
  font-weight: 600;
  color: #667eea;
  min-width: 24px;
  text-align: center;
}

.card-info {
  flex: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #ffffff;
  line-height: 1.3;
}

.card-desc {
  font-size: 0.95rem;
  color: #b0b0b0;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
}

.card-arrow {
  flex-shrink: 0;
  color: #667eea;
  opacity: 0.7;
  transition: all 0.3s ease;
  margin-left: 8px;
}

.section-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(4px);
  color: #764ba2;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 16px;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;
  pointer-events: none;
}

/* 地图容器 */
.map-container {
  margin-top: 40px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

/* 动画 */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    padding: 24px 16px;
  }

  .main-title {
    font-size: 2.2rem;
  }

  .sections {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-card {
    padding: 20px;
  }

  .header {
    margin-bottom: 40px;
  }

  .subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.8rem;
  }

  .section-card {
    padding: 16px;
  }

  .card-content {
    gap: 12px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
  }
}
</style>