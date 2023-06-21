<template>
  <HeaderComponent/>
  <NavComponent/>
  <HomePage/>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import NavComponent from './components/Nav.vue'
import HomePage from './components/pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavComponent,
    HomePage
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
