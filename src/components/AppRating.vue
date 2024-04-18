<script>
    export default{
        name: 'AppRating',
        props: ["mediaRating"],
        data(){
            return {
                stars: "",
                numberOfStars: 5,
                remainingStars: 0
            }
        },
        methods: {
            getTotalStars(rating){
                const halfRating = rating / 2;;
                const numberOfStar = Math.ceil(halfRating.toFixed(1))
                const remainingStars = 5 - numberOfStar;
                for(let i = 1; i <= remainingStars; i++){
                    --this.numberOfStars
                    ++this.remainingStars
                }
                console.log(this.numberOfStars, this.remainingStars)
                
            }
        },
        mounted(){
            this.getTotalStars(this.mediaRating)
        }
    }
</script>

<template>
    <div class="rating">
        <i v-for="n in this.numberOfStars" class="fa-solid fa-star yellow"></i>
        <i v-for="n in this.remainingStars" class="fa-solid fa-star gray"></i>
    </div>
</template>

<style scoped lang="scss">
    .yellow{
        color:darkorange;
    }
    .gray{
        color:lightgray
    }
    i{
        text-shadow: 0px 0px 2px black;
    }

</style>