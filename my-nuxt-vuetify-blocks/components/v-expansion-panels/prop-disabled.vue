<template>
  <div>
    <div class="d-flex">
      <v-checkbox
        v-model="disabled"
        label="Disabled"
      ></v-checkbox>
    </div>

    <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
        <v-expansion-panel-text>
          Some content
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>Panel 2</v-expansion-panel-title>
        <v-expansion-panel-text>
          Some content
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>Panel 3</v-expansion-panel-title>
        <v-expansion-panel-text>
          Some content
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const panel = ref([0, 1])
  const disabled = ref(false)
</script>

<script>
  export default {
    data: () => ({
      panel: [0, 1],
      disabled: false,
    }),
  }
</script>
