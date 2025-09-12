<template>
    <main class="home">
        <h1>{{$t('home.title')}}</h1>
        <aside class="bigBlok">
            <section class="blok" id="skills">
                <article>
                    <h3>{{$t('home.subtitle')}}</h3>
                    <section>
                        <figure>
                            <img src="../../assets/img/logos/HTML5_logo_and_wordmark.svg.png" alt="HTML5">
                            <small id="html" style="width: 97%;"></small>
                            <p>97%</p>
                        </figure>
                        <figure>
                            <img src="../../assets/img/logos/CSS3_logo_and_wordmark.svg.png" alt="css3">
                            <small id="css" style="width: 70%;"></small>
                            <p>70%</p>
                        </figure>
                        <figure>
                            <img src="../../assets/img/logos/seal-color.png" alt="scss">
                            <small id="css" style="width: 67%;"></small>
                            <p>67%</p>
                        </figure>
                        <figure>
                            <img src="../../assets/img/logos/Unofficial_JavaScript_logo_2.svg.png" alt="js">
                            <small id="php" style="width: 95%;"></small>
                            <p>95%</p>
                        </figure>
                        <figure>
                            <img src="../../assets/img/logos/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png" alt="jquery">
                            <small id="php" style="width: 87%;"></small>
                            <p>87%</p>
                        </figure>
                        <figure>
                            <img src="../../assets/img/logos/React-icon.svg.webp" alt="React">
                            <small id="php" style="width: 85%;"></small>
                            <p>85%</p>
                        </figure>
                        <figure>
                            <img src="../../assets/img/logos/Vue.js_Logo_2.svg.png" alt="vue">
                            <small id="vue" style="width: 80%;"></small>
                            <p>80%</p>
                        </figure>
                        <figure>
                            <img src="../../assets/img/logos/PHP-logo.svg.png" alt="php">
                            <small id="php" style="width: 70%;"></small>
                            <p>70%</p>
                        </figure>
                        <figure>
                            <img src="../../assets/img/logos/Bootstrap_logo.svg.png" alt="Bootstrap">
                            <small id="php" style="width: 60%;"></small>
                            <p>60%</p>
                        </figure>
                        <figure>
                            <img src="../../assets/img/logos/MySQL-Logo.png" alt="MySQL">
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
                        <h3>{{$t('home.experience.title')}}</h3>
                        <section>
                            <aside>
                                <h4>{{$t('home.experience.tamwood.title')}}</h4>
                                <small>2019-2022</small>
                            </aside>
                            <p>
                                {{$t('home.experience.tamwood.description')}}
                            </p>
                        </section>
                        <section>
                            <aside>
                                <h4>{{ $t('home.experience.seplag.title') }}</h4>
                                <small>2021-2022</small>
                            </aside>
                            <p>
                                {{ $t('home.experience.seplag.description1') }}
                            </p>
                            <p>
                                {{ $t('home.experience.seplag.description2') }}
                            </p>
                            <p>
                                {{ $t('home.experience.seplag.description3') }}
                            </p>
                            <p>
                                {{ $t('home.experience.seplag.description4') }}
                            </p>
                        </section>
                    </article>
                </section>
                <!-- EDUCATION -->
                <section class="blok" id="education">
                    <article>
                        <h3>{{ $t('home.education.title') }}</h3>
                        <section>
                            <aside>
                                <h4>{{ $t('home.education.escola.title') }}</h4>
                                <small>2017-2019</small>
                                <p>{{ $t('home.education.escola.description') }}</p>
                            </aside>
                            <aside>
                                <h4>{{ $t('home.education.unic.title') }}</h4>
                                <small>2019-2021</small>
                                <p>{{ $t('home.education.unic.description') }}</p>
                            </aside>
                            <aside>
                                <h4>{{ $t('home.education.tamwood.title') }}</h4>
                                <small>2023-2024</small>
                                <p>{{ $t('home.education.unic.description') }}</p>
                            </aside>
                        </section>
                    </article>
                </section>
                <!-- LANGUAGE -->
                <section class="blok" id="language">
                    <article>
                        <h3>{{ $t('home.language.title') }}</h3>
                        <section>
                            <aside>
                                <h4>{{ $t('home.language.english.title') }}:</h4>
                                <p>{{ $t('home.language.english.description') }}</p>
                            </aside>
                            <aside>
                                <h4>{{ $t('home.language.portuguese.title') }}:</h4>
                                <p>{{ $t('home.language.portuguese.description') }}</p>
                            </aside>
                            <aside>
                                <h4>{{ $t('home.language.spanish.title') }}:</h4>
                                <p>{{ $t('home.language.spanish.description') }}</p>
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
