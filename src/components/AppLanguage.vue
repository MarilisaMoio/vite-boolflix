<script>
    import { store } from "../store.js"

    export default{
        name: 'AppLanguage',
        props: ["mediaLang"],
        data(){
            return {
                store,
                isFlag: false
            }
        },
        methods: {
            getEmojiFlag(){
                let mediaLangFlag = this.mediaLang;
                
                store.flags.forEach((flag) => {
                    if (flag.lang === this.mediaLang){
                        this.isFlag = true
                        mediaLangFlag = flag.emoji
                        console.log(this.mediaLang, flag.emoji, mediaLangFlag)
                    }
                })
                
                return mediaLangFlag;
            }
        },
    }
</script>

<template>
    <div class="original-language" :class="{ 'flag': this.isFlag }">{{ getEmojiFlag() }}</div>
</template>

<style scoped lang="scss">
    .flag{
        font-size: 2rem
    }

</style>