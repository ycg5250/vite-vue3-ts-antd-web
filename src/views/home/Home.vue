<template>
  <!-- 首页轮播图 -->
  <swiper :pagination="{ clickable: true }" :autoplay="{ delay: 4000 }">
    <swiper-slide>
      <img class="w-100" src="../../assets/images/1.jpeg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../../assets/images/2.jpeg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../../assets/images/3.jpeg" alt="" />
    </swiper-slide>
  </swiper>

  <!-- 图标导航 -->
  <div class="nav-icons bg-white mt-3 pt-3 text-center">
    <div class="d-flex flex-wrap">
      <div class="nav-item mb-3" v-for="item in 10" :key="item">
        <i class="spirit spirit-news"></i>
        <div class="py-2">爆料站</div>
      </div>
    </div>
    <div class="bg-light py-2 fs-sm">
      <i class="spirit spirit-arrow mr-2"></i>
      <span>收起</span>
    </div>
  </div>

  <!-- 新闻资讯 card-->
  <com-listcard icon="menu" title="新闻资讯" :categories="news">
    <template #items="{ category }">
      <router-link
        :to="`/articles/${item._id}`"
        class="py-2 d-flex fs-lg"
        v-for="(item, i) of category.newsList"
        :key="i"
      >
        <span class="text-info">{{ `[${item.categoryName}]` }}</span>
        <span class="flex-1 text-dark-1 text-ellipsis px-2">{{
          item.title
        }}</span>
        <span class="text-grey fs-sm">{{ item.createdAt }}</span>
      </router-link>
    </template>
  </com-listcard>

  <!-- 英雄列表 card-->
  <com-listcard icon="card-hero" title="英雄列表" :categories="heroes">
    <template #items="{ category }">
      <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
        <router-link
          :to="`/heroes/${hero._id}`"
          class="py-2 text-center p-2"
          style="width: 20%"
          v-for="(hero, i) of category.heroList"
          :key="i"
        >
          <img :src="hero.avatar" style="width: 100%" alt="" />
          <div class="text-black">{{ hero.name }}</div>
        </router-link>
      </div>
    </template>
  </com-listcard>
  <div>1111</div>
  <div>1111</div>
  <div>1111</div>
  <div>1111</div>
  <div>1111</div>
  <div>1111</div>
  <div>1111</div>
  <div>1111</div>
  <div>1111</div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import dayjs from 'dayjs'

import { reqHeroesData, reqNewsData } from '../../api'
import { HomeData, News, Heroes } from '../../typings'

export default defineComponent({
  setup() {
    const state = reactive<HomeData>({
      news: [],
      heroes: [],
    })

    onMounted(() => {
      getNewsData()
      getHeroesData()
    })

    /**发送请求获取新闻资讯内容 */
    const getNewsData = async () => {
      const res = (await reqNewsData()) as News[]
      // console.log(res)
      state.news = res
      // 格式化日期
      state.news.map((item) => {
        item.newsList.map((slide) => {
          slide.createdAt = dayjs(slide.createdAt).format('MM/DD')
          return slide
        })
        return item
      })
      // console.log('getNewsData', newsData.news)
    }

    /**请求获取英雄数据 */
    const getHeroesData = async () => {
      // console.log('getHeroesData')
      const res = (await reqHeroesData()) as Heroes[]
      state.heroes = res

      // console.log(state.heroes)
    }

    return {
      ...toRefs(state),
      getNewsData,
      getHeroesData,
    }
  },
})
</script>

<style lang="scss">
@import '../../assets/scss/variables';
@import 'swiper/components/pagination/pagination.scss';
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
  border-top: 0.0769rem solid $border-color;
  border-bottom: 0.0769rem solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 0.0769rem solid $border-color;
    // css3 选择第几个不需要边框
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>