<template>
  <header class="class-04-header">
    <section class="header-left">
      <div>
        <p class="eyebrow">Front-end Developer</p>
        <h2>
          {{ $t('header.title') }}
        </h2>
        <p class="hero-description">
          {{ $t('header.description') }}
        </p>

        <div class="language-buttons">
          <button type="button" @click="setLocale('pt-BR')" :class="{'is-active': isActive('pt-BR')}">
            PT-BR
          </button>
          <button type="button" @click="setLocale('en')" :class="{'is-active': isActive('en')}">
            EN
          </button>
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
      this.$i18n.locale = locale
    },
    isActive(locale) {
      return this.$i18n.locale === locale
    }
  }
}
</script>

<style scoped>
.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.8rem;
  color: #9ca3af;
}

.hero-description {
  margin-top: 0.25rem;
}

.language-buttons {
  display: inline-flex;
  margin-top: 1.8rem;
  padding: 0.2rem;
  border-radius: 999px;
  background-color: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.45);
}

.language-buttons button {
  cursor: pointer;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: none;
  background: transparent;
  color: #cbd5f5;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background 0.15s ease-out, color 0.15s ease-out;
}

.language-buttons button.is-active {
  background: linear-gradient(90deg, #ef4444 0%, #b91c1c 100%);
  color: #050816;
}

.language-buttons button:not(.is-active):hover {
  color: #ffffff;
}

@media (max-width: 640px) {
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.6rem;
  }
}
</style>