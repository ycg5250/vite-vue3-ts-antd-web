<template>
  <!-- 顶部黑色区域 -->
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
  <!-- 英雄名介绍区域 -->
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
  <!-- 英雄详细介绍区域 -->
  <div class="">
    <div class="bg-white px-3">
      <div class="nav d-flex jc-around border-bottom pt-3 pb-2">
        <div class="nav-item active">
          <div class="nav-link">英雄初识</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">进阶攻略</div>
        </div>
      </div>
    </div>
    <swiper>
      <swiper-slide>
        <div class="">
          <!-- 英雄技能介绍 -->
          <div class="bg-white border-bottom p-3">
            <div class="d-flex">
              <router-link class="btn btn-lg text-black flex-1" to="/">
                <i class="iconfont icon-menu"></i>
                英雄介绍视频
              </router-link>
              <router-link class="btn btn-lg text-black flex-1 ml-2" to="/">
                <i class="iconfont icon-menu"></i>
                一图识英雄
              </router-link>
            </div>
            <div class="skills mt-4">
              <div class="d-flex jc-around">
                <img
                  class="icon"
                  :class="{ active: currentSkillsIndex === i }"
                  @click="currentSkillsIndex = i"
                  :src="item.icon"
                  v-for="(item, i) of hero.skills"
                  :key="i"
                  alt=""
                />
              </div>
            </div>
            <div v-if="currentSkill" class="pt-4 pb-3">
              <div class="d-flex ai-center">
                <div class="fs-xl">
                  <strong>{{ currentSkill.name }}</strong>
                </div>
                <span class="fs-sm ml-4 text-grey">
                  (冷却值：{{ currentSkill.delay }} 消耗：{{
                    currentSkill.cost
                  }})
                </span>
              </div>
              <p class="text-dark-1">{{ currentSkill.description }}</p>
            </div>
          </div>
          <!-- 加点建议和出装推荐 d-flex flex-column -->
          <div class="bg-white mt-3 border-bottom">
            <div class="d-flex py-4 px-3">
              <i class="iconfont icon-tianjiadian"></i>
              <h3 class="m-0 ml-2">加点建议</h3>
            </div>
            <div class="d-flex ml-2">
              <div
                class="ai-center mx-3 text-center"
                v-for="(item, i) of hero.skills.slice(1, 3)"
              >
                <div class="mb-3 fs-xxl">{{ i === 0 ? '主升' : '副升' }}</div>
                <img
                  class="mb-3"
                  :src="item.icon"
                  width="65"
                  height="65"
                  alt=""
                />
                <div>{{ item.name }}</div>
              </div>
            </div>
            <com-card plain icon="111-01-01" title="出装推荐">
              <p class="m-0 fs-xxl mb-3">顺风出装</p>
              <div class="d-flex text-center jc-around">
                <div class="" v-for="(item, i) of hero.items1" :key="i">
                  <img class="item-img" :src="item.icon" alt="" />
                  <div class="fs-xm">{{ item.name }}</div>
                </div>
              </div>
              <div class="border-bottom mt-1"></div>
              <p class="m-0 fs-xxl my-3">逆风出装</p>
              <div class="d-flex text-center jc-around">
                <div class="" v-for="(item, i) of hero.items2" :key="i">
                  <img class="item-img" :src="item.icon" alt="" />
                  <div class="fs-xm">{{ item.name }}</div>
                </div>
              </div>
              <div class="border-bottom mt-1"></div>
            </com-card>
          </div>
          <com-card
            plain
            icon="ellipsis-horizontal-circle-outline"
            title="铭文推荐"
          >
            铭文推荐
          </com-card>
          <com-card plain icon="cloud-circle-outline" title="使用技巧">
            {{ hero.usageTips }}
          </com-card>
          <com-card plain icon="close-circle-outline" title="对抗技巧">
            {{ hero.battleTips }}
          </com-card>
          <com-card plain icon="scan-circle-outline" title="团战思路">
            {{ hero.teamTips }}
          </com-card>
          <com-card plain icon="scan-circle-outline" title="英雄关系">
            <p class="m-0 fs-xxl mb-3">最佳搭档</p>
            <div class="d-flex" v-for="(item, i) in hero.partners" :key="i">
              <img :src="item.hero.avatar" width="50" height="50" alt="" />
              <p class="m-0 ml-2">{{ item.description }}</p>
            </div>
            <div class="border-bottom my-3"></div>
            <p class="m-0 fs-xxl mb-3">被谁克制</p>
            <div class="d-flex" v-for="(item, i) in hero.partners" :key="i">
              <img :src="item.hero.avatar" width="50" height="50" alt="" />
              <p class="m-0 ml-2">{{ item.description }}</p>
            </div>
          </com-card>
        </div>
      </swiper-slide>
      <swiper-slide>2</swiper-slide>
    </swiper>
  </div>
</template>
<script lang='ts'>
  import {
    defineComponent,
    onMounted,
    reactive,
    toRefs,
    ref,
    computed,
  } from 'vue'
  import { useRoute } from 'vue-router'
  // import { reqHeroDetail } from '../../api'
  import { reqHeroDetail } from '../../api/hero'
  import { Hero } from '../../typings'

  export default defineComponent({
    setup() {
      const currentSkillsIndex = ref<number>(0)
      const plain = ref<boolean>(true)
      const state = reactive<{ hero: Hero }>({
        hero: {
          name: '',
          avatar: '',
          banner: '',
          title: '',
          categories: [],
          skills: [{ name: '', icon: '', cost: '', delay: '', description: '' }],
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

      const currentSkill = computed(() => {
        return state.hero.skills[currentSkillsIndex.value]
      })

      onMounted(() => {
        getHeroDetail()
      })

      /** 获取英雄详情 */
      const getHeroDetail = async () => {
        const res = await reqHeroDetail({ id: route.params.id })
        if (res.status === 200) {
          state.hero = res.data
          console.log('getHeroDetail', res)
        }
      }

      return {
        ...toRefs(state),
        getHeroDetail,
        currentSkillsIndex,
        currentSkill,
        plain,
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
  .skills {
    img.icon {
      width: 5rem;
      height: 5rem;
      border: 3px solid map-get($colors, 'white');
      &.active {
        border-color: map-get($colors, 'primary');
      }
      border-radius: 50%;
    }
  }
  .item-img {
    width: 3.6154rem;
    height: 3.6154rem;
    border-radius: 50%;
  }
</style>