import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'vuex',
      storage: window.localStorage
    /* your options */
    }).plugin(store)
  })
}
