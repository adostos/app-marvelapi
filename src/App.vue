<template>
    <div id="app">
        <the-navigation />
        <router-view />
    </div>
</template>

<script>
import TheNavigation from './components/TheNavigation'

    export default {
        components: {
            TheNavigation
        }
    }
</script>

<style lang="scss">
@import '@/main.scss';

#app {
    font-family: 'Roboto', 'Open Sans', 'Trebuchet MS', 'Helvetica', sans-serif;
    text-align: center;
    color: $black;
    text-transform: uppercase;
}
</style>
