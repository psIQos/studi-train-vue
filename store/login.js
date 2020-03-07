import crypto from 'crypto'

export const state = () => ({
  authenticated: false,
  username: ''
})

export const getters = {

}

export const actions = {
  async authenticate({ commit }, { username, password }) {
    const passhash = crypto.createHmac('sha256', password).digest('hex')
    await this.$auth.loginWith('local', {
      data: {
        username,
        passhash
      }
    })
  }
}

export const mutations = {

}
