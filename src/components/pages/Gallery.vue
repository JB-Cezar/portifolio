<template>
<div class="gallery">
    <h1>My Projects</h1>
    <aside>
      <div class="pic" v-for="pic in gallery" :key="pic.id">
        <figure>
          <img :src= pic.picture :alt= pic.name>
          <figcaption>
            <h3>{{pic.name}}</h3>
            <small>{{pic.day}}</small>
            <p>{{pic.description}}</p>
          </figcaption>
        </figure>
      </div>
    </aside>
</div>
</template>
<script>
export default {
  name: 'GalleryPage',
  data(){
    return {
      gallery: [],
      galleryApi: "http://localhost/Final_Project_Portifolio_JB/portifolio-jb/PHP/portifolio/inc/rest/api/V2/portifolio.php"
    }
  },
  methods: {
    async getGallery(){
        try{
            let response = await fetch(this.galleryApi);
            this.gallery = await response.json();
        }catch(error){
            console.log(error);
        }
    },
  },
  created(){
    this.getGallery();
  }
}
</script>

<style scoped>
.gallery{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #27374D;
    padding: 2%;
}
h1,h3,small,p{
  color: #DDE6ED;
}
h1{
  padding-bottom: 3%;
}
h3{
  font-size: 30px;
}
small{
  font-size: 20px;
}
aside{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 2vh;
  column-gap: 2vh;
}
.pic{
  width: 40%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: #526D82;
}
figure{
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3vh;
  padding: 2%;
}
figcaption{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 83%;
  row-gap: 2vh;
}
img{
  width: 90%;
  /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
