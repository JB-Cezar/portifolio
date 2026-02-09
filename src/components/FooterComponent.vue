<template>
<footer>
    <p>{{ $t('footer.copyright') }}</p>
    <ul>
        <li>
            <a target="_blank" href="https://www.facebook.com/joaobento.crescencio" class="fa-brands fa-facebook-f"></a>
        </li>
        <li>
            <a target="_blank" href="https://www.linkedin.com/in/jb-crescencio-a649bb253/" class="fa-brands fa-linkedin-in"></a>
        </li>
        <li>
            <a target="_blank" href="https://github.com/JB-Cezar" class="fa-brands fa-github"></a>
        </li>
        <!-- <li>
            <a target="_blank" href="#" class="fa-regular fa-envelope"></a>
        </li> -->
    </ul>
</footer>
</template>

<script>
export default {
    name: "FooterComp"
}
</script>

<style scoped>
footer{
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.2rem;
  justify-content: center;
  background-color: #020617;
  border-top: 1px solid rgba(148, 163, 184, 0.25);
  padding: 1.8rem 1.5rem;
}

ul{
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  column-gap: 0.8rem;
  margin: 0;
  padding: 0;
}

li{
  display: flex;
}

p{
  color: #9ca3af;
  font-size: 0.85rem;
}

a{
  color: #e5f0ff;
  text-decoration: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  transition: background-color 0.18s ease-out, transform 0.18s ease-out;
  background-color: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.35);
}

a:hover{
  background: radial-gradient(circle at 0% 0%, #22c55e, #ff4b81);
  color: #050816;
  transform: translateY(-2px);
}
</style>
