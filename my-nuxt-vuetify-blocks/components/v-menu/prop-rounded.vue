<template>
  <v-row justify="space-around">
    <v-menu
      v-for="([text, rounded], index) in btns"
      :key="text"
      :rounded="rounded"
      offset-y
    >
      <template #activator="{ props }">
        <v-btn
          :color="colors[index]"
          class="text-white ma-5"
          v-bind="props"
        >
          {{ text }} Radius
        </v-btn>
      </template>

      <v-list :rounded="rounded">
        <v-list-item
          v-for="item in items"
          :key="item"
          link
        >
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script setup>
  const btns = [
    ['Removed', '0'],
    ['Large', 'lg'],
    ['Custom', 'b-xl'],
  ]
  const colors = ['deep-purple accent-4', 'error', 'teal darken-1']
  const items = Array.from({ length: 4 }, (_, i) => `Item ${i}`)
</script>

<script>
  export default {
    data: () => ({
      btns: [
        ['Removed', '0'],
        ['Large', 'lg'],
        ['Custom', 'b-xl'],
      ],
      colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
      items: [...Array(4)].map((_, i) => `Item ${i}`),
    }),
  }
</script>
