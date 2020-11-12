<template>
    <aside class="favorites" v-if="character != false">
        <span>
            <router-link :to="{ name: 'Hero', params: { character } }">
                <img
                    :src="character.path"
                    alt="image hero"
                />
            </router-link>
        </span>
        <h2>{{ character.name }}</h2>
        <br />
        <button @click.prevent="removeHero">DisLike</button>
    </aside>
</template>

<script>
    export default {
        props: [
            'character'
        ],
        methods: {
            removeHero() {
                this.$store.commit('removeFavorite', this.character.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/main.scss';

aside {
    margin: 10px auto;
    padding-top: 1px;
    padding-bottom: 10px;
    width: 180px;

    background-color: $black;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 90% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 95%, 90% 100%, 0 100%);
}

span {
    background: $red;
}

img {
    margin-top: 0;
}

h2 {
    text-align: left;
    margin-left: 20px;
    margin-bottom: 0;
    color: white;
}

</style>