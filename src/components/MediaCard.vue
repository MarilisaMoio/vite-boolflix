<script>
    import AppLanguage from "./AppLanguage.vue";

    export default{
        name: 'MediaCard',
        components: {
            AppLanguage
        },
        props: ["media"]
    }
</script>

<template>
    <div class="media-card">
        <div class="name">Name: {{ media.title }}</div>
        <div class="original-name">Original name: {{ media.original_title }}</div>
        <AppLanguage :mediaLang="media.original_language"></AppLanguage> 
        <div class="rating">Rating: {{ media.vote_average }}</div>
    </div>
</template>

<style scoped lang="scss">
    .media-card{
            width: calc(100% / 4 - 15px);
        }
</style>