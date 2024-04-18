<script>
    import { store } from "../store.js"
    import MediaCard from "./MediaCard.vue"

    export default{
        name: 'AppMain',
        components: {
            MediaCard
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="movies">
            <h2>I tuoi film</h2>
            <div class="wrapper">
                <MediaCard v-for="movie in store.theseMovies" :media="movie"></MediaCard>
                <div v-if="store.theseMovies.length === 0">Nessun film trovato</div>
            </div>
        </div>
        <!-- <div class="movie-card" v-for="movie in store.theseMovies">
            <div class="name">Name: {{ movie.title }}</div>
            <div class="original-name">Original name: {{ movie.original_title }}</div>
            <AppLanguage :movieLang="movie.original_language"></AppLanguage> 
            <div class="rating">Rating: {{ movie.vote_average }}</div>
        </div> -->
    </div>
</template>

<style scoped lang="scss">
    h2{
        margin-bottom: 10px;
    }
    .wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

</style>