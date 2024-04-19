<script>
    import AppLanguage from "./AppLanguage.vue";
    import AppRating from "./AppRating.vue"

    export default{
        name: 'MediaCard',
        components: {
            AppLanguage,
            AppRating
        },
        props: ["media"]
    } 
</script>

<template>
    <div class="media-card">
        <!-- TODO: controllare il bad gateway (no problemi alle immagini stampate) -->
        <div class="flip-card-inner">
            <div class="img-wrapper flip-card-front">
                <img v-if="media.poster_path" :src="'https://image.tmdb.org/t/p/w342' + media.poster_path" alt="">
                <img v-else src="https://dday.imgix.net/system/uploads/news/main_image/41689/4efd4f_netflix_cover.jpg?ar=702%3A360&fit=crop&auto=format%2Ccompress&s=138bac91f67fc4e60d58f0cb846d285e">
            </div>
            <div class="flip-card-back">
                <div class="name">Name: {{ media.title || media.name }}</div>
                <div class="original-name">Original name: {{ media.original_title || media.original_name }}</div>
                <AppLanguage :mediaLang="media.original_language"></AppLanguage> 
                <AppRating :mediaRating="media.vote_average"></AppRating>
            </div>
        </div>
        
    </div>
</template>

<style scoped lang="scss">
    .media-card{
            &:hover .flip-card-inner{
                transform: rotateY(180deg);
            }
            width: calc(100% / 4 - 15px);
            height: 500px;
            perspective: 1000px;
            .flip-card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                text-align: center;
                transition: transform 0.8s;
                transform-style: preserve-3d;
            }
            .img-wrapper{
                overflow: hidden;
                display: flex;
                justify-content: center;
                margin-bottom: 10px;
                img{
                    height: 100%;
                }
            }
            .flip-card-front, .flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            .flip-card-front {
                background-color: #bbb;
                color: black;
            }
            .flip-card-back {
                backface-visibility: hidden;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: rgba(126, 2, 2, 0.737);
                color: white;
                transform: rotateY(180deg);
            }
        }

        i{
            text-shadow: 0px 0px 2px black;
            &.yellow{
                color:darkorange;
            }
            &.gray{
                color:lightgray
            }
        }
</style>