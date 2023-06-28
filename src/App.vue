<template>
  <div>
    <HeaderComponent/>
    <NavComponent/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import NavComponent from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavComponent,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
