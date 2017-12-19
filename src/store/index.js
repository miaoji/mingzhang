import Vue from 'vue'
import Vuex from 'vuex'

import * as demo from './modules/demo'
import * as directmail from './modules/directmail'
import * as country from './modules/country'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    country,
    demo,
    directmail
  }
  // state,
  // mutations,
  // getters,
  // actions
})
