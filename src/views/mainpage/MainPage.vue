<template>
  <div class="topbar bg-black py-2 px-3 d-flex ai-center">
    <img src="../../assets/images/logo.png" height="30" />
    <div class="px-2 flex-1">
      <div class="text-white">王者荣耀</div>
      <div class="text-grey-1 fs-xxs">团队成就更多</div>
    </div>
    <button type="button" class="btn bg-primary">立即下载</button>
  </div>
  <div class="bg-primary py-2 pt-3">
    <div class="nav nav-inverse pb-2 jc-around">
      <div class="nav-item" :class="$route.path === '/home' ? 'active' : ''">
        <router-link class="nav-link" to="/home"> 首页 </router-link>
      </div>
      <div
        class="nav-item"
        :class="$route.path === '/strategycenter' ? 'active' : ''"
      >
        <router-link class="nav-link" to="/strategycenter">
          攻略中心
        </router-link>
      </div>
      <div
        class="nav-item"
        :class="$route.path === '/matchcenter' ? 'active' : ''"
      >
        <router-link class="nav-link" to="/matchcenter"> 赛事中心 </router-link>
      </div>
      <div class="nav-item" :class="$route.path === '/newgame' ? 'active' : ''">
        <router-link class="nav-link" to="/newgame"> IP新游 </router-link>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'mainpage',
  setup() {},
})
</script>

<style lang="scss">
.topbar {
  // 吸顶效果
  position: sticky;
  top: 0;
  z-index: 888;
}
</style>