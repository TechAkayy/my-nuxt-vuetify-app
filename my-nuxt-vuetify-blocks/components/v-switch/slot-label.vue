<template>
  <v-switch v-model="switchMe">
    <template #label>
      Turn on the progress:
      <v-progress-circular
        :indeterminate="switchMe"
        size="24"
        class="ms-2"
      ></v-progress-circular>
    </template>
  </v-switch>
</template>

<script setup>
  import { ref } from 'vue'

  const switchMe = ref(false)
</script>

<script>
  export default {
    data () {
      return {
        switchMe: false,
      }
    },
  }
</script>
