<template>
    <nav>
        <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="#">About</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="#">Contact</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavComponent'
}
</script>

<style scoped>
    nav {
            background-color: #f1f1f1;
            padding: 10px;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
        }

        li {
            margin: 0 10px;
        }

        li a {
            color: #333;
            text-decoration: none;
            font-size: 16px;
            padding: 5px 10px;
            border-radius: 3px;
            transition: background-color 0.3s ease;
        }

        li a:hover {
            background-color: #333;
            color: #fff;
        }
</style>
