<script>
    import { store } from "../store.js"
    export default{
        name: 'AppMain',
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="movie-card" v-for="movie in store.theseMovies">
            <div class="name">Name: {{ movie.title }}</div>
            <div class="original-name">Original name: {{ movie.original_title }}</div>
            <div class="lang">Original language: {{ movie.original_language }}</div>
            <div class="rating">Rating: {{ movie.vote_average }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .container{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        .movie-card{
            width: calc(100% / 4 - 15px);
        }
    }

</style>