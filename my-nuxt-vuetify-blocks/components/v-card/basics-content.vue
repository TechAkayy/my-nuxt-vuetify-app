<template>
  <div class="d-flex align-center flex-column">
    <div class="text-subtitle-2">With props</div>

    <v-card
      width="400"
      title="This is a title"
      subtitle="This is a subtitle"
      text="This is content"
    ></v-card>

    <div class="mt-4 text-subtitle-2">With slots</div>

    <v-card width="400">
      <template #title>
        This is a title
      </template>

      <template #subtitle>
        This is a subtitle
      </template>

      <template #text>
        This is content
      </template>
    </v-card>

    <div class="mt-4 text-subtitle-2">With markup</div>

    <v-card width="400">
      <v-card-item>
        <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a subtitle</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        This is content
      </v-card-text>
    </v-card>
  </div>
</template>
