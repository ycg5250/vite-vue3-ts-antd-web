<template>
  <!-- 首页轮播图 -->
  <swiper :pagination="{ clickable: true }" :autoplay="{ delay: 4000 }">
    <swiper-slide>
      <img class="w-100" src="../../assets/1.jpeg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../../assets/2.jpeg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../../assets/3.jpeg" alt="" />
    </swiper-slide>
  </swiper>

  <!-- 图标导航 -->
  <div class="nav-icons bg-white d-flex flex-wrap mt-3 pt-3 text-center">
    <div class="nav-item mb-3" v-for="item in 10" :key="item">
      <i class="spirit spirit-news"></i>
      <div>爆料站</div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'

// Import Swiper Vue.js components
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

SwiperCore.use([Autoplay, Pagination])
// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.scss'
// import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    onMounted(() => {
      console.log('onMounted')
    })
    return {}
  },
})
</script>

<style lang="scss">
@import '../../common/variables';
// 重置轮播图 pagination 分页的的样式
.swiper-pagination {
  text-align: right;
  margin-left: -1.5385rem;
  // 分页 pagination 的底色
  .swiper-pagination-bullet {
    border-radius: 10%;
    width: 0.7692rem;
    // 使用scss定义好的颜色
    background: map-get($colors, 'white');
    opacity: 1;
    // 分页 pagination 激活的颜色
    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}
.nav-icons {
  .nav-item {
    width: 25%;
  }
}
</style>