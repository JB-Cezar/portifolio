<template>
        <header class="class-04-header">
        <section class="header-left">
            <div>
                <h2>
                   My personal portfolio
                </h2>
                <p>
                    Please, contact me if you are interested in my work
                </p>
                <a href="#">Contact Me</a>
            </div>
        </section>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>
<style scoped>
.class-04-header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-image: url("../assets/img/Captura de Tela 2023-06-15 às 7.37.16 PM.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 60vh;
    }

    .header-left {
        height: 100%;
        width: 50%;
        background-color: rgba(240, 240, 240, 0.301);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-left {
        color: dimgray;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>