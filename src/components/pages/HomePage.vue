<template>
    <main>
        <h1>My Skills</h1>
        <!-- WORK -->
        <section class="blok" id="work">
            <article>
                <h3>Work</h3>
                <aside>
                    <h4>chef - McDonald's</h4>
                    <small>2020-2021</small>
                </aside>
                <p>
                    responsible for helping with the daily operation of the restaurant, keeping the area clean and organized, assisting with customer service and ensuring service efficiency.
                </p>
                <aside>
                    <h4>IT technician - SEPLAG</h4>
                    <small>2077-2080</small>
                </aside>
                <p>
                    provide technical assistance and guidance to users of technology products such as software, hardware, electronic devices and computer networks. The purpose of technical support is to solve problems that users may have with their device or technology services.
                </p>
            </article>
        </section>
        <!-- EDUCATION -->
        <section class="blok" id="education">
            <article>
                <h3>Education</h3>
                <section>
                    <aside>
                        <h4>high school</h4>
                        <small>2017-2019</small>
                        <p>school tiradentes</p>
                    </aside>
                    <aside>
                        <h4>computer engineering</h4>
                        <small>2019-2021</small>
                        <p>UNIC</p>
                    </aside>
                    <aside>
                        <h4>Web developer</h4>
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
    </main>
</template>

<script>

export default{
    name: 'HomePage'
}
</script>

<style scoped>
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
    width: 100%;
}
article{
    display: flex;
    flex-direction: column;
    background-color: #526D82;
    width: 85%;
    row-gap: 2vh;
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
p{
    width: 95%;
}
</style>
