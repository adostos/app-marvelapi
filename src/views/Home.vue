<template>
    <div class="home">
        <img :src="image">
        <h2>Welcome to the world's greatest comics API!</h2>
        <p>
            The Marvel Comics API is a tool to help developers everywhere create amazing, uncanny and incredible web sites
            and applications using data from the 70-plus years of the Marvel age of comics.
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                image: 'http://hidetoyasunori.com/portfolio/wp-content/uploads/2017/02/marvel_heroes_logo.png'
            }
        },  
    }
</script>

<style lang="scss" scoped>
@import '@/main.scss';

img {
    width: 30em;
    margin: 5em 0;
}

p {
    margin: 0 auto;
    text-transform: none;
    width: 30em;
}
</style>
