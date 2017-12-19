export const state = {
  count: 1,
  index: '我想着仅仅是vuex传来的一段文字'
}

export const mutations = {
  add (state, n = 1) {
    state.count += 13
  },
  reduce (state, n = 100) {
    state.count -= n
  },
  chengshi (state) {
    alert(123)
  },
  winner (state) {
    console.log('state', state)
    // state.dispatch('increment')
  }
}

export const actions = {
  iswinner (state) {
    setTimeout(function () {
      state.commit('chengshi')
    }, 500)
  },
  increment ({commit}) {
    console.log('张一')
    setTimeout(function () {
      console.log('王三')
    }, 500)
    setTimeout(function () {
      console.log('李四')
    }, 500)
    setTimeout(function () {
      console.log('刘五')
    }, 500)
    console.log('李二')
  }
}

export const getters = {
  countaa: state => state.count + '元',
  realindex: state => state.count.toString().length + '个字'
}
