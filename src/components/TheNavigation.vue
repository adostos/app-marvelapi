<template>
    <nav class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/search">Search</router-link> |
        <router-link to="/favorites">Favorites</router-link> |
        <router-link to="/hero">Hero</router-link>
    </nav>
</template>

<style lang="scss" scoped>
@import '@/main.scss';

.nav {
    margin: 2em auto 2.5em;
    padding: 0.8em 2em;
    display: inline-block;

    white-space: nowrap;
    background-color: $black;
    color: white;
    font-weight: bold;

    -webkit-clip-path: polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0 30%);
    clip-path: polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0 30%);

    a {
        margin: 10px;
        font-weight: bold;
        color: white;
        text-decoration: none;
        transition: all .1s ease-in-out;

        &:hover {
            color: $grey;
        }

        &.router-link-exact-active {
            color: $red;
        }
    }
}
</style>