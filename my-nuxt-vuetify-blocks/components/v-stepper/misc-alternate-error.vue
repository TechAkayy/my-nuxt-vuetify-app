<template>
  <v-stepper alt-labels>
    <v-stepper-header>
      <v-stepper-item
        complete
        value="1"
      >
        <template #title>
          Ad type
        </template>
      </v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item
        complete
        value="2"
      >
        <template #title>
          Ad style
        </template>
      </v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item
        :rules="[() => false]"
        value="3"
      >
        <template #title>
          Custom channels
        </template>

        <template #subtitle>
          Alert message
        </template>
      </v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item value="46">
        <template #title>
          Get code
        </template>
      </v-stepper-item>
    </v-stepper-header>
  </v-stepper>
</template>
