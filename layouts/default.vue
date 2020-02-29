<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-layout
        column
        fill-height
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            nuxt
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-spacer />
        <v-list>
          <v-list-item
            style="cursor: pointer"
            @click="$auth.logout()"
          >
            <v-list-item-action>
              <v-icon>
                mdi-logout
              </v-icon>
            </v-list-item-action>
            <v-list-item-title v-text="'Logout'" />
          </v-list-item>
        </v-list>
      </v-layout>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-title>
        <span class="accent--text">{{ title }}</span>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Questions',
          to: 'questions'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },

  computed: {
    title() {
      return this.$t(`pages.${this.$route.name?.split('___')[0].toUpperCase()}`)
    }
  }
}
</script>
