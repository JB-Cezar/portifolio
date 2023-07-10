<template>
<main class="gallery">
  <!-- <ModalBox v-if="showModal" @close="closeModal" :description="modalData"/> -->
    <h1>My Projects</h1>
    <aside>
      <div class="pic">
          <figure>
            <img src="../../../dist/img/project/p1.png" alt="Robotic LTDA">
            <figcaption>
              <h3>Horaizon Robotic LTDA</h3>
              <small>02/12/2023</small>
            </figcaption>
          </figure>
      </div>
      <div class="pic">
        <a target="_blank" href="https://github.com/Dayhun/TourGuide">
          <figure>
            <img src="../../../dist/img/project/p2.png" alt="">
            <figcaption>
              <h3>Tour Guide</h3>
              <small>03/16/2023</small>
            </figcaption>
          </figure>
        </a>
      </div>
      <div class="pic">
        <a target="_blank" href="https://github.com/JB-Cezar/RPG-game">        
          <figure>
            <img src="../../../dist/img/project/p3.png" alt="">
            <figcaption>
              <h3>RPG Game</h3>
              <small>04/19/2023</small>
            </figcaption>
          </figure>
        </a>
      </div>
      <div class="pic">
        <a target="_blank" href="https://github.com/JB-Cezar/Shop-Cart">        
          <figure>
            <img src="../../../dist/img/project/p4.png" alt="">
            <figcaption>
              <h3>Shop Cart</h3>
              <small>03/30/2023</small>
            </figcaption>
          </figure>
        </a>
      </div>
      <div class="pic">
        <a target="_blank" href="https://github.com/ayapan0811/FinalProject-JS2">        
          <figure>
            <img src="../../../dist/img/project/p5.png" alt="">
            <figcaption>
              <h3>Bowwow Sitter</h3>
              <small>05/13/2023</small>
            </figcaption>
          </figure>
        </a>
      </div>
      <div class="pic">
        <a target="_blank" href="https://github.com/JB-Cezar/Final-Project-PHP">        
          <figure>
            <img src="../../../dist/img/project/p6.png" alt="">
            <figcaption>
              <h3>Food Truck</h3>
              <small>06/08/2023</small>
            </figcaption>
          </figure>
        </a>
      </div>
      <div class="pic">
        <a target="_blank" href="https://github.com/seonlim/Weather-Lim-Santiago-Joan">        
          <figure>
            <img src="../../../dist/img/project/p7.png" alt="">
            <figcaption>
              <h3>Sunny Weather</h3>
              <small>07/08/2023</small>
            </figcaption>
          </figure>
        </a>
      </div>
    </aside>
</main>
</template>
<script>

export default {
  name: 'GalleryPage',
  // data(){
  //   return {
  //     gallery: [],
  //     galleryApi: "http://localhost/Final_Project_Portifolio_JB/portifolio-jb/PHP/portifolio/inc/rest/api/V2/portifolio.php",
  //     showModal: false,
  //     modalData: {}
  //   }
  // },
  // methods: {
  //   async getGallery(){
  //     try{
  //       let response = await fetch(this.galleryApi);
  //       this.gallery = await response.json();
  //     }catch(error){
  //       console.log(error);
  //     }
  //   },
  //   openModal(i) {
  //     this.showModal = true;
  //     this.modalData=this.gallery[i];
  //   },
  //   closeModal() {
  //     this.showModal = false;
  //   },
  // },
  // created(){
  //   this.getGallery();
  // }
}
</script>
