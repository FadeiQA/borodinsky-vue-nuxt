export default {
  state() {
    return {
      name: '',
      tel: '',
      time: '',
      date: '',
    }
  },
  mutations: {
    mutateState(state, date) {
      state[date.name] = date.value
    }
  }
}
