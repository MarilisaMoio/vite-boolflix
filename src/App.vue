<script>
    import axios from "axios";
    import AppSearch from "./components/AppSearch.vue";
    import AppMain from "./components/AppMain.vue";
    import { store } from "./store.js";

    export default{
        components: {
            AppSearch,
            AppMain
        },
        data(){
            return {
                store,
            }
        },
        methods: {
            getMediaFromApi(){
                const queryParams = {
                    api_key: "74a3b47e7ab47502c450cd402aae77fc",
                    query: store.userInput,
                    include_adult: store.isAdult
                }

                axios.get("https://api.themoviedb.org/3/search/movie", { params: queryParams })
                .then((response) => {
                    store.theseMovies = response.data.results
                })

                axios.get("https://api.themoviedb.org/3/search/tv", { params: queryParams })
                .then((response) => {
                    store.theseSeries = response.data.results
                })
            }
        }
    }
</script>

<template>
    <AppSearch @searchThisInput="getMediaFromApi"></AppSearch>
    <AppMain></AppMain>
</template>

<style lang="scss">
    @use './style/general';
</style>