<template>
  <v-container fluid>
    <v-checkbox v-model="checkbox">
      <template #label>
        <div>
          I agree that
          <v-tooltip location="bottom">
            <template #activator="{ props }">
              <a
                target="_blank"
                href="https://vuetifyjs.com"
                v-bind="props"
                @click.stop
              >
                Vuetify
              </a>
            </template>
            Opens in new window
          </v-tooltip>
          is awesome
        </div>
      </template>
    </v-checkbox>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const checkbox = ref(false)
</script>

<script>
  export default {
    data () {
      return {
        checkbox: false,
      }
    },
  }
</script>
