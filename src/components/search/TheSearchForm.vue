<template>
    <form @submit.prevent="commitName">
        <input
            type="text"
            v-model="search"
            placeholder="The name of the hero"
            ref="searchInput"
        />
    </form>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            search: ''
        }
    },
    methods: {
        commitName() {
            this.$store.commit('searchCharacter', this.search)
            this.$store.dispatch('getCharacter')            
            this.search = ''
        }, 
    },
    mounted() {
        this.$refs.searchInput.focus()
    },
}
</script>

<style lang="scss" scoped>
@import '@/main.scss';

form {
    margin: 20px;
}

input {
    display: block;
    margin: 0 auto;
    padding: 0.3em;
    padding-bottom: 0.1em;
    width: 90%;
    max-width: 300px;

    border: 1px solid $black;
    border-radius: 0.5em;
    background-color: white;
    outline: none;

    text-align: center;
    text-transform: uppercase;
    color: $black;
    font-size: 1em;
    font-weight: 700;

    &::placeholder {
        text-transform: none;
        color: #bbb;
    }
}

p {
    display: inline-flex;
}

</style>