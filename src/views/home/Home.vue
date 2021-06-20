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
  <com-card :icons="icons" title="新闻资讯">
    <div class="nav jc-between">
      <div class="nav-item active">
        <div class="nav-link">热门</div>
      </div>
      <div class="nav-item">
        <div class="nav-link">新闻</div>
      </div>
      <div class="nav-item">
        <div class="nav-link">公告</div>
      </div>
      <div class="nav-item">
        <div class="nav-link">活动</div>
      </div>
      <div class="nav-item">
        <div class="nav-link">赛事</div>
      </div>
    </div>
    <!-- 卡片轮播 -->
    <swiper class="pt-3">
      <swiper-slide v-for="items of 5" :key="items">
        <div class="py-3" v-for="item of 5" :key="item">
          <span>[新闻]</span>
          <span>|</span>
          <span>腾讯看点|新英雄“云缨”优质内容征集</span>
          <span>06/18</span>
        </div>
      </swiper-slide>
    </swiper>
  </com-card>

  <com-listcard :icons="icons" title="新闻资讯" :categories="news">
    <template #items="{ category }">
      <div class="py-3" v-for="(item, i) of category.newsList" :key="i">
        <span>{{ `[${item.categoryName}]` }}</span>
        <span>|</span>
        <span>{{ item.title }}</span>
        <span>{{ item.date }}</span>
      </div>
    </template>
  </com-listcard>
</template>
<script lang='ts'>
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'

// Import Swiper Vue.js components
// import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue'

// SwiperCore.use([Autoplay, Pagination])
// import 'swiper/swiper.scss'
// import 'swiper/components/pagination/pagination.scss'

interface NewsData {
  news: News[]
}

interface News {
  name: string
  newsList: NewsList[]
}

interface NewsList {
  categoryName: string
  title: string
  date: string
}

export default defineComponent({
  components: {
    // Swiper,
    // SwiperSlide,
  },
  setup() {
    const icons = ref<string[]>(['menu', 'moreread'])
    // const newsList: NewsList = reactive({
    //   categoryName: '新闻',
    //   title: '新闻资讯',
    //   date: '06/18',
    // })
    // const news: News = reactive({
    //   name: '热门',
    //   newsList: [],
    // })

    const newsData: NewsData = reactive({
      news: [],
    })

    onMounted(() => {
      let newsList: NewsList = {
        categoryName: '新闻',
        title: '新闻资讯',
        date: '06/18',
      }
      let newsName: Array<string> = ['热门', '新闻', '公告', '活动', '赛事']
      let news: News = { name: '', newsList: [] }
      for (let i: number = 0; i < 5; i++) {
        news.newsList.push(newsList)
      }
      // debugger
      newsData.news = new Array(5).fill(news)
      // 原因：数组是引用类型，数组变量存储在栈，元素数据存储在堆中，将数组赋值不同的对象，
      // 所有的赋值对象都指向堆同一个数据，所以改变其中一个数组中的元素，别的数组元素也会改变。
      // 解决：先把数组转换成字符串再转换成对象 ,这样会新分配一块内存，就不会指向同一个堆中的数据。
      newsData.news = JSON.parse(JSON.stringify(newsData.news))

      for (let n: number = 0; n < newsData.news.length; n++) {
        newsData.news[n].name = newsName[n]
      }
      // console.log(newsData)
    })
    return {
      icons,
      ...toRefs(newsData),
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