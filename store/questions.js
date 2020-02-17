export const state = () => ({
  questions: [],
  evaluation: [],
  currentQuestionNumber: 0,
  currentQuestion: {}
})

export const getters = {
  getEvaluation: state => state.evaluation[state.currentQuestionNumber],
  getCurrentQuestion: state => state.currentQuestion,
  getCurrentQuestionNumber: state => state.currentQuestionNumber,
  getQuestionsLength: state => state.questions.length
}

export const actions = {
  nuxtServerInit({ commit }) {
    commit('setCurrentQuestion')
  },

  setCurrentQuestion({ commit }) {
    commit('setCurrentQuestion')
  },

  setCurrentQuestionNumber({ commit }, index) {
    if (isNaN(index)) {
      return
    }
    commit('setCurrentQuestionNumber', index)
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
    if (state.questions.length === 0) {
      return
    }
    state.currentQuestion = state.questions[state.currentQuestionNumber]
  },

  nextQuestion(state) {
    if (state.currentQuestionNumber === state.questions.length - 1) {
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

  setCurrentQuestionNumber(state, index) {
    if (index >= state.questions.length || index < 0) {
      return
    }
    state.currentQuestionNumber = index
  },

  saveAnswer(state, { index, value }) {
    state.questions[state.currentQuestionNumber].answers[index].correct = value
  },

  saveAnswers(state, answers) {
    state.questions[state.currentQuestionNumber].answers =
      state.questions[state.currentQuestionNumber].answers.map((item, index) =>
        ({
          ...item,
          correct: answers[index] ?? (item.correct ?? false)
        })
      )
  },

  setEvaluation(state, value) {
    state.evaluation[state.currentQuestionNumber] = value
  }
}
