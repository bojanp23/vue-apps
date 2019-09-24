<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span class="font-weight-light">Simple</span>
        <span> Vue.js </span>
        <span class="font-weight-light">Apps</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn to="/todo" text>Todo</v-btn>
        <v-btn to="/calculator" text>Calculator</v-btn>
        <v-btn to="/contact-form" text>Contact Form</v-btn>
        <v-btn to="/chat" text>Chat</v-btn>
        <v-btn disabled text>Coming soon</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        class="hidden-sm-and-down"
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="lighten-1 white--text text-center"
      style="width: 100%"
    >
      <v-card-text>
        <v-btn
          class="white--text"
          icon
        >
          <v-icon size="24px">mdi-linkedin-box</v-icon>
        </v-btn>
        <v-btn
          class="white--text"
          icon
        >
          <v-icon size="24px">mdi-github-circle</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>copy</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
