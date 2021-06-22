<template>
  <com-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div
        class="nav-item"
        :class="{ active: active === index }"
        v-for="(category, index) of categories"
        :key="index"
        @click="controlledSwiper.slideTo(index)"
      >
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <!-- 卡片轮播 -->
    <swiper class="pt-3" @slideChange="onSlideChange" @swiper="onSwiper">
      <swiper-slide v-for="(category, index) of categories" :key="index">
        <slot name="items" :category="category"></slot>
      </swiper-slide>
    </swiper>
  </com-card>
</template>
<script lang='ts'>
import { defineComponent, ref, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'listcard',
  props: {
    title: { type: String, require: true },
    icon: { type: String, require: true },
    categories: { type: Array, require: true },
  },
  setup(props) {
    // console.log(props)
    const active = ref<number>(0)
    const data = reactive({
      controlledSwiper: null,
    })

    const onSlideChange = () => {
      // console.log('onSlideChange')
      active.value = data.controlledSwiper.realIndex
    }
    const onSwiper = (swiper) => {
      // console.log(swiper)
      data.controlledSwiper = swiper
    }
    return {
      active,
      onSlideChange,
      onSwiper,
      ...toRefs(data),
    }
  },
})
</script>
