import Vue from 'vue'
import Vuex from 'vuex'

import * as country from './modules/country'
import * as demo from './modules/demo'
import * as directmail from './modules/directmail'
import * as user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    country,
    demo,
    directmail,
    user
  }
})
