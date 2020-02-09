<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title class="justify-space-between">
          <v-btn
            icon
            :disabled="questionNumber === 1"
            @click="prevQuestion"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <span>{{ $t('questions.QUESTION') }} {{ questionNumber }}</span>
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
            <v-checkbox
              v-for="(answer, index) in question.answers"
              :key="index"
              ref="answers"
              :label="`${numberToChar[index]}: ${answer.answerText}`"
              :input-value="answer.correct"
              hide-details
              @change="saveAnswer({index, value: $event}); saveAnswers()"
            />
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
              @click="saveAnswers"
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
          :timeout="500"
          color="primary"
        >
          {{ correct ? $t('questions.CORRECT') : $t('general.SOMETHING_WENT_WRONG') }}
          <v-btn
            color="secondary"
            text
            @click="snackbar = false"
          >
            {{ $t('general.CLOSE') }}
          </v-btn>
        </v-snackbar>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Questions',

  data() {
    return {
      snackbar: false,
      correct: null,
      numberToChar: {
        0: 'A',
        1: 'B',
        2: 'C',
        3: 'D',
        4: 'E'
      }
    }
  },

  computed: {
    ...mapGetters('questions', {
      question: 'getCurrentQuestion',
      questionNumber: 'getCurrentQuestionNumber',
      questionsLength: 'getQuestionsLength'
    })
  },

  mounted() {
    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 13:
          this.saveAnswers()
          break
        case 37:
          this.prevQuestion()
          break
        case 39:
          this.nextQuestion()
          break
        default:
          break
      }
    })
  },

  methods: {
    ...mapActions('questions', {
      nextQuestion: 'nextQuestion',
      prevQuestion: 'previousQuestion',
      saveAnswer: 'saveAnswer',
      saveAnswers: 'saveAnswers'
    }),

    evalQuestion() {
      this.correct = null
      if (this.question.answers.find(item => item.correct == null)) {
        this.snackbar = true
        return
      }
      if (this.question.answers.find((item, index) => item.correct !== this.$refs.answers[index].inputValue)) {
        this.correct = false
        this.snackbar = true
        return
      }
      this.correct = true
      this.snackbar = true
    }
  }
}
</script>
