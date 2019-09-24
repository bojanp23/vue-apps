<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-4 py-10>
        <h1 class="display-2 font-weight-bold mb-3">
          Contact Form
        </h1>

          <v-form>
            <v-container>
              <form-input
                label="First Name"
                counter="10" />
              <form-input
                label="Last name"
                counter="15" />
              <form-input
                label="Email"
                counter="20" />

              <form-btn />
            </v-container>
          </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Button from './Button'
import Input from './Input'

export default {
  components: {
    'form-btn': Button,
    'form-input': Input
  },

  data () {
    return {
    }
  }
}
</script>
