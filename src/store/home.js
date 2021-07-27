import {
  reqCategoryList
} from '@/api'


const state = {
  categroyList: []
}

const mutations = {
  RECIVE_CATEGROYLIST(state, categroyList) {
    state.categroyList = categroyList
  }
}

const actions = {
  async get_categroylist({commit}) {
    const result = await reqCategoryList()
    if (result.code === 200) {
      commit('RECIVE_CATEGROYLIST', result.data)
    }
  }
}

export default {
  state,
  mutations,
  actions
}