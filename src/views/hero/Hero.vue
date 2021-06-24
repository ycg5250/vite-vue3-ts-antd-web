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
  <div class="top" :style="{ 'background-image': `url(${hero.banner}) ` }">
    <div class="heroinfo text-white p-3 d-flex flex-column h-100 jc-end">
      <div class="fs-sm">{{ hero.title }}</div>
      <div class="fs-xxl pt-1">
        <strong>{{ hero.name }}</strong>
      </div>
      <div class="fs-sm pt-1">
        {{ hero.categories.map((item) => item.name).join('/') }}
      </div>
      <div class="d-flex jc-between pt-2">
        <div class="scores d-flex ai-center">
          <span>难度</span>
          <span class="badge bg-primary">{{ hero.scores.difficult }}</span>
          <span>技能</span>
          <span class="badge bg-blue-1">{{ hero.scores.skills }}</span>
          <span>攻击</span>
          <span class="badge bg-danger">{{ hero.scores.attack }}</span>
          <span>生存</span>
          <span class="badge bg-dark-2">{{ hero.scores.survive }}</span>
        </div>
        <router-link to="/" class="fs-sm text-grey">皮肤：6&gt;</router-link>
      </div>
    </div>
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
        banner: '',
        title: '',
        categories: [],
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

<style lang="scss">
@import '../../assets/scss/variables';
.top {
  height: 46vw;
  background: map-get($colors, 'white') no-repeat top center;
  background-size: auto 100%;
  .heroinfo {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6154rem;
        border: 1px solid raba(255, 255, 255, 0.2);
      }
    }
  }
}
</style>