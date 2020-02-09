<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title>
          {{ $t('questions.HEADING') }}
        </v-card-title>
        <v-card-text>
          Frage: {{ questions[0].questionText }}
          <div>
            <div
              v-for="answer in questions[0].answers"
              :key="answer.answerText"
            >
              {{ answer.answerText }}
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import questions from '~/assets/questions.json'

export default {
  name: 'Questions',

  data() {
    return {
      questions
    }
  }
}
</script>
