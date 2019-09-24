<template>
  <v-text-field
    :label=label
    :counter=counter
    required
  >
  </v-text-field>
</template>

<script>
export default {
  name: 'form-input',
  props: {
    label: {
      type: String
    },
    counter: {
      type: String
    }
  },
  data: () => ({

  })
}
</script>
