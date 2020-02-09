import questions from '~/assets/questions'

export const state = () => ({
  questions,
  evaluation: [],
  currentQuestionNumber: 0,
  currentQuestion: {}
})

export const getters = {
  getEvaluation: state => state.evaluation[state.currentQuestionNumber],
  getCurrentQuestion: state => state.currentQuestion,
  getCurrentQuestionNumber: state => state.currentQuestionNumber + 1,
  getQuestionsLength: state => state.questions.length
}

export const actions = {
  nuxtServerInit({ commit }) {
    commit('setCurrentQuestion')
  },

  setCurrentQuestion({ commit }) {
    commit('setCurrentQuestion')
  },

  nextQuestion({ commit }) {
    commit('nextQuestion')
    commit('setCurrentQuestion')
  },

  previousQuestion({ commit }) {
    commit('previousQuestion')
    commit('setCurrentQuestion')
  },

  saveAnswer({ commit }, { index, value }) {
    commit('saveAnswer', { index, value })
    commit('setCurrentQuestion')
  },

  saveAnswers({ commit }, index) {
    commit('saveAnswers', index)
  },

  setEvaluation({ commit }, value) {
    commit('setEvaluation', value)
  }
}

export const mutations = {
  setCurrentQuestion(state) {
    state.currentQuestion = state.questions[state.currentQuestionNumber]
  },

  nextQuestion(state) {
    if (state.currentQuestionNumber === state.questions.length) {
      return
    }
    state.currentQuestionNumber++
  },

  previousQuestion(state) {
    if (state.currentQuestionNumber === 0) {
      return
    }
    state.currentQuestionNumber--
  },

  saveAnswer(state, { index, value }) {
    state.questions[state.currentQuestionNumber].answers[index].correct = value
  },

  saveAnswers(state, index) {
    state.questions[state.currentQuestionNumber].answers =
      state.questions[state.currentQuestionNumber].answers.map(item =>
        ({
          ...item,
          correct: item.correct ?? false
        })
      )
  },

  setEvaluation(state, value) {
    state.evaluation[state.currentQuestionNumber] = value
  }
}
