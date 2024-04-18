<script>
    export default{
        name: 'AppRating',
        props: ["mediaRating"],
        data(){
            return {
                numberOfStars: 1,
                remainingStars: 2
            }
        },
        methods: {
            getTotalStars(rating){
                const halfRating = rating / 2;
                console.log(rating, halfRating)
                this.numberOfStars = Math.ceil(halfRating.toFixed(1))
                this.remainingStars = 5 - this.numberOfStars;
                
                return true
            }
        },
    }
</script>

<template>
    <div class="rating">
        <i v-for="n in this.numberOfStars" class="fa-solid fa-star yellow" v-if="getTotalStars(this.mediaRating)"></i>
        <i v-for="n in this.remainingStars" class="fa-solid fa-star gray" v-if="getTotalStars(this.mediaRating)"></i>
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