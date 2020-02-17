<template>
  <v-card>
    Tschüss
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Logout',

  methods: {
    ...mapActions('login', ['authenticate'])
  }
}
</script>
