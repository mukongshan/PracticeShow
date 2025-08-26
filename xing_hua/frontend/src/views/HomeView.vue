<!-- src/views/HomeView.vue -->
<template>
  <div class="container">
    <!-- 标题区域 -->
    <div class="header">
      <div class="header-bg"></div>
      <div class="header-content">
        <h1 class="main-title">
          <span class="title-text">管理系统</span>
          <div class="title-underline"></div>
        </h1>
        <p class="subtitle">智能化管理平台总览</p>
        <div class="title-decoration">
          <div class="deco-circle"></div>
          <div class="deco-circle"></div>
          <div class="deco-circle"></div>
        </div>
      </div>
    </div>


    <!-- 地图区域 -->
    <div class="map-container">
      <div class="map-header">
        <h2>实时监控概览</h2>
        <p>系统运行状态实时监控</p>
      </div>
      <MapView />
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
            <div class="icon-background">
              <div class="icon-number">{{ idx + 1 }}</div>
            </div>
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
        <div class="card-border"></div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import MapView from '../components/MapView.vue'

const router = useRouter()

const sections = [
  {
    title: '数据分析中心',
    desc: '集成大数据分析功能，提供多维度数据洞察和趋势预测。支持实时数据处理、可视化图表展示以及自定义报表生成，帮助您快速理解业务现状，发现潜在机会，做出更明智的决策。系统自动收集并分析各类业务数据，为您呈现清晰的数据画像。',
    link: '/summary'
  },
  {
    title: '用户管理系统',
    desc: '全面的用户管理解决方案，支持用户注册、认证、权限分配和行为分析。提供直观的用户界面，便于管理员高效管理用户账户，设置不同级别的访问权限，跟踪用户活动记录。系统具备强大的安全机制，确保用户数据的完整性和隐私保护。',
    link: 'https://example.com/2'
  },
  {
    title: '项目管理工具',
    desc: '现代化的项目管理平台，集成任务分配、进度跟踪、团队协作和时间管理功能。支持敏捷开发方法论，提供甘特图、看板视图等多种项目管理方式，帮助团队高效协作，按时交付高质量项目成果。实时同步项目状态，确保所有成员信息一致。',
    link: 'https://example.com/3'
  },
  {
    title: '财务监控面板',
    desc: '实时财务数据监控和分析工具，提供收入支出统计、预算管理和财务报表功能。支持多维度财务数据分析，帮助您掌握资金流向，优化财务结构，确保企业财务健康。系统自动生成各类财务报表，为管理层提供决策支持。',
    link: 'https://example.com/4'
  },
  {
    title: '安全防护系统',
    desc: '企业级安全防护解决方案，集成网络安全、数据加密和访问控制功能。实时监控系统安全状态，及时发现并阻止潜在威胁。提供多层次的安全防护机制，包括防火墙、入侵检测和数据备份恢复功能，确保您的数字资产安全无忧。',
    link: 'https://example.com/5'
  },
  {
    title: '客户服务模块',
    desc: '智能化的客户服务平台，提供工单管理、客户反馈收集和满意度调查功能。支持多渠道客户沟通，包括邮件、电话和在线聊天。系统自动记录客户交互历史，帮助客服团队提供个性化服务，提升客户满意度和忠诚度。',
    link: 'https://example.com/6'
  },
];

const navigateTo = (link: string) => {
  router.push(link)
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
  margin-bottom: 0;
  position: relative;
  z-index: 2;
}

.header-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(102, 126, 234, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
}

.header-content {
  position: relative;
  z-index: 2;
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
  margin: 0 0 20px 0;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.title-decoration {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}

.deco-circle {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  opacity: 0.6;
  animation: pulse 2s infinite;
}

.deco-circle:nth-child(2) {
  animation-delay: 0.3s;
}

.deco-circle:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* 卡片区域 */
.sections {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 30px;
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
  height: 100%;
  display: flex;
  flex-direction: column;
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
  transform: scale(1.02);
}

.section-card:hover .card-border {
  opacity: 1;
  transform: scale(1.02);
}

.card-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
  position: relative;
  z-index: 2;
}

.card-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
}

.icon-background {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.icon-number {
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
  margin: 0 0 12px 0;
  color: #ffffff;
  line-height: 1.3;
}

.card-desc {
  font-size: 0.95rem;
  color: #b0b0b0;
  margin: 0 0 20px 0;
  line-height: 1.6;
  font-weight: 400;
  flex: 1;
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

.card-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(102, 126, 234, 0.2);
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

.map-header {
  background: rgba(26, 26, 46, 0.8);
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.map-header h2 {
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
}

.map-header p {
  margin: 0;
  font-size: 0.9rem;
  color: #b0b0b0;
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

  .header-bg {
    width: 400px;
    height: 200px;
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

  .icon-number {
    font-size: 1rem;
  }

  .map-header {
    padding: 16px 20px;
  }

  .map-header h2 {
    font-size: 1.3rem;
  }
}
</style>