<script>
    export default{
        name: 'AppLanguage',
        props: ["movieLang"],
        data(){
            return {
                movieLangFlag: ""
            }
        },
        methods: {
            getEmojiFlag(movieLang){
                console.log(movieLang)
                const flags = [
                    {
                        lang: "EN",
                        emoji: "🇬🇧"
                    },
                    {
                        lang: "IT",
                        emoji: "🇮🇹"
                    },
                    {
                        lang: "FR",
                        emoji: "🇫🇷"
                    },
                    {
                        lang: "ES",
                        emoji: "🇪🇸"
                    },
                    {
                        lang: "JA",
                        emoji: "🇯🇵"
                    },
                    {
                        lang: "KO",
                        emoji: "🇰🇷"
                    },
                    {
                        lang: "DE",
                        emoji: "🇩🇪"
                    }
                ];
                flags.forEach((flag) => {
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