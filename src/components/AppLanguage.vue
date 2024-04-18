<script>
    import { store } from "../store.js"

    export default{
        name: 'AppLanguage',
        props: ["mediaLang"],
        data(){
            return {
                store,
                mediaLangFlag: "",
                isFlag: false
            }
        },
        methods: {
            getEmojiFlag(mediaLang){
                this.isFlag = false;
                store.flags.forEach((flag) => {
                    if (flag.lang === mediaLang){
                        this.isFlag = true;
                        this.mediaLangFlag = flag.emoji;
                    }
                })
                if (this.isFlag === false){
                        this.mediaLangFlag = mediaLang;
                    }
                return true
            }
        },
    }
</script>

<template>
    <div class="original-language" :class="{ 'flag': this.isFlag}" v-if="getEmojiFlag(this.mediaLang)">{{ this.mediaLangFlag }}</div>
</template>

<style scoped lang="scss">
    .flag{
        font-size: 2rem
    }

</style>