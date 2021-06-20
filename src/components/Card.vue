<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-center pb-3">
      <i class="iconfont" :class="`icon-${icons[0]}`"></i>
      <div class="flex-1 px-2 fs-xxl">{{ title }}</div>
      <i class="iconfont" :class="`icon-${icons[1]}`"></i>
    </div>
    <div class="card-body pt-3">
      <slot> </slot>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'card',
  props: {
    title: { type: String, require: true },
    icons: { type: Array, require: true },
  },
  setup() {},
})
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
.card {
  .card-header {
    border-bottom: 0.0769rem solid $border-color;
  }
  border-bottom: 0.0769rem solid $border-color;
}
</style>
