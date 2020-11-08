<template>
    <div class="search">
        <h2>Find your hero</h2>

        <the-search-form />

        <strong>Recent searches:</strong><br />
        <p>{{ $store.state.allSearches }}</p>

        <search-hero-card :character="$store.state.character[0]" />
    </div>
</template>

<script>
import TheSearchForm from '../components/search/TheSearchForm'
import SearchHeroCard from '../components/search/SearchHeroCard'

    export default {
        name: 'Search',
        components: {
            TheSearchForm,
            SearchHeroCard
        },
    }
</script>

<style lang="scss" scoped>

h2 {
    font-weight: 800;
}

strong {
    text-transform: none;
}

p {
    margin: 0 auto;
    max-width: 600px;
    text-align: center;
}

</style>