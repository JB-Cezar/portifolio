<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <div class="navbar-logo">
        <span class="logo-mark">
          <img src="/favicon.ico" alt="Site logo" class="logo-icon" />
        </span>
        <span class="logo-text">João Bento</span>
      </div>

      <ul class="navbar-links">
        <li>
          <router-link class="nav-link" to="/">{{ $t('nav.home') }}</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/about">{{ $t('nav.about') }}</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/gallery">{{ $t('nav.gallery') }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavComponent'
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  width: 100%;
  backdrop-filter: blur(18px);
  background: linear-gradient(
    90deg,
    rgba(2, 6, 23, 0.95),
    rgba(15, 23, 42, 0.92),
    rgba(2, 6, 23, 0.95)
  );
  border-bottom: 1px solid rgba(148, 163, 184, 0.25);
}

.navbar-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
}

.navbar-logo {
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
}

.logo-mark {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148, 163, 184, 0.45);
  background: transparent;
}

.logo-icon {
  width: 22px;
  height: 22px;
  border-radius: 4px;
}

.logo-text {
  font-size: 0.95rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #e5f0ff;
}

.navbar-links {
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  position: relative;
  color: #cbd5f5;
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-bottom: 0.2rem;
  transition: color 0.2s ease-out;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.15rem;
  width: 0;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, #ef4444, #b91c1c);
  transition: width 0.22s ease-out;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link:hover::after,
.router-link-exact-active.nav-link::after {
  width: 100%;
}

@media (max-width: 640px) {
  .navbar-inner {
    padding-inline: 1rem;
  }

  .navbar-links {
    column-gap: 1rem;
  }

  .logo-text {
    display: none;
  }
}
</style>
