<template>
  <div class="text-center">
    <v-btn
      color="indigo"
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      vertical
    >
      <div class="text-subtitle-1 pb-2">This is a snackbar message</div>

      <p>This is a longer paragraph explaining something</p>

      <template #actions>
        <v-btn
          color="indigo"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const snackbar = ref(false)
</script>

<script>
  export default {
    data: () => ({
      snackbar: false,
    }),
  }
</script>
