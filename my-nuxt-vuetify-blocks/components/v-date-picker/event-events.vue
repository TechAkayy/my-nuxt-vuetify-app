<template>
  <v-row justify="space-between">
    <div>
      <div class="subheading">
        Defined by array
      </div>
      <v-date-picker
        v-model="date1"
        :events="arrayEvents"
        event-color="green lighten-1"
      ></v-date-picker>
    </div>
    <div>
      <div class="subheading">
        Defined by function
      </div>
      <v-date-picker
        v-model="date2"
        :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
        :events="functionEvents"
      ></v-date-picker>
    </div>
  </v-row>
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const arrayEvents = ref(null)
  const date1 = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10))
  const date2 = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10))
  function functionEvents (date) {
    const [, , day] = date.split('-')
    if ([12, 17, 28].includes(parseInt(day, 10))) return true
    if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
    return false
  }
  onMounted(() => {
    arrayEvents.value = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
  })
</script>

<script>
  export default {
    data: () => ({
      arrayEvents: null,
      date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }),

    mounted () {
      this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      })
    },

    methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
        return false
      },
    },
  }
</script>
