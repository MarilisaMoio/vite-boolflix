<script>
    import { store } from "../store.js"

    export default{
        name: 'AppLanguage',
        props: ["movieLang"],
        data(){
            return {
                store,
                movieLangFlag: ""
            }
        },
        methods: {
            getEmojiFlag(movieLang){
                store.flags.forEach((flag) => {
                    if (flag.lang === movieLang.toUpperCase()){
                        this.movieLangFlag = flag.emoji;
                        console.log(this.movieLangFlag)
                    }
                })
            }
        },
        mounted(){
            this.getEmojiFlag(this.movieLang)
        }
    }
</script>

<template>
    <div class="original-language">{{ movieLangFlag !== "" ? movieLangFlag : movieLang }}</div>
</template>

<style scoped lang="scss">

</style>