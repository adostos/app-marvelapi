<template>
    <div class="favorites">
        <button
            @click="clearAll"
            v-if="$store.state.favorites.length != 0"
        >
            Clear All
        </button>
        <br />
        <article
            v-for="item in $store.state.favorites"
            :key="item.id"
        >
            <favorites-card :favorite="item" />
        </article>
    </div>
</template>

<script>
import FavoritesCard from '../components/FavoritesCard'

    export default {
        components: {
            FavoritesCard
        },
        methods: {
            clearAll() {
                this.$store.commit('clearAll')
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/main.scss';

article {
    display: inline-flex;
    width: 13em;
}

button {
    margin-top: 2em;
    margin-bottom: 1em;
}
</style>
