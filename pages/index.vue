<template>
  <v-row
    align="stretch"
    dense
  >
    <v-col
      md="6"
      cols="12"
    >
      <CategoriesOverview class="pa-3" />
    </v-col>
    <v-col
      md="6"
      cols="12"
    >
      <TestOverview />
    </v-col>
  </v-row>
</template>

<script>
import CategoriesOverview from '~/components/categoriesOverview.vue'
import TestOverview from '~/components/testOverview.vue'

export default {
  components: {
    CategoriesOverview,
    TestOverview
  }
}
</script>
