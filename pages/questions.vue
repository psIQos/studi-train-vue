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
            :disabled="questionNumber === questions.length"
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
              :label="answer.answerText"
              hide-details
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
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import questions from '~/assets/questions'

export default {
  name: 'Questions',

  data() {
    return {
      questions,
      questionNumber: 1
    }
  },

  computed: {
    question() {
      return this.questions[this.questionNumber - 1]
    }
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
    evalQuestion() {

    },

    nextQuestion() {
      if (this.questionNumber === questions.length) { return }
      this.questionNumber += 1
    },

    prevQuestion() {
      if (this.questionNumber === 1) { return }
      this.questionNumber -= 1
    },

    saveAnswers() {

    }
  }
}
</script>
