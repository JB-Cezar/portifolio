<template>
    <main>
        <h1 style="color:white;">{{ $t('about.title') }}</h1>
        <section class="about">
            <figure>
                <img class="profile-image" src="../../assets/img/eu.jpeg" alt="me">
                <figcaption>
                    <p>
                        {{ $t('about.description.p1') }}
                    </p>
                    <br>
                    <p>
                        {{ $t('about.description.p2') }}
                    </p>
                    <br>
                    <p>
                        {{ $t('about.description.p3') }}
                    </p>
                    <br>
                    <p>
                        {{ $t('about.description.p4') }}
                    </p>
                    <br>
                    <p>
                        {{ $t('about.description.p5') }}
                    </p>
                    <br>
                    <p>
                        {{ $t('about.description.p6') }}
                    </p>
                </figcaption>
            </figure>
        </section>
        <section class="blok">
            <aside class="download">
                <a href="../../assets/img/Resume/Profile (1).pdf" download="Resume João Bento">{{ $t('about.download') }}</a>
            </aside>
        </section>
    </main>
</template>


<script>
export default {
    name: 'AboutPage'
}
</script>
