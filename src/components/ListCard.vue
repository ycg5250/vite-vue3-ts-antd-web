<template>
  <com-card :icons="icons" :title="title">
    <div class="nav jc-between">
      <div
        class="nav-item"
        :class="{ active: active === index }"
        v-for="(category, index) of categories"
        :key="index"
        @click="active = index"
      >
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <!-- 卡片轮播 -->
    <swiper class="pt-3">
      <swiper-slide v-for="(category, index) of categories" :key="index">
        <slot name="items" :category="category"></slot>
      </swiper-slide>
    </swiper>
  </com-card>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'listcard',
  props: {
    title: { type: String, require: true },
    icons: { type: Array, require: true },
    categories: { type: Array, require: true },
  },
  setup(props) {
    console.log(props)
    const active = ref<number>(0)
    return {
      active,
    }
  },
})
</script>
