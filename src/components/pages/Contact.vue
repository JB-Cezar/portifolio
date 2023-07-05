<template>
    <div>
        <h1>Contact Me </h1>
        <form action="">
            <label>
                Email
            <input type="email" id="email" name="email" placeholder="Email">
            </label>
            <label>
                Subject
                <input type="text" id="subject" name="subject" placeholder="Subject">
            </label>
            <label>
                Name
                <input type="text" id="name" name="name" placeholder="Name">
            </label>
            <label>
                Description
                <textarea name="description" id="description" cols="40" rows="6"></textarea>
            </label>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactPage'
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    row-gap: 2vh;
    background-color: #27374D;
}
form{
    display: flex;
    flex-direction: column;
    background-color: #526D82;
    padding: 3%;
    width: 80%;
    row-gap: 3vh;
    border-radius: 30px;
}
input{
    border: none;
    padding: 1%;
}
input, textarea{
    background-color: #e6eef2;
    border-radius: 8px;
}
label{
    display: flex;
    flex-direction: column;
}
label,h1{
    color: #DDE6ED;
}
</style>
