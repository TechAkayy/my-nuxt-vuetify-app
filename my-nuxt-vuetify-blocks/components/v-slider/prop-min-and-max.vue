<template>
  <v-slider
    v-model="slider"
    class="align-center"
    :max="max"
    :min="min"
    hide-details
  >
    <template #append>
      <v-text-field
        v-model="slider"
        hide-details
        single-line
        density="compact"
        type="number"
        style="width: 70px"
      ></v-text-field>
    </template>
  </v-slider>
</template>

<script setup>
  import { ref } from 'vue'

  const min = ref(-50)
  const max = ref(90)
  const slider = ref(40)
</script>

<script>
  export default {
    data () {
      return {
        min: -50,
        max: 90,
        slider: 40,
      }
    },
  }
</script>
