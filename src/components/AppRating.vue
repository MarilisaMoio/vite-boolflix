<script>
    export default{
        name: 'AppRating',
        props: ["mediaRating"],
        data(){
            return {
                numberOfStars: 0
            }
        },
        methods: {
            getTotalStars(){               
                const halfRating = this.mediaRating / 2;
                this.numberOfStars = Math.ceil(halfRating.toFixed(1));
                return this.numberOfStars;
            }
        },
    }
</script>

<template>
    <div class="rating">
        <i v-for="n in this.getTotalStars()" class="fa-solid fa-star yellow"></i>
        <i v-if="this.getTotalStars() < 5" v-for="n in 5 - this.getTotalStars()" class="fa-solid fa-star gray"></i>
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