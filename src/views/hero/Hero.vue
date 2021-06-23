<template>
  <div class="topbar bg-black py-2 px-3 d-flex ai-center">
    <img src="../../assets/images/logo.png" height="30" />
    <div class="flex-1 ml-2 text-white">
      <span>王者荣耀</span>
      <span class="pl-3">攻略站</span>
    </div>
    <router-link class="text-white" to="/">
      <span class="fs-sm">更多英雄 &gt;</span></router-link
    >
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { reqHeroDetail } from '../../api'
import { Hero } from '../../typings'

export default defineComponent({
  setup() {
    const state = reactive<{ hero: Hero }>({
      hero: {
        name: '',
        avatar: '',
        title: '',
        skills: [],
        scores: { difficult: 0, skills: 0, attack: 0, survive: 0 },
        items1: [],
        items2: [],
        usageTips: '',
        battleTips: '',
        teamTips: '',
        partners: [],
      },
    })

    const route = useRoute()

    onMounted(() => {
      getHeroDetail()
    })

    /** 获取英雄详情 */
    const getHeroDetail = async () => {
      const res = (await reqHeroDetail({ id: route.params.id })) as Hero
      state.hero = res
      console.log('getHeroDetail', res)
    }

    return {
      ...toRefs(state),
      getHeroDetail,
    }
  },
})
</script>
