<script>
    import { store } from "../store.js"

    export default{
        name: 'AppLanguage',
        props: ["mediaLang"],
        data(){
            return {
                store,
                mediaLangFlag: ""
            }
        },
        methods: {
            getEmojiFlag(mediaLang){
                store.flags.forEach((flag) => {
                    if (flag.lang === mediaLang){
                        this.mediaLangFlag = flag.emoji;
                    }
                })
            }
        },
        mounted(){
            this.getEmojiFlag(this.mediaLang)
        }
    }
</script>

<template>
    <div class="original-language">{{ mediaLangFlag !== "" ? mediaLangFlag : mediaLang }}</div>
</template>

<style scoped lang="scss">

</style>