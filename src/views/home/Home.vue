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
      <div class="nav-item mb-2" v-for="item in iconnavigation" :key="item">
        <i class="spirit" :class="item.iconName"></i>
        <div class="py-2">{{ item.name }}</div>
      </div>
    </div>
    <div class="bg-light py-2 fs-sm">
      <i
        class="spirit mr-2"
        :class="isPullUp ? 'spirit-arrow-up' : 'spirit-arrow'"
      ></i>
      <span @click="onPullUp">收起</span>
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
        <span class="text-primary news-category fs-sm px-1">{{
          item.categoryName
        }}</span>
        <span class="flex-1 text-dark-1 text-ellipsis px-2">{{
          item.title
        }}</span>
        <span class="text-grey fs-sm">{{ item.createdAt }}</span>
      </router-link>
    </template>
  </com-listcard>

  <!-- 英雄列表 card-->
  <com-listcard icon="card-hero" title="英雄列表" :categories="heroes">
    <!-- 新英雄暂时用静态图，后期从服务端配置 -->
    <div class="mb-3">
      <img
        class="w-100 pb-3 border-bottom"
        src="../../assets/images/newhero.jpg"
        alt=""
      />
    </div>
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
  <div class="bg-white py-2 text-center">
    <router-link to="/strategycenter" class="text-grey fs-md">
      加载更多内容
    </router-link>
  </div>
</template>
<script lang='ts'>
  import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
  import dayjs from 'dayjs'

  import { reqHeroseData, reqNewsData } from '../../api/home'
  import { HomeData, News, Heroes } from '../../typings'
  import { ICON_NAVIGATION } from '../../utils/constants'

  export default defineComponent({
    setup() {
      const isPullUp = ref<boolean>(true) //初始是收起状态
      const iconnavigation = ref<object[]>([])
      const state = reactive<HomeData>({
        news: [],
        heroes: [],
      })

      onMounted(() => {
        getNewsData()
        getHeroesData()
        onPullUp()
      })

      /**发送请求获取新闻资讯内容 */
      const getNewsData = async () => {
        const res = await reqNewsData()
        // console.log(res)
        state.news = res.data
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
        // const res = (await reqHeroesData()) as Heroes[]
        const res = await reqHeroseData()
        // console.log(res)
        if (res.status === 200) {
          state.heroes = res.data
        }
        // console.log(state.heroes)
      }

      const onPullUp = () => {
        if (isPullUp.value) {
          iconnavigation.value = ICON_NAVIGATION.slice(0, 4)
        } else {
          iconnavigation.value = ICON_NAVIGATION.slice(0, 12)
        }
        isPullUp.value = !isPullUp.value
      }

      return {
        ...toRefs(state),
        getNewsData,
        getHeroesData,
        onPullUp,
        iconnavigation,
        isPullUp,
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
  .news-category {
    border: 0.0769rem solid map-get($colors, 'primary');
  }
  .nav-icons {
    // overflow: auto;
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