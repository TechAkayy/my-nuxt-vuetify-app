<template>
  <v-select
    :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
    label="Fizzbuzz"
  >
    <template #item="{ item, props }">
      <v-list-item v-bind="props">
        <template #title>
          {{ item.raw }}
        </template>
      </v-list-item>
    </template>
  </v-select>
</template>
