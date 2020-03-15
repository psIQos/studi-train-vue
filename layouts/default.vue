<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      clipped
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
              <v-list-item-title v-text="$t(item.title)" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-layout>
      <template v-slot:append>
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
            <v-list-item-title v-text="$t('login.LOGOUT')" />
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      clipped-left
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
import links from '@/config/drawer_links'

export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      items: links,
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
