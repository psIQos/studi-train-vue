import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'vuex',
      storage: window.localStorage,
      reducer: state => ({ questions: {
        currentQuestionNumber: state.questions.currentQuestionNumber,
        currentQuestion: state.questions.currentQuestion,
        evaluation: state.questions.evaluation }
      })
    /* your options */
    }).plugin(store)
  })
}
