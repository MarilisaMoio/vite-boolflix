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
        <div class="series">
            <h2>Le tue serie</h2>
            <div class="wrapper">
                <MediaCard v-for="serie in store.theseSeries" :media="serie"></MediaCard>
                <div v-if="store.theseSeries.length === 0">Nessuna serie TV trovato</div>
            </div>
        </div>
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
    .container > * + * {
        margin-top: 30px
    }

</style>