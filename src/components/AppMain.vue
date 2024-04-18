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
    <main>
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
                    <div v-if="store.theseSeries.length === 0">Nessuna serie TV trovata</div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    main{
        background-color: $second-gray;
        min-height: 700px;
        padding: 30px 0;
        color: white;
    }
    h2{
        margin-bottom: 10px;
        color: red;
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