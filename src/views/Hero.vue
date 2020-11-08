<template>
    <div class="hero" v-if="character != null">
        <span>
            <router-link to="/search">
                <img
                    :src="character.path"
                    alt="image hero"
                />
            </router-link>
        </span>
    
        <article>
            <h2>{{ character.name }}</h2>
            <h3>Description:</h3>

            <p v-if="character.description.length !== 0">
                {{ character.description }}
            </p>
            <p v-else>
                <em>Description is not defined.</em>
            </p>
        </article>
    </div>
</template>

<script>
    export default {
        props: [
            'character'
        ],
    }
</script>

<style lang="scss" scoped>
@import '@/main.scss';

.hero {
    display: flex;
    margin: 30px auto;
    padding-right: 30px;

    width: 50em;
    background-color: $black;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 96% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 96% 100%, 0 100%);
}

span {
    background-color: $red;
    height: 180px;
    margin-right: 20px;
}

img {
    margin-right: 5px;
    margin-bottom: 0;
}

article {
    justify-content: flex-start;
}

h2 {
    color: $red;
    text-align: left;
    margin-bottom: 10px;
}

h3, p {
    color: white;
    text-align: left;
    text-transform: none;
}

h3 {
    margin: 0;
}

p {
    margin-top: 5px;
}

</style>