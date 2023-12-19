<template>
  <v-banner
    lines="one"
    icon="mdi-wifi-strength-alert-outline"
    color="warning"
  >
    <template #text>
      No Internet connection
    </template>

    <template #actions>
      <v-btn>
        Dismiss
      </v-btn>

      <v-btn>
        Retry
      </v-btn>
    </template>
  </v-banner>
</template>
