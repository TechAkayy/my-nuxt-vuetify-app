<template>
  <v-range-slider
    v-model="range"
    :max="10"
    :min="-10"
    :step="1"
    hide-details
    class="align-center"
  >
    <template #prepend>
      <v-text-field
        v-model="range[0]"
        hide-details
        single-line
        type="number"
        variant="outlined"
        density="compact"
        style="width: 70px"
      ></v-text-field>
    </template>
    <template #append>
      <v-text-field
        v-model="range[1]"
        hide-details
        single-line
        type="number"
        variant="outlined"
        style="width: 70px"
        density="compact"
      ></v-text-field>
    </template>
  </v-range-slider>
</template>

<script setup>
  import { ref } from 'vue'

  const range = ref([-5, 5])
</script>

<script>
  export default {
    data () {
      return {
        range: [-5, 5],
      }
    },
  }
</script>
