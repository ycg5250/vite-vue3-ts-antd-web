<template>
  <div class="d-flex py-3 px-2 border-bottom">
    <div class="iconfont icon-back text-blue" @click="$router.back()"></div>
    <strong class="flex-1 text-blue pl-1 text-ellipsis">{{ title }}</strong>
    <div class="text-grey fs-xs pr-3">{{ createdAt }}</div>
  </div>
  <div v-html="body" class="article-body px-3"></div>
</template>

<script setup lang='ts'>
// 尝试一下新的写法 <script setup>
import { defineProps, onMounted, reactive, toRefs } from 'vue'
import dayjs from 'dayjs'
import { reqArtDetail } from '../../api'
// 使用 <script setup> 之后这里暂时不知道为什么引入这个会报错，只能暂时先把约束接口写在当前文件
// import { Article } from '../../typings'

interface Article {
  title: string
  body: string
  createdAt: string
}

// export default defineComponent({
//   setup() {},
// })
const props = defineProps({
  id: String,
})

const state = reactive<Article>({
  title: '',
  body: '',
  createdAt: '',
})

const { title, body, createdAt } = toRefs(state)

onMounted(() => {
  getArticle()
})

/** 获取文章详情 */
const getArticle = async () => {
  const res = (await reqArtDetail({ id: props.id })) as Article
  state.title = res.title
  state.createdAt = dayjs(res.createdAt).format('YYYY-MM-DD')
  state.body = res.body
  // console.log('getArticle', res)
}
</script>

<style lang="scss">
.article-body {
  img {
    width: 100%;
    height: auto;
  }
  iframe {
    width: 100%;
    height: 34.6154rem;
  }
}
</style>


