<template>
  <div class="text-center">
    <v-btn
      :loading="loading"
      @click="loading = !loading"
    >
      Custom loader

      <template #loader>
        <v-progress-linear indeterminate></v-progress-linear>
      </template>
    </v-btn>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'

  const loading = ref(false)
  watch(loading, val => {
    if (!val) return
    setTimeout(() => (loading.value = false), 2000)
  })
</script>

<script>
  export default {
    data: () => ({
      loading: false,
    }),

    watch: {
      loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
