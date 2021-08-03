import {
  reqCategoryList,
  reqBannerList,
  reqFloorList
} from '@/api'


const state = {
  categroyList: [],
  bannerList: [],
  floorList: [],
}

const mutations = {
  RECIVE_CATEGROYLIST(state, categroyList) {
    state.categroyList = categroyList
  },
  RECIVE_BANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  RECIVE_FLOORLIST(state, floorList) {
    state.floorList = floorList
  },
}

const actions = {
  async get_categroyList({commit}) {
    const result = await reqCategoryList()
    if (result.code === 200) {
      commit('RECIVE_CATEGROYLIST', result.data)
    }
  },
  async get_bannerList({commit}) {
    const result = await reqBannerList()
    if (result.code === 200) {
      commit('RECIVE_BANNERLIST', result.data)
    }
  },
  async get_floorList({commit}) {
    const result = await reqFloorList()
    if(result.code === 200) {
      commit('RECIVE_FLOORLIST',result.data)
    }
  }
}

export default {
  state,
  mutations,
  actions
}