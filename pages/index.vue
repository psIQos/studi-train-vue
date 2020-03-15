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
    <v-col cols="12">
      <EvaluationOverview />
    </v-col>
  </v-row>
</template>

<script>
import EvaluationOverview from '@/components/evaluationOverview.vue'
import CategoriesOverview from '~/components/categoriesOverview.vue'
import TestOverview from '~/components/testOverview.vue'

export default {
  name: 'Dashboard',

  components: {
    CategoriesOverview,
    TestOverview,
    EvaluationOverview
  }
}
</script>
