<template>
  <v-card>
    <v-card-text class="pb-1">
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
          md="8"
          class="pb-0"
        >
          <v-text-field
            v-model="username"
            outlined
            filled
            autofocus
            label="Accountname / Email"
            @keydown.enter="$refs.password.focus()"
          />
        </v-col>
        <v-col
          cols="12"
          md="8"
          class="pb-0"
        >
          <v-text-field
            ref="password"
            v-model="password"
            outlined
            filled
            type="password"
            label="Passwort"
            @keydown.enter="authenticate({username, password})"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
          md="8"
          class="d-inline-flex justify-space-between pt-0 pb-3"
        >
          <v-btn color="secondary">
            Registrieren
          </v-btn>
          <v-btn color="primary">
            Anmelden
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'unauthorized',

  name: 'Login',

  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    ...mapActions('login', ['authenticate'])
  }
}
</script>
