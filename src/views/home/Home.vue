<template>
  <div>首页</div>
  <swiper>
    <swiper-slide>
      <img src="../../assets/logo.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/logo.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/logo.png" alt="" />
    </swiper-slide>
  </swiper>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'

// Import Swiper Vue.js components
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

SwiperCore.use([])
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss'

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
