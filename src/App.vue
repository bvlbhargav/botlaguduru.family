<template> 
<v-app>
  <v-toolbar app>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Family Tree</v-btn>
      <v-btn flat>Events</v-btn>
      <v-btn flat>Contact</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-title>Botlaguduru.family</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view/>
    </v-container>
  </v-content>
  <v-footer app>
    A self intiation project by Botlaguduru Family
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
