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
    // const resp = await this.$axios.post('users/authenticate', {
    //   username,
    //   passhash
    // })

    // if (!resp.data) return

    // this.$auth.setToken('local', resp.data)
    await this.$auth.loginWith('local', {
      data: {
        username,
        passhash
      }
    })
    // // eslint-disable-next-line no-console
    // console.log(resp)
  }
}

export const mutations = {

}
