/** typings/index.ts  定义接口 */

/**首页的数据类型约束 */
export interface HomeData {
  news: News[],
  heroes: Heroes[]
}

/** 新闻数据 */
export interface News {
  name: string
  newsList: NewsList[]
}

interface NewsList {
  categoryName: string
  title: string
  createdAt: string
}

/** 英雄数据 */
export interface Heroes {
  name: string
  HeroList: HeroList[]
}

interface HeroList {
  hero: Hero[]
}

// 英雄详情
export interface Hero {
  name: string
  avatar: string
  banner: string
  title: string
  categories: []
  scores: Scores
  skills: Skills[]
  items1: []
  items2: []
  usageTips: string
  battleTips: string
  teamTips: string
  partners: []
}

export interface Scores {
  difficult: number
  skills: number
  attack: number
  survive: number
}

interface Skills {
  icon: string
  name: string
  description: string
}

interface Items1 {

}

interface Items2 {

}

interface Partners {
  description: string
}

/** 文章数据 */
export interface Article {
  title: string
  body: string
}

