export const state = () => ({
  authenticated: false,
  username: ''
})

export const getters = {

}

export const actions = {
  async authenticate({ commit }, { username, password }) {
    const ip = await this.$axios.$post('users/authenticate', {
      username,
      passhash: password
    })
    // eslint-disable-next-line no-console
    console.log(ip)
  }
}

export const mutations = {

}
