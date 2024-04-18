<script>
    import AppLanguage from "./AppLanguage.vue";
    import AppRating from "./AppRating.vue"

    export default{
        name: 'MediaCard',
        components: {
            AppLanguage,
            AppRating
        },
        props: ["media"],
    }
</script>

<template>
    <div class="media-card">
        <!-- TODO: controllare il bad gateway (no problemi alle immagini stampate) -->
        <img :src="`https://image.tmdb.org/t/p/w342${media.poster_path}`" alt="">
        <div class="name">Name: {{ media.title || media.name }}</div>
        <div class="original-name">Original name: {{ media.original_title || media.original_name }}</div>
        <AppLanguage :mediaLang="media.original_language"></AppLanguage> 
        <AppRating :mediaRating="media.vote_average"></AppRating>
    </div>
</template>

<style scoped lang="scss">
    .media-card{
            width: calc(100% / 4 - 15px);
            img {
                width: 100%;
            }
        }
</style>