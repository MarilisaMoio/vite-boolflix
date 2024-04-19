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
            getEmojiFlag(){
                let isFlag = false
                this.mediaLangFlag = this.mediaLang;

                store.flags.forEach((flag) => {
                    if (flag.lang === this.mediaLang){
                        isFlag = true
                        this.mediaLangFlag = flag.emoji
                    }
                })
                console.log(this.mediaLang, isFlag, this.mediaLangFlag)
                
                return isFlag;
            }
        },
    }
</script>

<template>
    <div class="original-language" :class="{ 'flag': this.getEmojiFlag() }">{{ mediaLangFlag }}</div>
</template>

<style scoped lang="scss">
    .flag{
        font-size: 2rem
    }

</style>