<template>
    <main class="home">
        <h1>My Skills</h1>
        <aside class="bigBlok">
            <section class="blok" id="skills">
                <article>
                    <h3>Developer Skills</h3>
                    <section>
                        <figure>
                            <img src="../../../dist/img/HTML5_logo_and_wordmark.svg.png" alt="HTML5">
                            <small id="html" style="width: 97%;"></small>
                            <p>97%</p>
                        </figure>
                        <figure>
                            <img src="../../../dist/img/CSS3_logo_and_wordmark.svg.png" alt="css3">
                            <small id="css" style="width: 70%;"></small>
                            <p>70%</p>
                        </figure>
                        <figure>
                            <img src="../../../dist/img/Unofficial_JavaScript_logo_2.svg.png" alt="js">
                            <small id="php" style="width: 95%;"></small>
                            <p>95%</p>
                        </figure>
                        <figure>
                            <img src="../../../dist/img/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png" alt="jquery">
                            <small id="php" style="width: 87%;"></small>
                            <p>87%</p>
                        </figure>
                        <figure>
                            <img src="../../../dist/img/React-icon.svg.webp" alt="React">
                            <small id="php" style="width: 85%;"></small>
                            <p>85%</p>
                        </figure>
                        <figure>
                            <img src="../../../dist/img/Vue.js_Logo_2.svg.png" alt="vue">
                            <small id="vue" style="width: 80%;"></small>
                            <p>80%</p>
                        </figure>
                        <figure>
                            <img src="../../../dist/img/PHP-logo.svg.png" alt="php">
                            <small id="php" style="width: 70%;"></small>
                            <p>70%</p>
                        </figure>
                        <figure>
                            <img src="../../../dist/img/Bootstrap_logo.svg.png" alt="Bootstrap">
                            <small id="php" style="width: 60%;"></small>
                            <p>60%</p>
                        </figure>
                        <figure>
                            <img src="../../../dist/img/MySQL-Logo.png" alt="MySQL">
                            <small id="php" style="width: 95%;"></small>
                            <p>95%</p>
                        </figure>
                    </section>
                </article>
            </section>
            <aside>
                <!-- WORK -->
                <section class="blok" id="work">
                    <article>
                        <h3>Work</h3>
                        <section>
                            <aside>
                                <h4>Kitchen Assistant - McDonald's</h4>
                                <small>2020-2021</small>
                            </aside>
                            <p>
                                Responsible for helping with the daily operation of the restaurant, keeping the area clean and organized, assisting with customer service and ensuring service efficiency.
                            </p>
                        </section>
                        <section>
                            <aside>
                                <h4>IT Technician - SEPLAG</h4>
                                <small>2021-2022</small>
                            </aside>
                            <p>
                                Provide technical assistance and guidance to users of technology products such as software, hardware, electronic devices and computer networks. The purpose of technical support is to solve problems that users may have with their device or technology services.
                            </p>
                        </section>
                    </article>
                </section>
                <!-- EDUCATION -->
                <section class="blok" id="education">
                    <article>
                        <h3>Education</h3>
                        <section>
                            <aside>
                                <h4>High School</h4>
                                <small>2017-2019</small>
                                <p>School Tiradentes</p>
                            </aside>
                            <aside>
                                <h4>Computer Engineering</h4>
                                <small>2019-2021</small>
                                <p>UNIC</p>
                            </aside>
                            <aside>
                                <h4>Web Developer</h4>
                                <small>2023-2024</small>
                                <p>Tamwood</p>
                            </aside>
                        </section>
                    </article>
                </section>
                <!-- LANGUAGE -->
                <section class="blok" id="language">
                    <article>
                        <h3>Language</h3>
                        <section>
                            <aside>
                                <h4>English:</h4>
                                <p>Bilingual</p>
                            </aside>
                            <aside>
                                <h4>Portuguese:</h4>
                                <p>Fluent</p>
                            </aside>
                            <aside>
                                <h4>Spanish:</h4>
                                <p>Bilingual</p>
                            </aside>
                        </section>
                    </article>
                </section>
            </aside>
        </aside>
    </main>
</template>

<script>

export default{
    name: 'HomePage'
}
</script>

<style scoped>
/* .bigBlok{
    display: flex;
    flex-direction: row;
}
.bigBlok>aside{
    width: 60%;
    align-items: center;
}
main{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #27374D;
    padding: 2%;

}
.blok{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2vh;
    padding-top: 2vh;
    width: 53%;
}
article{
    display: flex;
    flex-direction: column;
    background-color: #526D82;
    width: 85%;
    row-gap: 4vh;
    padding: 2%;
    border-radius: 20px;
}
article > section{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
aside{
    display: flex;
    flex-direction: column;
}
h1,h4,h3,small,p{
    color: #DDE6ED;
}
h1{
    padding-bottom: 3%;
    padding-top: 1%;
}
h4{
    font-size: 20px;
}
h3{
    background-color: #27374D;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    font-size: 4vh;
    border-radius: 8px;
}
#work section{
    display: flex;
    flex-direction: column;
    row-gap: 1vh;
}
#skills p{
    width: 5%;
}
p{
    width: 95%;
}
#skills section{
    display: flex;
    flex-direction: column;
    row-gap: 5vh;
}
figure{
    display: flex;
    align-items: center;
    column-gap: 1vh;
}
figure > small{
    height: 4px;
    background: linear-gradient(90deg, #27374D 0%,transparent 100%);
}
img{
    width: 5%;
} */
</style>
