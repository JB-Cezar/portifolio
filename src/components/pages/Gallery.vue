<template>
    <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li v-for="product in products" :key="product.id">
          {{ product.id}} - {{product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'GalleryPage',
    data(){
    return {
      api: "http://testapi.jasonwatmore.com/products",
      products: []
    }
  },
  methods: {
    async readApi(){
      try{
        let response = await fetch(this.api);
        this.products = await response.json();
      }
      catch(error){
        console.log(error)
      }
    },
  },
  created(){
    this.readApi();
  }
}
</script>

<style scoped>

</style>
