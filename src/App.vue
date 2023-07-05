<template>
  <div>
    <HeaderComponent/>
    <NavComponent/>
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import NavComponent from './components/Nav.vue'
import FooterComp from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavComponent,
    FooterComp
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
