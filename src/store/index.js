import Vue from 'vue'
import Vuex from 'vuex'

import * as demo from './modules/demo'
import * as country from './modules/country'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		demo,
		country
	},
	// state,
	// mutations,
	// getters,
	// actions
})