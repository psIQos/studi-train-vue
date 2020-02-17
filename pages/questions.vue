<template>
  <v-card
    v-if="!!question"
  >
    <v-card-title
      class="justify-space-between"
    >
      <v-btn
        icon
        :disabled="questionNumber === 1"
        @click="prevQuestion"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <span class="d-inline-block">{{ $t('questions.QUESTION') }}</span>
      <div>
        <v-text-field
          :value="questionNumber.toString()"
          class="centered-input"
          flat
          dense
          solo
          hide-details
          @input="setCurrentQuestionNumber(parseInt($event) - 1)"
        />
      </div>
      <i>{{ question.complete ? $t('questions.QUESTION_INCOMPLETE') : $t('questions.QUESTION_COMPLETE') }}</i>

      <v-btn
        icon
        :disabled="questionNumber === questionsLength"
        @click="nextQuestion"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      {{ question.questionText }}
      <div>
        <v-row
          v-for="(answer, index) in question.answers"
          :key="index"
          class="d-flex"
          align="center"
        >
          <span>
            {{ numberToChar[index] }}:
          </span>
          <v-checkbox
            ref="answers"
            v-model="answers[index]"
            :label="answer.answerText"
            hide-details
          />
        </v-row>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-flex>
        <v-btn
          color="accent"
          class="mr-2"
          @click="evalQuestion"
        >
          {{ $t('questions.EVALUATE') }}
        </v-btn>
        <v-btn
          color="secondary"
          @click="saveAnswers(answers)"
        >
          {{ $t('questions.SAVE_ANSWERS') }}
        </v-btn>
      </v-flex>
      <v-flex class="text-right">
        <v-btn
          color="primary"
          @click="nextQuestion"
        >
          {{ $t('general.CONTINUE') }}
        </v-btn>
      </v-flex>
    </v-card-actions>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="primary"
    >
      {{ message }}
      <v-btn
        color="secondary"
        text
        @click="snackbar = false"
      >
        {{ $t('general.CLOSE') }}
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Questions',

  data() {
    return {
      snackbar: false,
      answers: [],
      correct: null,
      numberToChar: {
        0: 'A',
        1: 'B',
        2: 'C',
        3: 'D',
        4: 'E'
      },
      message: ''
    }
  },

  computed: {
    ...mapGetters('questions', {
      question: 'getCurrentQuestion',
      getCurrentQuestionNumber: 'getCurrentQuestionNumber',
      questionsLength: 'getQuestionsLength'
    }),

    questionNumber() {
      return this.getCurrentQuestionNumber + 1
    }
  },

  mounted() {
    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 13:
          this.evalQuestion()
          break
        case 37:
          this.prevQuestion()
          break
        case 39:
          this.nextQuestion()
          break
        case 32:
          this.saveAnswers(this.answers)
          break
        default:
          break
      }
    })
  },

  methods: {
    ...mapActions('questions', {
      nextQuestionState: 'nextQuestion',
      prevQuestionState: 'previousQuestion',
      saveAnswer: 'saveAnswer',
      saveAnswers: 'saveAnswers',
      setEval: 'setEvaluation',
      setCurrentQuestionNumber: 'setCurrentQuestionNumber'
    }),

    evalQuestion() {
      this.correct = null
      if (this.question.answers.find(item => item.correct == null)) {
        this.snackbar = true
        this.message = this.$t('general.SOMETHING_WENT_WRONG')
        return
      }
      if (this.question.answers.find((item, index) => item.correct !== (this.$refs.answers[index].inputValue ?? false))) {
        this.correct = false
        this.message = this.$t('questions.WRONG')
        this.snackbar = true
        this.setEval(false)
        return
      }
      this.correct = true
      this.message = this.$t('questions.CORRECT')
      this.setEval(true)
      this.snackbar = true
    },

    nextQuestion() {
      this.answers = []
      this.nextQuestionState()
    },

    prevQuestion() {
      this.answers = []
      this.prevQuestionState()
    }
  }
}
</script>

<style lang="css" scoped>
.centered-input >>> input {
  text-align: center !important;
}
</style>
