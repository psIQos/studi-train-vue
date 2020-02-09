const questions = require('~/assets/questions')

export const state = () => ({
  questions,
  currentQuestionNumber: 0,
  currentQuestion: null
})

export const getters = {
  getCurrentQuestion: state => state.currentQuestion,
  getCurrentQuestionNumber: state => state.currentQuestionNumber
}

export const actions = {
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
  }
}

export const mutations = {
  setCurrentQuestion({ state }) {
    state.currentQuestion = state.questions[state.currentQuestionNumber]
  },

  nextQuestion({ state }) {
    if (state.currentQuestionNumber === state.questions.length) {
      return
    }
    state.currentQuestionNumber++
  },

  previousQuestion({ state }) {
    if (state.currentQuestionNumber === 0) {
      return
    }
    state.currentQuestionNumber--
  }
}
