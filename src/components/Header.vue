<template>
    <header class="class-04-header">
        <section class="header-left">
            <div>
                <h2>
                   {{$t('header.title')}}
                </h2>
                <p>
                    {{$t('header.description')}}
                </p>
                <div class="language-buttons">
                    <p @click="setLocale('pt-BR')">PT-BR</p>
                    <span> | </span>
                    <p @click="setLocale('en')">EN</p>
                </div>
            </div>
        </section>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
}
</script>
<style scoped>
.class-04-header{
    background-image: url("../assets/img/pexels-kevin-ku-577585.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.language-buttons{
    display: flex;
    padding-top: 10%;
    flex-direction: row;
    column-gap: 10px;
}
.language-buttons p{
    cursor: pointer;
    padding: 5px 10px;
}
.language-buttons p:hover{
    background-color: #084266;
    color: #fff;
    border-radius: 5px;
}
</style>