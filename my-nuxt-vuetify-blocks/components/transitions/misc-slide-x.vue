<template>
  <v-row
    justify="center"
  >
    <v-menu transition="slide-x-transition">
      <template #activator="{ props }">
        <v-btn
          color="primary"
          class="ma-2"
          v-bind="props"
        >
          Slide X Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <div class="mx-4 hidden-sm-and-down"></div>

    <v-menu transition="slide-x-reverse-transition">
      <template #activator="{ props }">
        <v-btn
          color="secondary"
          class="ma-2"
          v-bind="props"
        >
          Slide X Reverse Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>
